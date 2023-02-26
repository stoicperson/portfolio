import { useEffect, useMemo, useState } from "react";
import disassemble from "./disassemble";
import styles from "./index.module.scss";

interface IProps {
  children: string;
  delay?: number;
}

const Typing = ({ children, delay, ...props }: IProps) => {
  const jamos = useMemo(() => disassemble(children), [children]);
  const [context, setContext] = useState("");
  const [isDelay, setIsDelay] = useState(delay ? true : false);
  useEffect(() => {
    if (!delay) return;
    let timeout = setTimeout(() => {
      setIsDelay(false);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);
  useEffect(() => {
    if (isDelay) return;
    let count = 0,
      length = jamos.length;
    let interval = setInterval(() => {
      if (count === length - 1) {
        clearInterval(interval);
      }
      setContext(jamos[count]);
      count++;
    }, 75);
    return () => {
      clearInterval(interval);
    };
  }, [jamos, isDelay]);
  return (
    <div className={styles.container} {...props}>
      <div className={styles.background}>{children}</div>
      <h1 className={styles.typing}>{context}</h1>
    </div>
  );
};

export default Typing;
