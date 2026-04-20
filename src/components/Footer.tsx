import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 text-white pt-16 pb-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-6 block drop-shadow-md">
              KRUSHNA <span className="text-blue-400">TOURS</span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for safe, comfortable, and affordable travel across Maharashtra. We make every journey memorable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-blue-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-blue-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-blue-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-slate-400 hover:text-white transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Taxi Rental</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Self Drive Cars</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Outstation Cabs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tour Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="text-blue-400 shrink-0 mt-1 group-hover:text-white transition-colors" />
                <span className="text-slate-400 group-hover:text-white transition-colors cursor-pointer">Room No 104, 1 St Floor, Nalini Vasant Vihar, Nivkhol, Rajiwada Road, Ratnagiri-415612</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 shrink-0" />
                <a href="tel:+919892676143" className="text-slate-400 hover:text-white transition-colors">+91 98926 76143</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 shrink-0" />
                <a href="mailto:info@krushnatours.com" className="text-slate-400 hover:text-white transition-colors">info@krushnatours.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Krushna Tours & Travels. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
