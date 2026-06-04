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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-16 md:px-12 lg:px-20 font-sans selection:bg-gray-100 antialiased">
      <motion.div
        className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Column: Hero Typography & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-7">
          <motion.h1
            variants={itemVariants}
            className="text-[44px] sm:text-[56px] md:text-[64px] font-medium tracking-tight text-[#111111] leading-[1.05]"
          >
            Crafted In,
            <span className="block text-[#b3b3b3] font-normal">
              Stone & Tile.
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <button className="inline-flex items-center gap-2.5 bg-[#111111] hover:bg-black text-white text-[13px] font-medium tracking-tight py-2.5 px-40 rounded-full transition-all duration-200 group">
              Explore Collection
              <svg
                className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
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

        {/* Right Column: Steps Timeline */}
        <div className="lg:col-span-7 w-full flex flex-col pt-1">
          <motion.h2
            variants={itemVariants}
            className="text-[20px] font-medium text-[#111111] tracking-tight mb-5"
          >
            Steps:
          </motion.h2>

          <div className="flex flex-col gap-5 border-t border-[#ededed]">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex items-start border-b border-[#ededed] py-7 sm:py-9"
              >
                {/* Step Number */}
                <span className="text-[12px] font-normal text-[#b3b3b3] w-12 sm:w-16 pt-2.5 shrink-0 block architecture-num">
                  {step.id}
                </span>

                {/* Step Content */}
                <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] tracking-tight text-[#b3b3b3] font-normal">
                  <span className="text-[#111111] font-medium mr-1.5">
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