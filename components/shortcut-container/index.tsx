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
    >
      <Link href="/about">
        <Shortcut>
          <h3>About</h3>
        </Shortcut>
      </Link>
      <Link href="/project">
        <Shortcut>
          <h3>Project</h3>
        </Shortcut>
      </Link>
      <Link href="/blog">
        <Shortcut>
          <h3>blog</h3>
        </Shortcut>
      </Link>
      <a>
        <Shortcut>
          <Contact />
        </Shortcut>
      </a>
    </motion.div>
  );
};

interface IPShortcut {
  children: JSX.Element;
}

const Shortcut = ({ children }: IPShortcut) => {
  return (
    <motion.div className={styles.item} variants={item}>
      {children}
    </motion.div>
  );
};

const About = () => {};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.airplane}>
        <svg
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M857.366 509.858C857.521 506.536 856.396 503.359 854.346 500.915C853.109 499.442 851.55 498.247 849.7 497.43L66.8198 150.983C58.8123 147.447 49.4712 148.795 42.7829 154.477C36.1033 160.151 33.2492 169.146 35.4433 177.634L91.7129 394.857L607.092 491.144L105.656 448.675L175.756 719.279C176.61 722.608 178.22 725.675 180.372 728.241C182.209 730.43 184.427 732.263 186.969 733.646C192.528 736.655 199.096 737.241 205.099 735.248L848.537 521.497C853.608 519.824 857.123 515.19 857.366 509.858Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default ShortcutContainer;
