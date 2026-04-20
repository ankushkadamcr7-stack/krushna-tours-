import { Phone, MessageCircle } from 'lucide-react';
import { WhatsappIconSVG as WhatsappIcon } from './WhatsappIconSVG';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919892676143"
        className="w-14 h-14 bg-blue-600/90 backdrop-blur-md text-white rounded-2xl border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-900/30 hover:scale-110 hover:bg-blue-600 hover:rotate-3 transition-all"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/919892676143"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366]/90 backdrop-blur-md text-white rounded-2xl border border-[#25D366]/40 flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:bg-[#25D366] hover:-rotate-3 transition-all"
        aria-label="WhatsApp Us"
      >
        <WhatsappIcon size={28} />
      </a>
    </div>
  );
}
