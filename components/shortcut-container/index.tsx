import styles from "./index.module.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { y: 20, x: -20, opacity: 0 },
  visible: { y: 0, x: 0, opacity: 1 },
};

const item = {
  hidden: { y: 20, x: -20, opacity: 0 },
  visible: { y: 0, x: 0, opacity: 1 },
};

const ShortcutContainer = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {["ss", "cc", "aa", "bb"].map((el) => (
        <motion.div className={styles.item} key={el} variants={item}>
          el
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShortcutContainer;
