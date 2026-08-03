import { motion } from 'framer-motion';
import { Building2, Calendar, TrendingUp, Lightbulb, ChevronRight, Sparkles, Mail } from 'lucide-react';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const experiences = [
  {
    company: '京东集团',
    companyEn: 'JD.com',
    role: '增长策略运营实习生',
    dept: '京东科技 · 车险业务组',
    period: '2026.05 - 2026.08',
    logo: '🐶',
    color: 'from-red-400 to-orange-400',
    bgColor: 'bg-red-50 border-red-200',
    tagColor: 'bg-red-100 text-red-700',
    summary:
      '以Q3保费6.5亿、报价成功量178万为目标，运营车险用户全生命周期，分用户增长、差异化运营、转化链路优化三大方向。',
    highlights: [
      {
        title: '增长策略与产品功能迭代',
        points: [
          '输出15+份BRD，协调产研设计完成需求评审与排期',
          '搭建用户分层运营体系，设计多元化权益策略',
        ],
      },
      {
        title: '重点项目落地与效果验证',
        points: [
          '首页卡片人群扩量：曝光+300万级，CTR+3%，月度保费+218.2万',
          '车险四合一页面改造：报价率+6.5%，提核率+10%',
        ],
      },
      {
        title: 'AI赋能车险增长',
        points: [
          '输出车险对话Agent与「AI猜保费」创新链路BRD并交付Demo',
          '搭建AI数据推送预警机制，自动化监控渠道报价指标',
        ],
      },
    ],
    tags: ['用户分层', 'BRD撰写', 'AB测试', 'AI产品设计', '数据监控'],
  },
  {
    company: '字节跳动',
    companyEn: 'ByteDance',
    role: '用户运营实习生',
    dept: 'TRAE · 开发者AI',
    period: '2025.12 - 2026.04',
    logo: '🎵',
    color: 'from-blue-400 to-purple-400',
    bgColor: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
    summary:
      '以拓展产品用户规模、迭代产品功能为目标，国内社群运营+海外社媒宣传，实现海内外用户双向增长。',
    highlights: [
      {
        title: '社群运营与用户增长',
        points: [
          '负责8个飞书社群（3万+C端开发者），策划40+场活动',
          '建联1000+活跃用户，完善管理员激励政策',
          '主导TRAE一周年活动，带动15%用户新增',
        ],
      },
      {
        title: '社区0→1搭建与冷启动',
        points: [
          '参与TRAE官网社区0→1冷启动，首日活跃4000+，7天访问10.8k',
          '搭建「社群→社区」引流体系，答疑响应机制稳定在1分钟内',
        ],
      },
      {
        title: '海外社媒与GTM运营',
        points: [
          '负责X/Instagram/LinkedIn运营，搭建五大内容模块SOP，产出180+条内容',
          '深度参与SOLO产品海外GTM全流程，统筹预热/发布/传播全周期',
        ],
      },
    ],
    tags: ['社群运营', '冷启动', '海外社媒', 'GTM', '开发者社区'],
  },
  {
    company: '自如寓（北京）',
    companyEn: 'Ziru',
    role: '用户增长实习生',
    dept: '自如比邻运营部 · 国际市场',
    period: '2024.10 - 2025.01',
    logo: '🏠',
    color: 'from-teal-400 to-green-400',
    bgColor: 'bg-teal-50 border-teal-200',
    tagColor: 'bg-teal-100 text-teal-700',
    summary:
      '扩大澳洲租房业务成交规模，运营15家供应商保障房源供给，通过私域渠道挖掘用户，提升房源点击率与订单转化。',
    highlights: [
      {
        title: '供应商管理与增长优化',
        points: [
          '全英文对接15家澳洲供应商，搭建标准化运营增长体系',
          '供应商续约率92%，房源点击率提升27%',
        ],
      },
      {
        title: '用户增长与推广策略',
        points: [
          '搭建三维用户分层画像，对标8家竞品输出差异化策略',
          '产出12套推广方案，海报曝光超5万次，订单转化增长31%',
        ],
      },
    ],
    tags: ['用户增长', '供应商管理', '全英文对接', '竞品分析', '小红书获客'],
  },
  {
    company: 'Glocal Link',
    companyEn: 'Glocal Link',
    role: '海外广告运营实习生',
    dept: '广告运营部',
    period: '2025.03 - 2025.06',
    logo: '🌐',
    color: 'from-gray-400 to-slate-400',
    bgColor: 'bg-gray-50 border-gray-200',
    tagColor: 'bg-gray-100 text-gray-600',
    summary:
      '整合广告账户多源数据，搭建实时监控与异常预警体系，设计消耗看板与开户进度表替代文字汇报。',
    highlights: [
      {
        title: '核心成果',
        points: [
          '广告ROI提升18%，封户响应时效缩短30%',
          '海外动态获取从2天缩至4小时，跨部门沟通周期减少25%',
        ],
      },
    ],
    tags: ['数据看板', '异常预警', '多源数据整合', '风控'],
  },
  {
    company: '深圳蓝凌软件',
    companyEn: 'Landray',
    role: '市场营销实习生',
    dept: '西南大区',
    period: '2024.05 - 2024.08',
    logo: '💻',
    color: 'from-violet-400 to-purple-400',
    bgColor: 'bg-violet-50 border-violet-200',
    tagColor: 'bg-violet-100 text-violet-600',
    summary:
      '主导西南大区百人线下活动全流程统筹，负责公众号运营与竞品分析。',
    highlights: [
      {
        title: '核心成果',
        points: [
          '120+人线下活动，客户满意度95%，产品咨询量+60%',
          '32篇公众号推文，阅读量+50%至800+；18张活动海报',
          '2份竞品分析报告纳入部门策略库',
        ],
      },
    ],
    tags: ['活动统筹', '公众号运营', '海报设计', '竞品分析'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="mr-2">💼</span>实习经历
          </h2>
          <p className="section-subtitle">
            从0到1，每一步都在成长 🌱 我的实习打怪升级之路
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-pink-300 to-muted-foreground/20 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const [start, end] = exp.period.split(' - ');
              return (
              <motion.div
                key={exp.company}
                variants={cardItem}
                className={`relative ${idx >= 3 ? 'opacity-80 hover:opacity-100 transition-opacity' : ''}`}
              >
                {/* 左侧时间标签 */}
                <div className="hidden md:flex absolute left-0 top-6 w-28 flex-col items-end pr-6 z-10">
                  <span className={`text-base font-bold bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`}>
                    {start}
                  </span>
                  {end && end !== '--' && (
                    <>
                      <span className="text-xs text-muted-foreground my-0.5">至</span>
                      <span className={`text-base font-bold bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`}>
                        {end}
                      </span>
                    </>
                  )}
                  {end === '--' && (
                    <span className="text-xs text-muted-foreground mt-0.5">在职期间</span>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-32 top-8 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-background ${idx >= 3 ? 'scale-75' : ''}`} />
                </div>

                <div className={`md:ml-44 ${exp.bgColor} rounded-3xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{exp.logo}</span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          {exp.company}
                          <span className="text-xs font-normal text-muted-foreground">
                            {exp.companyEn}
                          </span>
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-medium text-foreground">{exp.role}</span>
                          <span className="text-border">|</span>
                          <span>{exp.dept}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/70 rounded-full text-xs font-medium text-muted-foreground border border-border">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <motion.button
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-pink-400 text-white rounded-full text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all"
                      >
                        <Mail className="w-3 h-3" />
                        联系我
                      </motion.button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <div key={hi}>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-1.5">
                          {hi === 0 ? (
                            <TrendingUp className="w-3.5 h-3.5 text-primary" />
                          ) : (
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          {h.title}
                        </div>
                        <ul className="space-y-1">
                          {h.points.map((p, pi) => (
                            <li
                              key={pi}
                              className="flex items-start gap-2 text-xs text-muted-foreground pl-5"
                            >
                              <ChevronRight className="w-3 h-3 text-primary/60 mt-0.5 shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${exp.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {idx < 3 && (
                      <span className="px-2 py-1 rounded-full text-[11px] font-medium bg-amber-100 text-amber-700 inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        核心经历
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
