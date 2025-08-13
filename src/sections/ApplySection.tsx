import styles from "./ApplySection.module.css";

export default function ApplySection() {
  // 구글 폼 "보내기 → 링크"로 받은 전체 URL을 그대로 넣으세요.
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLAW9bgYpOyboeV-WFaaAWHA6_GsSNkJ0FTRJ1JIiqqpWHuw/viewform?embedded=true";

  return (
    <section id="apply" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>신청하기</h2>
        <h2 className={styles.desc}>망설임은 신청을 늦출 뿐!<br/>지금 바로 아래 버튼을 눌러 강의 신청해 보세요!</h2>
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