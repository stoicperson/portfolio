import { useEffect, useMemo, useState } from "react";

const INITIAlS = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const MEDIALS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  [9, 10],
  [9, 11],
  [9, 12],
  13,
  14,
  [14, 15],
  [14, 16],
  [14, 17],
  18,
  19,
  [19, 20],
  21,
];
const FINALS = [
  0,
  1,
  2,
  [1, 3],
  4,
  [4, 5],
  [4, 6],
  7,
  8,
  [8, 9],
  [8, 10],
  [8, 11],
  [8, 12],
  [8, 13],
  [8, 14],
  [8, 15],
  16,
  17,
  [17, 18],
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
];

function disassemble(str: string) {
  let inital,
    medial,
    final,
    code,
    result = [];

  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (0xac00 <= code && code <= 0xd7a3) {
      code -= 0xac00;
      final = code % 28;
      medial = ((code - final) / 28) % 21;
      inital = ((code - final) / 28 - medial) / 21;
      result.push(str.slice(0, i) + INITIAlS[inital]);
      if (typeof MEDIALS[medial] === "number") {
        result.push(str.slice(0, i) + makeHagul(inital, medial, 0));
      } else {
        for (let j of MEDIALS[medial] as number[]) {
          result.push(str.slice(0, i) + makeHagul(inital, j, 0));
        }
      }
      if (typeof FINALS[final] === "number") {
        final &&
          result.push(str.slice(0, i) + makeHagul(inital, medial, final));
      } else {
        for (let j of FINALS[final] as number[]) {
          result.push(str.slice(0, i) + makeHagul(inital, medial, j));
        }
      }
    } else {
      result.push(str.slice(0, i + 1));
    }
  }

  return result;
}

function makeHagul(inital: number, medial: number, final: number) {
  return String.fromCharCode((inital * 21 + medial) * 28 + final + 0xac00);
}

interface IProps {
  children: string;
}

const Intro = ({ children, ...props }: IProps) => {
  const jamos = useMemo(() => disassemble(children), [children]);
  const [context, setContext] = useState("");
  useEffect(() => {
    let count = 0,
      length = jamos.length;
    let interval = setInterval(() => {
      if (count === length - 1) {
        clearInterval(interval);
      }
      setContext(jamos[count]);
      count++;
    }, 80);
    return () => {
      clearInterval(interval);
    };
  }, [jamos]);
  return (
    <h1 {...props}>
      <div className="">{context}</div>
    </h1>
  );
};

export default Intro;
