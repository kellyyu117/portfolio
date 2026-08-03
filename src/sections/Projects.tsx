import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles, Video, Bot, AlertTriangle } from 'lucide-react';

// ============ Part 1: Vibe Coding 作品 ============
const vibeCoding = [
  {
    title: 'AI 春联生成器',
    subtitle: 'Vibe Coding × 文化营销',
    description:
      '基于字节TRAE大模型开发，用户输入关键词即可自动生成个性化春联。探索生成式AI在文化内容营销与互动传播场景中的应用。',
    features: ['AI自动生成春联', '个性化关键词输入', '快速原型开发', '文化互动传播'],
    link: 'https://wintersolstice.zeabur.app/couplet/',
    image: '/images/project-spring.jpg',
    color: 'from-red-400 to-orange-400',
    icon: '🧧',
  },
  {
    title: '冬至云包饺子 + 留言板',
    subtitle: 'Vibe Coding × 情感互动',
    description:
      '基于大模型开发的节日互动网页，融合祝福生成、专属暗号、互动留声等功能，将传统节日仪式感与AI体验结合，提升用户参与感与传播性。',
    features: ['AI祝福生成', '专属暗号互动', '暖心留言板', '节日仪式感体验'],
    link: 'https://wintersolstice.zeabur.app/',
    image: '/images/project-winter.jpg',
    color: 'from-blue-400 to-purple-400',
    icon: '🥟',
  },
];

// ============ Part 2: AI 视频制作（参半项目） ============
const aiVideo = {
  title: '参半 AI 视频全流程',
  subtitle: 'AI 视频 × 品牌营销',
  period: '2025.09 - 2025.12',
  icon: '🎬',
  color: 'from-purple-400 to-pink-400',
  bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
  badgeColor: 'bg-purple-100 text-purple-700',
  description:
    '参与学校小组项目，选定参半品牌策划AI全流程推广方案，结合品牌特性将学生群体定为核心目标受众，拟定精准的用户画像分层及定位。作为核心成员，负责6个动画风AI视频全流程制作，含2个品牌广告视频与4个CRM全流程视频，运用豆包、即梦、Sora 2.0等工具完成脚本撰写与视频生成。',
  points: [
    { icon: '🎯', text: '精准用户画像分层：成分党 / 精致带娃族 / 学生群体' },
    { icon: '🎥', text: '2个品牌广告视频 + 4个CRM全流程视频' },
    { icon: '🤖', text: '运用豆包 / 即梦 / Sora 2.0 完成脚本撰写与生成' },
    { icon: '✨', text: '品牌调性 × AI创意的全链路落地' },
  ],
  // 百度网盘分享链接
  videoLink: 'https://pan.baidu.com/s/1lCLQ1nJiHiv9oOb2i9vuiA?pwd=9733',
};

// ============ Part 3: AI 赋能工作提效（京东预警机制） ============
const aiEmpower = {
  title: 'AI 数据推送预警机制',
  subtitle: 'AI 赋能 × 运营提效',
  period: '2026.05 - 2026.08 · 京东科技',
  icon: '📊',
  color: 'from-cyan-400 to-blue-400',
  bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
  badgeColor: 'bg-cyan-100 text-cyan-700',
  description:
    '在京东车险业务组搭建AI数据推送预警机制，规范数据清洗、阈值计算、分级告警与基线更新规则，自动化监控渠道报价指标波动，快速识别业务异常并及时调整策略，实现运营监控提效。',
  features: [
    '数据清洗 · 阈值计算 · 分级告警',
    '基线自动更新规则',
    'AI Agent 自动推送',
    '多渠道实时监控',
  ],
  // 数据预览（模拟京东预警截图）
  tableData: [
    { channel: '平台业务', dailyQuote: '7,400', threshold: '7,589', diff: '-189', success: '3,157', successThreshold: '3,287', successDiff: '-13', status: 'alert' },
    { channel: '商城增长', dailyQuote: '18,021', threshold: '16,346', diff: '+1,675', success: '6,301', successThreshold: '5,494', successDiff: '+807', status: 'normal' },
    { channel: '商城搜索', dailyQuote: '6,224', threshold: '4,347', diff: '+1,877', success: '5,051', successThreshold: '3,429', successDiff: '+1,622', status: 'normal' },
    { channel: '商城订单', dailyQuote: '4,763', threshold: '4,550', diff: '+213', success: '3,347', successThreshold: '2,963', successDiff: '+384', status: 'normal' },
    { channel: 'BBC合单', dailyQuote: '1,525', threshold: '469', diff: '+1,056', success: '580', successThreshold: '156', successDiff: '+424', status: 'normal' },
  ],
  aiAgent: {
    name: '小叮当 · 机器人',
    title: '车险渠道日报价量监控告警',
    date: '2026-07-28',
    message: '平台业务同时触发报价量和报价成功量双告警，较前日（7/27）报价量下降26.1%、报价成功量下降25.5%，属于显著异常波动，建议立即排查平台业务渠道流量来源。',
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="mr-2">🤖</span>AI 能力
          </h2>
          <p className="section-subtitle">
            用 AI Coding / AI 视频 / AI 赋能，让创意变为现实 ✨
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* ==================== Part 1: Vibe Coding ==================== */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-xs font-bold text-orange-700 border border-orange-200">
                <Code className="w-3.5 h-3.5" />
                01 · Vibe Coding
              </span>
              <span className="text-xs text-muted-foreground">用 AI Coding 快速将创意变为现实</span>
            </div>

            <div className="space-y-8">
              {vibeCoding.map((proj, idx) => (
                <div
                  key={proj.title}
                  className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-5/12">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-pink-300/30 rounded-3xl blur-md group-hover:blur-lg transition-all duration-500" />
                      <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl aspect-[4/3]">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                            target.parentElement!.innerHTML +=
                              `<div class="text-center p-8"><span class="text-7xl">${proj.icon}</span><p class="mt-3 text-sm text-muted-foreground">项目截图</p></div>`;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Code className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">{proj.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                      <span>{proj.icon}</span>
                      {proj.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary/5 to-pink-100/50 border border-border rounded-full text-xs font-medium text-foreground/80"
                        >
                          ✦ {f}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-pink-400 text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      体验作品
                      <Sparkles className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ==================== Part 2: AI 视频制作 ==================== */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-bold text-purple-700 border border-purple-200">
                <Video className="w-3.5 h-3.5" />
                02 · AI 视频制作
              </span>
              <span className="text-xs text-muted-foreground">从脚本到成片的全链路 AI 创作</span>
            </div>

            <div className={`rounded-3xl ${aiVideo.bgGradient} border-2 border-purple-100 p-6 lg:p-8 shadow-sm`}>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left: Video preview area (大) */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-3xl blur-md" />
                    {/* 四宫格视频截图 */}
                    <div className="relative grid grid-cols-2 gap-2 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl p-2">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}images/canban-1.jpg`} alt="参半视频1" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}images/canban-2.jpg`} alt="参半视频2" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}images/canban-3.jpg`} alt="参半视频3" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}images/canban-4.jpg`} alt="参半视频4" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* 网盘链接 */}
                  <a
                    href={aiVideo.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-white border-2 border-purple-200 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all text-sm font-semibold text-purple-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    查看完整视频作品集（网盘）
                  </a>
                </div>

                {/* Right: Description */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{aiVideo.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{aiVideo.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{aiVideo.period}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200">
                    <Video className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-xs font-medium text-purple-700">{aiVideo.subtitle}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {aiVideo.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {aiVideo.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-base shrink-0">{p.icon}</span>
                        <span className="text-foreground/80">{p.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================== Part 3: AI 赋能工作提效 ==================== */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-xs font-bold text-cyan-700 border border-cyan-200">
                <Bot className="w-3.5 h-3.5" />
                03 · AI 赋能工作提效
              </span>
              <span className="text-xs text-muted-foreground">让 AI 自动化处理繁琐监控任务</span>
            </div>

            <div className={`rounded-3xl ${aiEmpower.bgGradient} border-2 border-cyan-100 p-6 lg:p-8 shadow-sm`}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{aiEmpower.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{aiEmpower.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{aiEmpower.period}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-100 border border-cyan-200 rounded-full">
                  <Bot className="w-3.5 h-3.5 text-cyan-700" />
                  <span className="text-xs font-semibold text-cyan-700">{aiEmpower.subtitle}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {aiEmpower.description}
              </p>

              {/* Features tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {aiEmpower.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 bg-white/80 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700"
                  >
                    ✦ {f}
                  </span>
                ))}
              </div>

              {/* AI Agent 推送卡片 */}
              <div className="bg-white rounded-2xl border border-cyan-100 overflow-hidden shadow-lg">
                {/* Agent Header */}
                <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white text-base font-bold shadow-sm">
                      🤖
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-foreground">{aiEmpower.aiAgent.name}</p>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-medium">已推送</span>
                      </div>
                      <p className="text-xs text-muted-foreground">群机器人 · 定时任务</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{aiEmpower.aiAgent.date}</p>
                    <p className="text-[10px] text-green-600 font-medium mt-0.5">✅ 定时任务完成 (1/2)</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <p className="text-sm font-bold text-foreground">{aiEmpower.aiAgent.title}</p>
                  </div>

                  {/* Data Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="text-left border-b-2 border-gray-200">
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase">渠道</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">日报价量</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">报价阈值</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">差值</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">日成功量</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">成功阈值</th>
                          <th className="py-2 px-1.5 text-[10px] font-semibold text-muted-foreground uppercase text-right">差值</th>
                        </tr>
                      </thead>
                      <tbody>
                        {aiEmpower.tableData.map((row, i) => (
                          <tr
                            key={i}
                            className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${
                              row.status === 'alert' ? 'bg-red-50/70' : ''
                            }`}
                          >
                            <td className="py-2 px-1.5 font-semibold text-foreground whitespace-nowrap">
                              {row.status === 'alert' && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-1" />
                              )}
                              {row.channel}
                            </td>
                            <td className="py-2 px-1.5 text-right font-mono text-[11px]">{row.dailyQuote}</td>
                            <td className="py-2 px-1.5 text-right font-mono text-[11px] text-muted-foreground">{row.threshold}</td>
                            <td className={`py-2 px-1.5 text-right font-mono text-[11px] font-semibold ${
                              row.diff.startsWith('-') ? 'text-red-500' : 'text-green-600'
                            }`}>
                              {row.diff}
                            </td>
                            <td className="py-2 px-1.5 text-right font-mono text-[11px]">{row.success}</td>
                            <td className="py-2 px-1.5 text-right font-mono text-[11px] text-muted-foreground">{row.successThreshold}</td>
                            <td className={`py-2 px-1.5 text-right font-mono text-[11px] font-semibold ${
                              row.successDiff.startsWith('-') ? 'text-red-500' : 'text-green-600'
                            }`}>
                              {row.successDiff}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Alert Message */}
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div className="text-xs text-foreground/80 leading-relaxed">
                      <p className="font-semibold text-foreground mb-1">⚠️ 异常波动告警</p>
                      {aiEmpower.aiAgent.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}