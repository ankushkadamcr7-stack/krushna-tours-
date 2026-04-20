/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CarFleet from './components/CarFleet';
import FAQ from './components/FAQ';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className="font-sans text-white bg-[#0f172a] antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none fixed">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-orange-400/10 blur-[80px]"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <BookingForm />
          <Services />
          <WhyChooseUs />
          <FAQ />
          <CarFleet />
          <HowItWorks />
          <Destinations />
          <Testimonials />
          <Stats />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}
