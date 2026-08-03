import { motion } from 'framer-motion';

// 散落圆球配置
const bubbles = [
  { top: '8%', left: '12%', size: 80, color: 'rgba(255, 180, 180, 0.35)', delay: 0 },
  { top: '15%', left: '75%', size: 110, color: 'rgba(255, 200, 160, 0.3)', delay: 0.5 },
  { top: '22%', left: '40%', size: 50, color: 'rgba(255, 220, 180, 0.4)', delay: 1 },
  { top: '35%', left: '85%', size: 90, color: 'rgba(255, 170, 200, 0.3)', delay: 1.5 },
  { top: '45%', left: '8%', size: 70, color: 'rgba(255, 200, 150, 0.35)', delay: 2 },
  { top: '50%', left: '55%', size: 60, color: 'rgba(255, 230, 180, 0.4)', delay: 0.8 },
  { top: '60%', left: '88%', size: 100, color: 'rgba(255, 190, 170, 0.3)', delay: 1.2 },
  { top: '70%', left: '20%', size: 85, color: 'rgba(255, 210, 180, 0.35)', delay: 2.5 },
  { top: '78%', left: '70%', size: 65, color: 'rgba(255, 180, 200, 0.35)', delay: 0.3 },
  { top: '88%', left: '45%', size: 95, color: 'rgba(255, 220, 160, 0.3)', delay: 1.8 },
  { top: '95%', left: '15%', size: 75, color: 'rgba(255, 200, 180, 0.35)', delay: 0.6 },
  { top: '12%', left: '92%', size: 55, color: 'rgba(255, 240, 200, 0.4)', delay: 1.4 },
  { top: '30%', left: '65%', size: 45, color: 'rgba(255, 190, 190, 0.4)', delay: 0.9 },
  { top: '42%', left: '28%', size: 55, color: 'rgba(255, 220, 170, 0.35)', delay: 2.2 },
  { top: '65%', left: '50%', size: 40, color: 'rgba(255, 230, 190, 0.4)', delay: 1.7 },
];

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            delay: b.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}