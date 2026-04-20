import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const routes = [
  { from: 'Ratnagiri', to: 'Pune', price: '₹4000', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Mumbai', price: '₹5500', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Goa', price: '₹6000', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Kolhapur', price: '₹2500', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Pune Airport', price: '₹4500', type: 'Drop' },
  { from: 'Ratnagiri', to: 'Mumbai Airport', price: '₹6000', type: 'Drop' },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Top Routes</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white">Popular Taxi Routes</h3>
          <p className="text-slate-300 text-lg">
            Frequently traveled routes with our best-in-class taxi service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-white text-lg">
                    <span>{route.from}</span>
                    <ArrowRight size={16} className="text-slate-400" />
                    <span>{route.to}</span>
                  </div>
                  <span className="text-sm text-slate-400">{route.type}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm text-slate-400 mb-1">Starting from</span>
                <span className="font-bold text-blue-400 text-xl">{route.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a
              href="tel:+919892676143"
              className="inline-flex items-center justify-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:border-blue-500 transition-colors shadow-lg shadow-blue-900/20"
            >
              Get Custom Quote
            </a>
        </div>
      </div>
    </section>
  );
}
