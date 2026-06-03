import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'BERNADETTE HOGAN',
    quote: '"Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He\'s a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!"',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Premium real estate lifestyle placeholder
    stars: 5
  },
  {
    id: 2,
    name: 'ALEXANDER DUPONT',
    quote: '"The attention to detail during our home search was unparalleled. We felt prioritized at every step, and their understanding of market sub-trends saved us both time and money. An absolute masterclass in real estate client care."',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 3,
    name: 'MARCUS & LINDA REED',
    quote: '"Navigating this competitive market felt daunting until we partnered up here. Clear communication, straightforward answers, and unmatched negotiation strategies made our dream investment a reality. 10/10 recommendation."',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 4,
    name: 'SARAH JENNINGS',
    quote: '"Brilliant strategy and transparent execution. They helped me position my offer flawlessly on a highly sought-after historic property. Truly real estate rewired for the modern, high-intent buyer."',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    stars: 5
  },
  {
    id: 5,
    name: 'DAVID VANCE',
    quote: '"Responsive, objective, and data-driven. They didn\'t try to sell us on what was easy; they listened and curated opportunities specifically tuned to our long-term equity growth timeline. Highly recommended."',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    stars: 5
  }
];

const TriveniTestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Elegant cross-fade with a micro directional shift
  const slideVariants = {
    initial: { opacity: 0, x: 15 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -15, transition: { duration: 0.3 } }
  };

  const current = testimonials[activeIndex];

  return (
    <section className="bg-[#f7f6f5] min-h-screen flex items-center justify-center px-6 py-16 md:px-16 lg:px-24 font-sans selection:bg-gray-200 select-none">
      <div className="max-w-7xl w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Section Heading */}
        <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-medium tracking-tight text-black leading-tight">
          Don’t Take <span className="text-gray-400 font-light">Our Word for It.</span>
        </h2>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Image Container */}
          <div className="lg:col-span-6 w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-sm overflow-hidden bg-gray-200 relative shadow-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={`${current.name} lifestyle presentation`}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive Testimonial Console */}
          <div className="lg:col-span-6 flex flex-col pt-1 w-full">
            {/* Top Minimal Accent Line */}
            <hr className="border-gray-300 w-full mb-8" />

            {/* Pagination Controls & Large Custom Quote Icon */}
            <div className="flex items-center justify-between items-center mb-8">
              <div className="flex gap-2.5">
                {testimonials.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-8 h-8 rounded-full border text-xs font-medium flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-black border-gray-400 shadow-sm'
                          : 'bg-transparent text-gray-400 border-gray-300 hover:text-black hover:border-gray-500'
                      }`}
                    >
                      {item.id}
                    </button>
                  );
                })}
              </div>

              {/* Pixel Perfect Double Quotes Graphic */}
              <span className="text-[48px] font-serif leading-none text-black select-none font-semibold tracking-tighter transform translate-y-2">
                ””
              </span>
            </div>

            {/* Content Display: Animated Text Block */}
            <div className="min-h-[220px] sm:min-h-[180px] lg:min-h-[240px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-8"
                >
                  {/* Quote Body with Custom Serif Font */}
                  <p className="text-2xl sm:text-[26px] md:text-[28px] text-black leading-[1.35] tracking-tight font-serif font-normal">
                    {current.quote}
                  </p>

                  {/* Testimonial Signature & Rating Metadata */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-black tracking-widest uppercase">
                    <span>{current.name}</span>
                    <span className="text-gray-400 font-normal scale-125">/</span>
                    <div className="flex text-[10px] tracking-normal tracking-x-0.5 text-black">
                      {Array.from({ length: current.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TriveniTestimonialSection;