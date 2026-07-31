import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  activeTab?: string;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProps> = ({ children, activeTab }) => {
  const isAnimating = useRef(false);
  const targetY = useRef(0);
  const currentY = useRef(0);

  // Sync scroll position on tab/route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    targetY.current = 0;
    currentY.current = 0;
  }, [activeTab]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    // Lerp helper formula
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Clamp targetY within document scroll bounds
      targetY.current = Math.min(Math.max(0, targetY.current), maxScroll);

      // Interpolate current scroll towards target
      currentY.current = lerp(currentY.current, targetY.current, 0.085);

      window.scrollTo(0, currentY.current);

      // Locomotive Parallax elements update
      const elements = document.querySelectorAll<HTMLElement>('[data-scroll-speed]');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-scroll-speed') || '0');
        if (!isNaN(speed) && speed !== 0) {
          const yOffset = -(currentY.current * speed * 0.15);
          el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        }
      });

      // Continue loop until close to target
      if (Math.abs(targetY.current - currentY.current) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        currentY.current = targetY.current;
        window.scrollTo(0, targetY.current);
        isAnimating.current = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Check if user is scrolling inside a modal/drawer or nested scrollable element
      let targetEl = e.target as HTMLElement | null;
      while (targetEl && targetEl !== document.body) {
        const overflowY = window.getComputedStyle(targetEl).overflowY;
        if (
          (overflowY === 'auto' || overflowY === 'scroll') &&
          targetEl.scrollHeight > targetEl.clientHeight
        ) {
          return; // Allow native modal scrolling
        }
        targetEl = targetEl.parentElement;
      }

      e.preventDefault();

      // Smooth scroll delta calculation
      const delta = e.deltaY;
      targetY.current += delta * 0.85;

      if (!isAnimating.current) {
        isAnimating.current = true;
        currentY.current = window.scrollY;
        requestAnimationFrame(updateScroll);
      }
    };

    // Keep targetY in sync if user uses scrollbar or keyboard arrows
    const onScroll = () => {
      if (!isAnimating.current) {
        targetY.current = window.scrollY;
        currentY.current = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
};
