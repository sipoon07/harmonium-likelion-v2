import styles from "./ApplySection.module.css";

export default function ApplySection() {
  // 구글 폼 "보내기 → 링크"로 받은 전체 URL을 그대로 넣으세요.
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLAW9bgYpOyboeV-WFaaAWHA6_GsSNkJ0FTRJ1JIiqqpWHuw/viewform?embedded=true";

  return (
    <section id="apply" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>강의 신청하기</h2>
        <ul className={styles.infoList}>
          <li><strong>모집기간:</strong> 2025. 08. 04. (월) 15:00 ~ 2025. 08. 06. (수) 15:00</li>
          <li><strong>교육기간:</strong> 2025. 08. 07. (수) 14:00 ~ 16:00</li>
          <li><strong>교육비:</strong> 무료</li>
        </ul>
        <p className={styles.desc}>아래 버튼을 눌러 신청서를 작성해 주세요. 새 탭에서 열립니다.</p>
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