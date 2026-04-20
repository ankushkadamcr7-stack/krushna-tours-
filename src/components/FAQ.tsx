import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'How do I book a taxi with Krushna Tours?',
    answer: 'Booking is simple! You can use the booking form on our website, call us directly at +91 98926 76143, or send us a message on WhatsApp. We instantly confirm your ride.',
  },
  {
    question: 'What types of vehicles are available in your fleet?',
    answer: 'We offer a wide range of vehicles to suit your needs, including Hatchbacks (Swift), Sedans (Dzire, Etios), SUVs (Innova Crysta, Ertiga), and Tempo Travelers for larger groups.',
  },
  {
    question: 'Are there any hidden charges in the pricing?',
    answer: 'No, we believe in 100% transparent pricing. The quote we provide includes driver charges, toll taxes (where specified), and fuel. There are no surprise fees at the end of your trip.',
  },
  {
    question: 'Can I book a cab for outstation travel?',
    answer: 'Yes, we specialize in outstation trips, airport drops, and complete tour packages across Maharashtra, including popular destinations like Goa, Pune, Mumbai, and Kolhapur.',
  },
  {
    question: 'Are your drivers experienced and verified?',
    answer: 'Absolutely. All our drivers are highly experienced, hold valid commercial licenses, and undergo background verification to ensure your safety and comfort throughout the journey.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-transparent text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Help Center</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white">Frequently Asked Questions</h3>
          <p className="text-slate-300 text-lg">
            Find quick answers to common questions and know everything about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden transition-colors ${openIndex === index ? 'border-white/20 bg-white/10 shadow-lg shadow-blue-500/10' : 'hover:bg-white/10'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-white pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/20">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 sm:p-6 pt-0 sm:pt-0 text-slate-300 leading-relaxed mt-2 border-t border-white/10 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
