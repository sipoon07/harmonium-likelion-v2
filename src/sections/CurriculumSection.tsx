import styles from "./CurriculumSection.module.css";

const items = [
  "자기소개서 작성 시 유의점",
  "생성형 AI 기반 자기소개서\n작성 전략 수립 방법",
  "생성형 AI 기반 자기소개서\n초안 작성 방법",
  "자기소개서 수정/탈고 방법"
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>커리큘럼</h2>
        <span className={styles.subtitle}>
        이론 중심의 자기소개서 작성 노하우를 단계별로 배웁니다.
        </span>
        <ul className={styles.grid}>
          {items.map((t) => (
            <li key={t} className={styles.card}>
              <span className="{styles.icon}">✅&nbsp;&nbsp;</span>
              <span className="{styles.text">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
