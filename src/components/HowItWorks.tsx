import { CalendarCheck, CarFront, Smile, Route } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Route size={32} />,
    title: 'Choose Your Route',
    description: 'Select your pickup and drop locations or a predefined tour package.',
  },
  {
    icon: <CarFront size={32} />,
    title: 'Select a Vehicle',
    description: 'Pick the perfect ride from our diverse fleet based on your needs and group size.',
  },
  {
    icon: <CalendarCheck size={32} />,
    title: 'Confirm Booking',
    description: 'Enter your details and instantly confirm your booking via WhatsApp or Call.',
  },
  {
    icon: <Smile size={32} />,
    title: 'Enjoy Your Ride',
    description: 'Sit back, relax, and let our professional drivers assure a safe journey.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">How It Works</h3>
          <p className="text-slate-300 text-lg">
            Booking a ride with Krushna Tours is incredibly fast, easy, and completely hassle-free in just 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                {step.icon}
              </div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute top-16 right-12 sm:right-6 md:right-10 lg:right-10 border-2 border-[#0f172a] shadow-lg shadow-blue-500/50">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
