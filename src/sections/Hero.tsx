import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';

const skillTags = [
  { label: '用户增长', emoji: '🚀' },
  { label: '数据分析', emoji: '📊' },
  { label: '产品功能文档撰写', emoji: '📝' },
  { label: '海外社媒运营', emoji: '🌍' },
  { label: 'AI赋能建设', emoji: '🤖' },
  { label: '市场营销', emoji: '✨' },
];

function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const bubbles: {
      x: number; y: number; r: number; speed: number;
      opacity: number; wobble: number; wobbleSpeed: number; color: string;
    }[] = [];
    const colors = [
      'rgba(255, 150, 150, 0.4)',
      'rgba(255, 180, 140, 0.4)',
      'rgba(255, 200, 160, 0.4)',
      'rgba(255, 220, 180, 0.35)',
      'rgba(255, 170, 170, 0.4)',
      'rgba(255, 140, 160, 0.35)',
    ];

    for (let i = 0; i < 30; i++) {
      bubbles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 35 + 12,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.4 + 0.2,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const dx = Math.sin(b.wobble) * 1.5;
        if (b.y < -b.r * 2) {
          b.y = rect.height + b.r;
          b.x = Math.random() * rect.width;
        }
        ctx.beginPath();
        ctx.arc(b.x + dx, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(b.x + dx - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(135deg, #fef9f0 0%, #fff5f0 30%, #fef0f4 60%, #fef9f0 100%)',
      }}
    >
      <BubbleCanvas />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">

          {/* ============ 左侧：信息区（简洁版）============ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {/* 顶部小标签 */}
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>2027届校招生 · 期待与你相遇</span>
            </div>

            {/* 大标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Hi，我是王馨蔚
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl ml-2">✨</span>
            </h1>

            {/* 城市信息（简洁版，统一颜色） */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              我来自<strong className="text-foreground font-bold">吉林长春</strong>，本科在<strong className="text-foreground font-bold">成都</strong>，研究生在<strong className="text-foreground font-bold">深圳</strong>；
              <strong className="text-foreground font-bold">北京、深圳、上海、杭州</strong>都是我的理想工作城市，我愿意尝试新鲜环境 🌈
            </p>

            {/* 学校 + 目标行业（学校用卡片）*/}
            <div className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white/70 backdrop-blur-sm border border-border rounded-xl">
                  <span className="text-xl">🎓</span>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-foreground">香港中文大学（深圳）</div>
                    <div className="text-[10px] text-muted-foreground">市场学理学硕士 · AI方向</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white/70 backdrop-blur-sm border border-border rounded-xl">
                  <span className="text-xl">🏫</span>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-foreground">西南财经大学</div>
                    <div className="text-[10px] text-muted-foreground">精算学本科 · GPA 3.7 · Top 5%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 我的核心能力（去掉标签emoji，只保留标题的✨） */}
            <div className="pt-2">
              <p className="text-base leading-relaxed text-foreground/80">
                <span>✨ 我的核心能力：</span>
                {skillTags.map((tag, i) => (
                  <span key={tag.label} className="inline">
                    <span className="ml-1">{tag.label}</span>
                    {i < skillTags.length - 1 && <span className="text-pink-300 ml-2">·</span>}
                  </span>
                ))}
              </p>
            </div>

            {/* 求职方向（透明色，在核心能力下面） */}
            <p className="text-base leading-relaxed text-foreground/80">
              🎯 求职方向：<span className="font-semibold text-foreground">产品运营</span>
              <span className="text-pink-300 mx-2">·</span>
              <span className="font-semibold text-foreground">市场营销</span>
              <span className="text-pink-300 mx-2">·</span>
              <span className="font-semibold text-foreground">用户增长</span>
              <span className="text-pink-300 mx-2">·</span>
              <span className="font-semibold text-foreground">策略运营</span>
            </p>

            {/* CTA 按钮 */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => window.open('resume.html', '_blank')}
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                查看简历
              </button>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white/80 backdrop-blur-sm border border-border rounded-full font-semibold hover:bg-white transition-all duration-300"
              >
                我的实习经历
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="works.html"
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full font-semibold text-foreground hover:bg-pink-50 hover:border-pink-400 transition-all duration-300"
              >
                🎨 手搓小作品
              </a>
            </div>
          </motion.div>

          {/* ============ 右侧：大头像 + 装饰 ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-pink-200/40 via-amber-100/30 to-rose-200/40 blur-3xl" />

            <motion.div className="absolute top-4 left-4 text-4xl" animate={{ y: [0, -12, 0], rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 3 }}>💫</motion.div>
            <motion.div className="absolute top-16 -right-2 text-3xl" animate={{ y: [0, 8, 0], rotate: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}>🌟</motion.div>
            <motion.div className="absolute top-1/3 -left-8 text-3xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}>🫧</motion.div>
            <motion.div className="absolute bottom-20 -left-6 text-3xl" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>✨</motion.div>
            <motion.div className="absolute bottom-1/3 -right-6 text-3xl" animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.3 }}>🌸</motion.div>
            <motion.div className="absolute top-1/4 right-1/4 text-2xl" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}>💖</motion.div>
            <motion.div className="absolute bottom-8 right-8 text-3xl" animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1.2 }}>🎀</motion.div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-pink-300/30 to-amber-300/30 blur-xl animate-pulse" />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-white shadow-2xl">
                {!avatarError ? (
                  <img
                    src={`${import.meta.env.BASE_URL}images/avatar.jpg`}
                    alt="王馨蔚"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-pink-200/30">
                    <span className="text-7xl">👩‍💻</span>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-2 right-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  NOW · 在职中
                </div>
                <div className="text-sm font-extrabold whitespace-nowrap text-foreground">
                  京东 🐶 × 增长策略运营
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -top-2 -right-8 bg-gradient-to-br from-amber-400 to-orange-400 text-white px-3 py-2 rounded-2xl shadow-xl"
                style={{ transform: 'rotate(8deg)' }}
              >
                <div className="text-[10px] font-bold opacity-90">实习经历</div>
                <div className="text-base font-extrabold">5 段 ✨</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute top-1/2 -right-12 bg-white border border-blue-200 px-3 py-2 rounded-2xl shadow-lg"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <div className="text-[10px] text-blue-600 font-bold">🎓 2027届</div>
                <div className="text-xs font-bold text-foreground">港中深硕士</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <span className="text-xs">向下滚动探索</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}