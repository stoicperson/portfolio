import styles from "./index.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const ShortcutContainer = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={container}
      // whileInView={{ opacity: 1 }}
    >
      {["about", "project", "blog", "contact"].map((el) =>
        el !== "contact" ? (
          <Link className={styles.item} key={el} href={`/${el}`}>
            <Shortcut text={el} />
          </Link>
        ) : (
          <a className={styles.item} key={el}>
            <Shortcut text={el} />
          </a>
        )
      )}
    </motion.div>
  );
};

interface IPShortcut {
  text: string;
}

const Shortcut = ({ text }: IPShortcut) => {
  return (
    <motion.div variants={item} onAnimationComplete={() => console.log("hi")}>
      <h3>{text}</h3>
    </motion.div>
  );
};

export default ShortcutContainer;
