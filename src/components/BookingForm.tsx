import { MapPin, Calendar, Clock, Car, User, Phone, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    carType: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required';
        else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
        break;
      case 'phone':
        if (!value.trim()) error = 'Phone number is required';
        else if (!/^\+?[0-9\s\-]{10,15}$/.test(value)) error = 'Enter a valid phone number';
        break;
      case 'pickup':
        if (!value.trim()) error = 'Pickup location is required';
        break;
      case 'drop':
        if (!value.trim()) error = 'Drop location is required';
        break;
    }
    return error;
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, phone: true, pickup: true, drop: true, date: true, time: true, carType: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    const { name, phone, pickup, drop, date, time, carType } = formData;
    
    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Pickup:* ${pickup}%0A` +
      `*Drop:* ${drop}%0A` +
      `*Date:* ${date || 'Not specified'}%0A` +
      `*Time:* ${time || 'Not specified'}%0A` +
      `*Car Type:* ${carType || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/919892676143?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative z-20 -mt-8 md:-mt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-6 md:p-8 border border-white/20"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Quick Booking</h2>
          <p className="text-slate-300 text-sm mt-1">Fill the form below and we will contact you shortly via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-6 md:gap-y-8">
          {/* Name */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Full Name <span className="text-blue-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className={errors.name ? "text-red-400" : "text-white/40"} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.name && touched.name 
                    ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white' 
                    : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                }`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && touched.name && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Phone Number <span className="text-blue-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} className={errors.phone ? "text-red-400" : "text-white/40"} />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.phone && touched.phone 
                    ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white' 
                    : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                }`}
                placeholder="+91 98926 76143"
              />
            </div>
            {errors.phone && touched.phone && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.phone}
              </p>
            )}
          </div>

          {/* Pickup */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Pickup Location <span className="text-blue-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className={errors.pickup ? "text-red-400" : "text-white/40"} />
              </div>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.pickup && touched.pickup
                    ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white' 
                    : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                }`}
                placeholder="Ratnagiri"
              />
            </div>
            {errors.pickup && touched.pickup && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.pickup}
              </p>
            )}
          </div>

          {/* Drop */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Drop Location <span className="text-blue-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className={errors.drop ? "text-red-400" : "text-white/40"} />
              </div>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.drop && touched.drop
                    ? 'border-red-400/50 focus:ring-red-500 focus:border-red-500 bg-red-900/20 text-white' 
                    : 'border-white/10 focus:ring-blue-500 focus:border-blue-500 bg-white/5 text-white placeholder-white/30'
                }`}
                placeholder="Pune Airport"
              />
            </div>
            {errors.drop && touched.drop && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.drop}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-white/40" />
              </div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-white/30 transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Time */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Time</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock size={18} className="text-white/40" />
              </div>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white placeholder-white/30 transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Car Type */}
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Car Type</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Car size={18} className="text-white/40" />
              </div>
              <select 
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none bg-white/5 text-white transition-colors appearance-none [&>option]:bg-[#0f172a]"
              >
                <option value="">Select Car</option>
                <option value="sedan">Sedan (Dzire, Xcent)</option>
                <option value="suv">SUV (Innova, Ertiga)</option>
                <option value="hatchback">Hatchback (i20)</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="relative flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
