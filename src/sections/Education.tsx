import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const educationData = [
  {
    school: '香港中文大学（深圳）',
    schoolEn: 'CUHK, Shenzhen',
    period: '2025.09 - 2027.06',
    degree: '市场学理学硕士（AI方向）',
    badge: '🏫 QS 排名 #18',
    badgeColor: 'bg-amber-100 text-amber-700',
    image: 'images/cuhk-new.jpg',
    courses: [
      '客户关系管理',
      '数字时代的营销研究',
      '数字与社交媒体',
      '大数据市场营销策略',
    ],
    highlights: ['AI与营销深度融合', '国际化视野', '前沿数字营销实践'],
  },
  {
    school: '西南财经大学',
    schoolEn: 'SWUFE',
    period: '2021.09 - 2025.06',
    degree: '精算学 本科',
    badge: '🏫 211 双一流高校',
    badgeColor: 'bg-blue-100 text-blue-700',
    image: 'images/swufe.jpg',
    gpa: 'GPA 3.7',
    rank: '综合排名 2/41 (Top 5%)',
    courses: ['R语言', '计量经济学', '数理统计', '风险管理与精算模型', '随机过程'],
    awards: [
      '全国大学生数学竞赛 四川省二等奖',
      '第十届全国统计建模大赛 四川省三等奖',
      '大学生创新创业项目 国家级立项',
      '甲等学业奖学金（Top1）',
      '优秀学生干部',
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="mr-2">🎓</span>教育背景
          </h2>
          <p className="section-subtitle">
            从精算到AI营销，复合型学科背景让我拥有独特的视角
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.school}
              variants={item}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                  {/* School Logo/Image */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white border-2 border-border shadow-md group-hover:shadow-lg transition-shadow">
                      <img
                        src={`${import.meta.env.BASE_URL}${edu.image}`}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-primary/10 to-pink-100">${idx === 0 ? '🏛️' : '🏫'}</div>`;
                        }}
                      />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${edu.badgeColor}`}>
                      {edu.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        {edu.school}
                        <span className="text-sm font-normal text-muted-foreground">
                          {edu.schoolEn}
                        </span>
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5" />
                          {edu.degree}
                        </span>
                        <span>·</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* GPA & Rank for SWUFE */}
                    {'gpa' in edu && (
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full text-sm font-semibold text-yellow-700">
                          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                          {edu.gpa}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700">
                          <Award className="w-3.5 h-3.5" />
                          {edu.rank}
                        </span>
                      </div>
                    )}

                    {/* Courses */}
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        核心课程
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((c) => (
                          <span
                            key={c}
                            className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    {'awards' in edu && edu.awards && (
                      <div>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          荣誉奖项
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {edu.awards.map((a) => (
                            <span
                              key={a}
                              className="flex items-start gap-1.5 text-xs text-muted-foreground"
                            >
                              <span className="text-amber-400 mt-0.5">✦</span>
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights for CUHK */}
                    {'highlights' in edu && edu.highlights && (
                      <div>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                          <Star className="w-3.5 h-3.5 text-pink-400" />
                          办学特色
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 bg-pink-50 border border-pink-200 rounded-full text-xs font-medium text-pink-700"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
