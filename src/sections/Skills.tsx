import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Sparkles } from 'lucide-react';

interface Card {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  details: string[];
  color: string;
  bg: string;
  border: string;
}

const skillCards: Card[] = [
  {
    id: 'english',
    emoji: '🌍',
    title: '英语能力',
    subtitle: 'IELTS 6.5 / CET-6',
    details: ['可完成全英文日常工作与对话', '全英文对接15家澳洲供应商', '产出180+条英文社媒内容', '中英文双语文案创作'],
    color: 'from-blue-400 to-cyan-400',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'coding',
    emoji: '💻',
    title: 'Coding能力',
    subtitle: 'AI Coding × 数据分析',
    details: ['擅长使用AI Coding工具（TRAE等）', 'SQL / R / Stata 数据分析', '独立完成数据清洗到建模全流程', 'AI大语言模型与Prompt工程'],
    color: 'from-purple-400 to-pink-400',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: 'design',
    emoji: '🎨',
    title: '设计能力',
    subtitle: 'Figma · PS · 海报设计',
    details: ['精通Figma交互设计', 'PS/可画/秀米熟练运用', '18张活动海报独立设计', '公众号排版与物料制作'],
    color: 'from-pink-400 to-rose-400',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    id: 'knowledge',
    emoji: '🧠',
    title: '跨专业知识',
    subtitle: '精算 + AI营销',
    details: ['本科精算：金融·经济·保险·数学', '硕士市场学：AI·营销·运营', '复合型学科背景', '数据思维+商业视角'],
    color: 'from-amber-400 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 'content',
    emoji: '✍️',
    title: '内容创作',
    subtitle: '中英双语 · 全媒体',
    details: ['180+条海外社媒英文内容', '32篇公众号原创推文', '12套推广方案独立策划', 'AI视频全流程制作'],
    color: 'from-teal-400 to-green-400',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
];

const hobbyCards: Card[] = [
  {
    id: 'energy',
    emoji: '⚡',
    title: '高能量E人',
    subtitle: 'ENFJ · 永远能量满格',
    details: ['感染力MAX', '团队氛围担当', '跨部门沟通达人', '主动解决问题型选手'],
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    id: 'travel',
    emoji: '🎤',
    title: '旅游 × 演唱会',
    subtitle: '全国打卡 · 前排选手',
    details: ['热爱全国各地旅游', '演唱会前排常驻', '用脚步丈量世界', '每段旅程都是故事'],
    color: 'from-green-400 to-emerald-400',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    id: 'photo',
    emoji: '📷',
    title: '摄影 × 画画 × 剪辑',
    subtitle: '记录生活的每一帧',
    details: ['用镜头捕捉美好瞬间', '喜欢手绘小插画', '熟练剪映/LR后期', '创作就是最好的表达'],
    color: 'from-violet-400 to-purple-400',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    id: 'sports',
    emoji: '🏃',
    title: '运动释放压力',
    subtitle: '汗水是最好的解药',
    details: ['运动让我保持活力', '享受流汗的快感', '工作与生活的平衡', '身体和灵魂都在路上'],
    color: 'from-red-400 to-pink-400',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
];

function CardDraw({ cards, title, emoji }: { cards: Card[]; title: string; emoji: string }) {
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [allDrawn, setAllDrawn] = useState(false);

  const drawCard = () => {
    if (isDrawing || allDrawn) return;

    setIsDrawing(true);
    setTimeout(() => {
      const card = cards[currentIndex];
      setDrawnCards((prev) => [...prev, card]);
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= cards.length) {
          setAllDrawn(true);
        }
        return next;
      });
      setIsDrawing(false);
    }, 200);
  };

  const reset = () => {
    setDrawnCards([]);
    setCurrentIndex(0);
    setAllDrawn(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span>{emoji}</span>
          {title}
          <span className="text-xs font-normal text-muted-foreground">
            ({drawnCards.length}/{cards.length})
          </span>
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            重置
          </button>
        </div>
      </div>

      {/* Card Deck & Drawn Area */}
      <div className="min-h-[220px] relative">
        {/* Draw button / Deck */}
        {!allDrawn && (
          <div className="flex justify-center py-6">
            <motion.button
              onClick={drawCard}
              disabled={isDrawing}
              whileHover={{ scale: 1.05, rotate: [-2, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Card stack effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-pink-400 rounded-2xl rotate-3 opacity-50 group-hover:rotate-6 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-pink-400 rounded-2xl -rotate-2 opacity-70 group-hover:-rotate-4 transition-transform" />
              <div className="relative w-36 h-48 bg-gradient-to-br from-primary via-pink-400 to-amber-400 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-2 text-white cursor-pointer overflow-hidden">
                <Sparkles className="w-8 h-8 animate-pulse" />
                <span className="font-bold text-lg">抽卡</span>
                <span className="text-xs opacity-80">点击抽取一张</span>
                <div className="absolute inset-0 animate-shine pointer-events-none" />
              </div>
            </motion.button>
          </div>
        )}

        {/* Drawn Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatePresence>
            {drawnCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ scale: 0, rotateY: 180, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
                className={`w-44 rounded-2xl p-4 ${card.bg} border-2 ${card.border} shadow-md hover:shadow-xl transition-shadow cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} text-white text-lg mb-3 shadow-sm`}>
                  {card.emoji}
                </div>
                <h4 className="font-bold text-foreground text-sm">{card.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 mb-2">{card.subtitle}</p>
                <div className="space-y-1">
                  {card.details.map((d, di) => (
                    <p key={di} className="text-[11px] text-muted-foreground leading-tight">
                      · {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* All drawn message */}
        {allDrawn && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            <span className="text-sm text-muted-foreground">
              全部抽取完毕！<span className="text-primary font-medium">点击重置</span>再来一次 🎉
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="mr-2">🎮</span>技能与爱好
          </h2>
          <p className="section-subtitle">
            不只是干巴巴的文字堆砌，来抽卡吧！看看能抽到什么惊喜 ✨
          </p>
        </motion.div>

        {/* 简介 + 手搓小作品按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-7 border-2 border-pink-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span>👋</span>
                嗨，这里是我的技能 & 爱好档案！
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5 张技能卡 + 4 张爱好卡，等你来抽 ✨
                下面是我平时手搓的小作品——海报设计、文案撰写、PPT制作都整理在这里啦 💕
              </p>
            </div>
            <motion.button
              onClick={() => window.open('works.html', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-pink-400 text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all whitespace-nowrap"
              style={{ fontFamily: '"Comic Sans MS", "Yuanti SC", sans-serif' }}
            >
              🎨 手搓小作品
            </motion.button>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Skill Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-border/50 shadow-sm"
          >
            <CardDraw cards={skillCards} title="技能卡" emoji="🔧" />
          </motion.div>

          {/* Hobby Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-border/50 shadow-sm"
          >
            <CardDraw cards={hobbyCards} title="爱好卡" emoji="🎉" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
