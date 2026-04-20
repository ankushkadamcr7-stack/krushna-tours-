import { Users, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: <Users size={32} />, value: '1000+', label: 'Happy Customers' },
  { icon: <Clock size={32} />, value: '24/7', label: 'Support Available' },
  { icon: <ShieldCheck size={32} />, value: '100%', label: 'Safe & Secure' },
  { icon: <ThumbsUp size={32} />, value: '4.9/5', label: 'Average Rating' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600/10 backdrop-blur-md border-y border-white/10 relative text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 sm:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">{stat.value}</div>
              <div className="text-xs sm:text-base text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
