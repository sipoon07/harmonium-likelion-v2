import { useState } from "react";
import FaqItem from "../components/FaqItem";
import styles from "./FaqSection.module.css";

const FAQS = [
  { q: "수강 대상은 누구인가요?", a: "20~30대 취업 준비생 및 이직을 준비하는 분 모두 가능합니다." },
  { q: "강의는 어떻게 진행되나요?", a: "ZOOM으로 이론중심 강의로 진행됩니다." },
  { q: "참가 비용은 어떻게 되나요?", a: "비용은 무료이므로 편하게 신청하시면 됩니다." },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>자주 묻는 질문</h2>
        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={activeIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
