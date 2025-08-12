import { useEffect, useMemo, useState } from "react";
import styles from "./Typewriter.module.css";

type Props = {
  lines: string[];          // 출력할 문구들 (줄바꿈 단위)
  typingSpeed?: number;     // 한 글자 타이핑 간격(ms)
  startDelay?: number;      // 시작 전 대기(ms)
  linePause?: number;       // 한 줄 완료 후 다음 줄 시작 전 대기(ms)
  className?: string;       // 글자 크기/굵기 등은 부모에서 제어
};

export default function Typewriter({
  lines,
  typingSpeed = 45,
  startDelay = 300,
  linePause = 700,
  className = "",
}: Props) {
  const safeLines = useMemo(() => lines ?? [], [lines]);

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || lineIndex >= safeLines.length) return;

    const current = safeLines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    // 현재 줄 완료 → 다음 줄로
    if (lineIndex < safeLines.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, linePause);
      return () => clearTimeout(t);
    }
  }, [started, lineIndex, charIndex, safeLines, typingSpeed, linePause]);

  return (
    <div
      className={`${styles.wrap} ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {safeLines.map((text, i) => {
        const visible =
          i < lineIndex ? text : i === lineIndex ? text.slice(0, charIndex) : "";
        const showCaret = i === lineIndex && started && visible.length < text.length;

        return (
          <div key={i} className={styles.line}>
            <span>{visible}</span>
            {showCaret && <span className={styles.caret} aria-hidden="true">|</span>}
          </div>
        );
      })}
    </div>
  );
}
