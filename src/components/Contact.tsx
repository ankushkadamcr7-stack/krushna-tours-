import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
        break;
      case 'phone':
        if (!value.trim()) error = 'Phone number is required';
        else if (!/^\+?[0-9\s\-]{10,15}$/.test(value)) error = 'Enter a valid phone number';
        break;
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const { name, phone, email, message } = formData;

    const whatsappMessage = `*New Contact Inquiry*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email || 'Not provided'}%0A` +
      `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/919892676143?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Get In Touch</h3>
          <p className="text-slate-300 text-lg">
            Have a question or need to book a ride? Contact us today and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
                  <Phone size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
                <p className="text-slate-300 mb-1">+91 98926 76143</p>
                <p className="text-slate-300">+91 98926 76143</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
                <p className="text-slate-300 mb-1">info@krushnatours.com</p>
                <p className="text-slate-300">booking@krushnatours.com</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex gap-4 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center shrink-0 border border-blue-500/20">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Our Location</h4>
                <p className="text-slate-300">
                  Krushna Tours Ratnagiri<br />
                  Room No 104, 1 St Floor, Nalini Vasant Vihar, Nivkhol, Rajiwada Road, Ratnagiri-415612, Maharashtra
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-white/5 rounded-3xl overflow-hidden relative border border-white/10 opacity-80 hover:opacity-100 transition-opacity drop-shadow-xl">
              <iframe 
                src="https://maps.google.com/maps?q=Krushna%20Tours%20Ratnagiri,%20Nivkhol,%20Rajiwada%20Road,%20Ratnagiri,%20Maharashtra%20415612&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-2xl p-6 sm:p-8 rounded-[2rem] shadow-2xl border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-6">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                      errors.name && touched.name
                        ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && (
                    <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                      errors.phone && touched.phone
                        ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white'
                        : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                    }`}
                    placeholder="+91 98926 76143"
                  />
                  {errors.phone && touched.phone && (
                    <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                    errors.email && touched.email
                      ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white'
                      : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && touched.email && (
                  <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
              
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors resize-none ${
                    errors.message && touched.message
                      ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white'
                      : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && touched.message && (
                  <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 border border-blue-400/30"
              >
                <span>Send via WhatsApp</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
