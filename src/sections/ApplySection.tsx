import styles from "./ApplySection.module.css";

export default function ApplySection() {
  // 구글 폼 "보내기 → 링크"로 받은 전체 URL을 그대로 넣으세요.
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLAW9bgYpOyboeV-WFaaAWHA6_GsSNkJ0FTRJ1JIiqqpWHuw/viewform?embedded=true";

  return (
    <section id="apply" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>신청하기</h2>

        {/* ▶ 어두운 정보 패널 */}
        <div className={styles.infoPanel}>
          {/* 모집기간 */}
          <div className={styles.infoItem}>
            <span className={styles.icon} aria-hidden>🖊️</span>
            <span className={styles.label}>모집기간</span>
            <span className={styles.value}>
              2025. 08. 04. (월) 15:00 ~ 2025. 08. 06. (수) 15:00
            </span>
          </div>

          {/* 교육기간 */}
          <div className={styles.infoItem}>
            <span className={styles.icon} aria-hidden>📅</span>
            <span className={styles.label}>강의기간</span>
            <span className={styles.value}>
              2025. 08. 07. (수) 14:00 ~ 16:00
            </span>
          </div>

          {/* 교육비 (무료로 단순 표기) */}
          <div className={styles.infoItem}>
            <span className={styles.icon} aria-hidden>💰</span>
            <span className={styles.label}>강의비용</span>
            <span className={styles.value}>무료</span>
          </div>
        </div>

        <p className={styles.desc}>아래 버튼을 눌러 신청서를 작성해 주세요.<br/>새 탭에서 열립니다.</p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.submit}
        >
          지금 바로 신청하기
        </a>
      </div>
    </section>
  );
}