import FaqItem from "../components/FaqItem";
import styles from "./FaqSection.module.css";

const FAQS = [
  { q: "수강 대상은 누구인가요?", a: "취업 준비생 및 이직을 준비하는 분 모두 가능합니다." },
  { q: "강의는 어떻게 진행되나요?", a: "온라인 라이브 + 실습 + 피드백으로 진행됩니다." },
  { q: "환불/취소 규정이 있나요?", a: "개강 전 전액 환불, 개강 후 일정 비율 공제 후 환불 정책을 따릅니다." },
];

export default function FaqSection() {
  return (
    <section id="faq" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>자주 묻는 질문</h2>
        <div className={styles.list}>
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
