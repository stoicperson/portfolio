import styles from "./index.module.scss";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { scale: 0.9, opacity: 0 },
  hover_one: {
    scale: 0.976,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  hover_two: {
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  view: {
    scale: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const ShortcutContainer = () => {
  return (
    <motion.div
      className={styles.container}
      animate="visible"
      variants={container}
    >
      <Link href="/about">
        <Shortcut text="about" type="one" />
      </Link>
      <Link href="/project">
        <Shortcut text="project" type="one" />
      </Link>
      <Link href="/blog">
        <Shortcut text="blog" type="two" />
      </Link>
      <a>
        <Shortcut text="contact" type="two" />
      </a>
    </motion.div>
  );
};

interface IPShortcut {
  text: string;
  type: string;
}

const Shortcut = ({ text, type }: IPShortcut) => {
  return (
    <motion.div
      whileHover={`hover_${type}`}
      whileInView="view"
      className={styles.item}
      variants={item}
    >
      <h3>{text}</h3>
    </motion.div>
  );
};

export default ShortcutContainer;
