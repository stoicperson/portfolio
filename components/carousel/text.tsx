import styles from "./text.module.scss";
import { useRef } from "react";
import useElementWidth from "@/hooks/useElementWidth";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Source_Sans_Pro } from "@next/font/google";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["900"],
});

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface IProps {
  baseVelocity: number;
  text: string;
}

const TextCarousel = ({ baseVelocity, text }: IProps) => {
  const [ref, width] = useElementWidth();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 500,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-12.5, 0, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * (7680 / width);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`${styles.container} ${sourceSansPro.className}`}>
      <motion.div className={styles.item_wrapper} ref={ref} style={{ x }}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default TextCarousel;
