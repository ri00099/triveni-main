import React from "react";
import { motion } from "framer-motion";

const TriveniProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Share Your Vision.",
      description:
        "Tell us about your space, style preferences, and project requirements.",
    },
    {
      id: "02",
      title: "Explore Premium Collections.",
      description:
        "Discover handpicked granite, marble, vitrified tiles, and designer surfaces.",
    },
    {
      id: "03",
      title: "Transform Your Space.",
      description:
        "Bring your interiors to life with expert guidance and flawless material selection.",
    },
  ];

  // Animation variants for the container (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual elements lifting up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-16 md:px-16 lg:px-24 font-sans selection:bg-gray-200 overflow-hidden">
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Column: Hero Typography & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-[52px] sm:text-[64px] md:text-[72px] font-medium tracking-tight text-black leading-[1.05] mb-8"
            >
              Crafted In
              <span className="block text-gray-400 font-light">
                Stone & Tile.
              </span>
            </motion.h1>

            <motion.div variants={itemVariants}>
              <button className="inline-flex items-center gap-3 bg-[#111111] hover:bg-black text-white text-sm font-medium tracking-wide py-3.5 px-6 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md">
                Explore Collection
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Steps Timeline */}
        <div className="lg:col-span-7 lg:pl-12 w-full">
          <motion.h2
            variants={itemVariants}
            className="text-xl font-semibold text-black tracking-tight mb-6"
          >
            Our Process
          </motion.h2>

          <div className="flex flex-col">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex items-start border-t border-gray-100 py-7 md:py-9 first:border-t-2 group/item"
              >
                {/* Step Number */}
                <span className="text-sm font-semibold text-gray-400 group-hover/item:text-black transition-colors duration-300 tracking-wider w-12 sm:w-16 pt-1.5 shrink-0">
                  {step.id}
                </span>

                {/* Step Content */}
                <p className="text-2xl sm:text-[28px] md:text-[32px] leading-[1.25] tracking-tight text-gray-400 font-normal transition-colors duration-300">
                  <span className="text-black font-semibold mr-2">
                    {step.title}
                  </span>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TriveniProcessSection;
