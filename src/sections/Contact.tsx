import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, FileText, Check, Heart } from 'lucide-react';

const contactInfo = {
  email: '18302819592@163.com',
  phone: '178-4110-7250',
  wechat: 'a13394478017',
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="mr-2">📬</span>联系我
          </h2>
          <p className="section-subtitle">
            期待与你相遇，一起创造更多可能 💕
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border shadow-xl"
        >
          {/* Avatar & Name */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-pink-200 flex items-center justify-center text-4xl mb-4">
              👩‍💻
            </div>
            <h3 className="text-2xl font-bold text-foreground">王馨蔚</h3>
            <p className="text-muted-foreground mt-1">
              2027届校招生 · 产品运营 / 市场营销 / 用户增长 / 策略运营
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-2xl">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm text-foreground font-medium">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-2xl">
              <span className="text-lg shrink-0">📱</span>
              <span className="text-sm text-foreground font-medium">{contactInfo.phone}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {/* Send Email */}
            <motion.button
              onClick={handleSendEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-primary to-pink-400 text-white rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm font-semibold">写邮件</span>
            </motion.button>

            {/* Copy Email */}
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-border rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              {copied ? (
                <Check className="w-6 h-6 text-green-500" />
              ) : (
                <Copy className="w-6 h-6 text-foreground" />
              )}
              <span className="text-sm font-semibold text-foreground">
                {copied ? '已复制~' : '复制邮箱'}
              </span>
            </motion.button>

            {/* View Resume */}
            <motion.button
              onClick={() => window.open('resume.pdf', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-border rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <FileText className="w-6 h-6 text-foreground" />
              <span className="text-sm font-semibold text-foreground">查看简历</span>
            </motion.button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by 王馨蔚 · 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
