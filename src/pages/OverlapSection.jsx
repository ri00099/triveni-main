import { motion, useScroll, useTransform } from "framer-motion";

const OverlapSection = ({ children }) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95]
  );

  return (
    <motion.section
      style={{ scale }}
      className="sticky top-0 h-screen"
    >
      {children}
    </motion.section>
  );
};

export default OverlapSection;