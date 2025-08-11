import styles from "./CurriculumSection.module.css";

const items = [
  "채용 공고/직무 키워드 해석",
  "경험 인벤토리 작성 및 정리",
  "STAR/BEI 기반 스토리 구조화",
  "문항 유형별 템플릿 & 실습",
  "표현 다듬기와 가독성 향상",
  "실전 피드백과 보완 계획",
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>커리큘럼</h2>
        <ul className={styles.grid}>
          {items.map((t) => (
            <li key={t} className={styles.card}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
