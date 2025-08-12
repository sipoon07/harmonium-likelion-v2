import { useEffect, useRef, useState } from "react";
import styles from "./FaqItem.module.css";

type Props = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ q, a, isOpen, onToggle }: Props) {
  const id = `faq-${q.replace(/\s+/g, "-")}`;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  // 열릴 때/창 크기 변경 시 실제 콘텐츠 높이에 맞춰 max-height 갱신
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const update = () => setMaxHeight(el.scrollHeight);
    update();

    // 폰트 로딩/리사이즈 등에도 높이 보정
    window.addEventListener("resize", update);
    const fontReady = (document as any).fonts?.ready as Promise<any> | undefined;
    fontReady?.then(update);

    return () => window.removeEventListener("resize", update);
  }, [isOpen, q, a]);

  return (
    <div className={styles.item}>
      <button
        className={styles.button}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className={styles.q}>{q}</span>
        <span className={styles.icon} aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={id}
        ref={contentRef}
        className={`${styles.answer} ${isOpen ? styles.show : ""}`}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
        role="region"
        aria-labelledby={id}
      >
        <div className={styles.content}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}