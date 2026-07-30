import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  Footprints, 
  Sparkles, 
  Smile, 
  Star, 
  Heart, 
  Zap, 
  Crown,
  ShieldCheck,
  Gift
} from 'lucide-react';

interface ToyParticle {
  id: number;
  Icon: React.ComponentType<{ style?: React.CSSProperties }>;
  x: number; // percentage width
  y: number; // percentage height
  size: number; // in px
  color: string;
  floatDuration: number;
}

const TOY_ICONS = [
  { Icon: Smile, color: 'text-[#FF6B6B]/40' },
  { Icon: Car, color: 'text-[#FF9900]/45' },
  { Icon: Footprints, color: 'text-[#00B4D8]/40' },
  { Icon: Heart, color: 'text-[#EC4899]/40' },
  { Icon: Sparkles, color: 'text-[#8B5CF6]/45' },
  { Icon: Star, color: 'text-[#FFB703]/50' },
  { Icon: Crown, color: 'text-[#FF8E53]/40' },
  { Icon: Zap, color: 'text-[#FF6B6B]/45' },
  { Icon: ShieldCheck, color: 'text-[#4ECDC4]/45' },
  { Icon: Gift, color: 'text-[#9333EA]/40' },
];

export const FloatingToyBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [docDimensions, setDocDimensions] = useState({ width: 1200, height: 3500 });

  // Generate 60 small faded particles spread down document height with dense top/Hero coverage
  const [particles] = useState<ToyParticle[]>(() => {
    const list: ToyParticle[] = [];
    const totalCount = 60;
    const sizes = [20, 22, 24, 26, 28, 30];

    // Explicit Hero section positions (top 1% to 14%)
    const heroPositions = [
      { x: 5, y: 1.2 },
      { x: 92, y: 1.5 },
      { x: 18, y: 3.5 },
      { x: 82, y: 4.2 },
      { x: 48, y: 2.0 },
      { x: 30, y: 6.5 },
      { x: 70, y: 7.2 },
      { x: 10, y: 9.0 },
      { x: 88, y: 10.5 },
      { x: 52, y: 12.0 },
    ];

    for (let i = 0; i < totalCount; i++) {
      let x = 0;
      let y = 0;

      if (i < heroPositions.length) {
        x = heroPositions[i].x;
        y = heroPositions[i].y;
      } else {
        const col = (i - heroPositions.length) % 5;
        const row = Math.floor((i - heroPositions.length) / 5);
        const baseX = (col / 5) * 88 + 6;
        const baseY = 14 + (row / 10) * 82;
        const jitterX = (Math.sin(i * 12.3) * 6);
        const jitterY = (Math.cos(i * 7.4) * 3);
        x = Math.min(94, Math.max(4, baseX + jitterX));
        y = Math.min(98, Math.max(14, baseY + jitterY));
      }

      const iconObj = TOY_ICONS[i % TOY_ICONS.length];
      const size = sizes[i % sizes.length];
      const floatDuration = 5 + (i % 7) * 0.8;

      list.push({
        id: i,
        Icon: iconObj.Icon,
        x,
        y,
        size,
        color: iconObj.color,
        floatDuration,
      });
    }
    return list;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use pageX and pageY to get full page cursor coordinates
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    const updateDimensions = () => {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 3000);
      const w = window.innerWidth || 1200;
      setDocDimensions({ width: w, height: h });
    };

    updateDimensions();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateDimensions);
    
    const interval = setInterval(updateDimensions, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateDimensions);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map((p) => {
        const posX = (p.x / 100) * docDimensions.width;
        const posY = (p.y / 100) * docDimensions.height;

        const dx = posX - mousePos.x;
        const dy = posY - mousePos.y;
        const dist = Math.hypot(dx, dy);

        const repelRadius = 220; // Radius in px
        let repelX = 0;
        let repelY = 0;
        let pushRotate = 0;

        if (dist < repelRadius && dist > 0) {
          const normForce = (repelRadius - dist) / repelRadius;
          const force = Math.pow(normForce, 1.5);
          const maxPush = 160;
          const angle = Math.atan2(dy, dx);
          
          repelX = Math.cos(angle) * force * maxPush;
          repelY = Math.sin(angle) * force * maxPush;
          pushRotate = (dx >= 0 ? 1 : -1) * force * 35;
        }

        const IconComponent = p.Icon;

        return (
          <motion.div
            key={p.id}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              x: repelX,
              y: repelY,
              rotate: pushRotate ? pushRotate : [0, 8, -8, 0],
            }}
            transition={{
              x: { type: 'spring', stiffness: 260, damping: 14, mass: 0.5 },
              y: { type: 'spring', stiffness: 260, damping: 14, mass: 0.5 },
              rotate: pushRotate 
                ? { type: 'spring', stiffness: 200, damping: 12 }
                : { duration: p.floatDuration, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div className={`filter drop-shadow-2xs ${p.color}`}>
              <IconComponent style={{ width: p.size, height: p.size }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
