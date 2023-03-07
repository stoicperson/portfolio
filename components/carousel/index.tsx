import styles from "./index.module.scss";
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

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface IProps {
  baseVelocity: number;
  images: string[];
}

const Carousel = ({ baseVelocity }: IProps) => {
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
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
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
    <div className={styles.container}>
      <motion.div className={styles.item_wrapper} ref={ref} style={{ x }}>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </motion.div>
    </div>
  );
};

export default Carousel;
