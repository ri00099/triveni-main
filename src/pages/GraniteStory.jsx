import React from "react";
import { motion } from "framer-motion";

const ChevronOverlaySection = () => {
  // Balanced, synchronized animation orchestrations using a premium custom ease curve
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05 // Subtle staggered reveal coordination
      },
    },
  };

  const segmentVariant = {
    hidden: { width: "0%" },
    visible: (custom) => ({
      width: "25%",
      transition: {
        delay: custom * 0.16,
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const imageVariant = {
    hidden: {
      scale: 1.35,
      opacity: 0,
      filter: "blur(12px)",
    },
    visible: (custom) => ({
      scale: 1.15, // Uniform bleed fill factor
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: custom * 0.16,
        duration: 1.35,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const cards = [
    {
      src: "https://images.unsplash.com/photo-1561490497-43bc900ac2d8?w=900&auto=format&fit=crop&q=70",
      alt: "Gallery",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=70",
      alt: "Modern Architecture",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1764687862296-d7b186a812f9?w=900&auto=format&fit=crop&q=70",
      alt: "Luxury Interior",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1744995489285-49702c7ed0f5?w=900&auto=format&fit=crop&q=70",
      alt: "Man Profile",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-28 px-6 md:px-16 lg:px-24 overflow-hidden select-none gap-14 md:gap-12 antialiased">
      
      {/* Top Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={textVariant}
        className="text-[2.25rem] md:text-[3rem] font-medium tracking-wide text-black text-center leading-tight max-w-4xl"
      >
        This isn’t just{" "}
        <span className="text-[#a3a3a3] font-normal tracking-tight">
          about real estate.
        </span>
      </motion.h2>

      {/* Central Interactive Mask Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={containerVariant}
        className="relative w-full max-w-[960px] h-[280px] md:h-[360px] flex items-center justify-center bg-white will-change-transform"
        style={{
          clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
        }}
      >
        {/* The Flex row holding the 4 equal image strips */}
        <div className="absolute inset-0 flex w-full h-full gap-0">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={segmentVariant}
              className="h-full relative overflow-hidden border-r-[12px] border-white last:border-r-0 will-change-[width]"
            >
              {/* Inherits animation state natively from parent container scope */}
              <motion.div
                custom={i}
                variants={imageVariant}
                className="absolute inset-0 w-[140%] h-full left-1/2 -translate-x-1/2 will-change-[transform,filter]"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Precise Geometric Overlay Gaps */}
        <div className="absolute inset-0 pointer-events-none flex gap-0 w-full h-full z-10">
          <div
            className="w-1/4 h-full border-r-[12px] border-white"
            style={{ transform: "skewX(-22deg)" }}
          />
          <div
            className="w-1/4 h-full border-r-[12px] border-white"
            style={{ transform: "skewX(-22deg)" }}
          />
          <div
            className="w-1/4 h-full border-r-[12px] border-white"
            style={{ transform: "skewX(-22deg)" }}
          />
          <div className="w-1/4 h-full" />
        </div>
      </motion.div>

      {/* Bottom Sub-Typography */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={textVariant}
        className="text-center max-w-2xl space-y-2 px-4"
      >
        <p className="text-lg md:text-[1.45rem] font-medium tracking-tight text-black">
          It’s about identity. Progress. Getting unstuck.
        </p>
        <p className="text-lg md:text-[1.45rem] font-medium tracking-tight text-black leading-snug">
          You’re not just looking for a place.{" "}
          <span className="text-[#a3a3a3] font-normal block md:inline tracking-normal">
            You’re looking for alignment.
          </span>
        </p>
        <p className="text-lg md:text-[1.45rem] font-normal text-[#a3a3a3] tracking-normal">
          That’s what we help you find.
        </p>
      </motion.div>
    </section>
  );
};

export default ChevronOverlaySection;