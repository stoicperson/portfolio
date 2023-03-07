import { useState, useEffect, useCallback } from "react";

export default function useElementWidth<T extends HTMLElement>(): [
  (node: T | null) => void,
  number
] {
  const [ref, setRef] = useState<T | null>(null);
  const [width, setWidth] = useState<number>(100);
  useEffect(() => {
    setWidth(ref?.offsetWidth || 0);
  }, [ref]);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleResize = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setWidth(ref?.offsetWidth || 0);
      }, 300);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref?.offsetWidth]);
  return [setRef, width];
}
