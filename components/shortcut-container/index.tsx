import { motion } from "framer-motion";

const container = {};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ShortcutContainer = () => {
  return (
    <motion.div animate="visible" variants={container}>
      <motion.div variants={item}></motion.div>
      <motion.div variants={item}></motion.div>
      <motion.div variants={item}></motion.div>
      <motion.div variants={item}></motion.div>
    </motion.div>
  );
};

export default ShortcutContainer;
