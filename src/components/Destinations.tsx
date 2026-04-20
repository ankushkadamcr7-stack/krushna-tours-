import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: 'Ganpatipule',
    image: 'https://3.imimg.com/data3/PU/KP/MY-10726936/ganapatipule.png',
    description: 'Famous for its pristine beach and Swayambhu Ganpati Temple.',
  },
  {
    name: 'Jaigad Fort',
    image: 'https://www.roaring-india.com/ri_media/Complete-View-of-Jaigad-Fort.jpg',
    description: 'A 16th-century fort offering panoramic views of the Arabian Sea.',
  },
  {
    name: 'Marleshwar Temple',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/54/93/1b/photo0jpg.jpg?w=1200&h=-1&s=1',
    description: 'A cave temple dedicated to Lord Shiva, surrounded by waterfalls.',
  },
  {
    name: 'Aare Ware Beach',
    image: 'https://www.greenleaftheresort.com/images/aare-ware-beach.jpg',
    description: 'One of the most beautiful and untouched beaches in Konkan.',
  },
  {
    name: 'Ratnadurg Fort',
    image: 'https://im.whatshot.in/img/2020/Feb/ratndurg-or-bhagavati-fort-body-07-ratnadurg-cropped-2-1582530555.jpg?w=375&h=375&q=60&wp=1',
    description: 'A magnificent historical fort surrounded by the Arabian Sea on three sides.',
  },
  {
    name: 'Bhatye Beach',
    image: 'https://www.trawell.in/admin/images/upload/043721238Ratnagiri_Bhatye_Beach_Main.jpg',
    description: 'A long, flat, and peaceful beach perfect for evening strolls and sunset views.',
  }
];

export default function Destinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by 1 item width approx depending on screen
      const scrollAmount = container.clientWidth > 768 ? container.clientWidth * 0.5 : container.clientWidth;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Check if we reached the right end (within a 10px threshold)
        const isAtEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 10;
        
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const scrollAmount = container.clientWidth > 768 ? container.clientWidth * 0.5 : container.clientWidth;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // 4 seconds between auto-scrolls
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleBookTour = (destinationName?: string) => {
    const message = destinationName 
      ? `*Tour Package Inquiry*%0A%0A*Destination:* ${destinationName}%0AI would like to know more about this tour package.`
      : `*Tour Package Inquiry*%0A%0AI would like to know more about your tour packages.`;
    
    const whatsappUrl = `https://wa.me/919892676143?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="destinations" className="py-20 relative text-white overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Tour Packages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Explore Top Destinations</h3>
            <p className="text-slate-300 text-lg">
              Discover the hidden gems of Konkan with our specially curated tour packages. Slide to see more!
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous destination"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next destination"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <button
              onClick={() => handleBookTour()}
              className="hidden sm:inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 shrink-0"
            >
              Book a Tour
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative -mx-4 sm:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 px-4 sm:px-0 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                onClick={() => handleBookTour(dest.name)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 100px 0px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10 shadow-2xl"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{dest.name}</h4>
                  <p className="text-slate-300 text-sm opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
