import styles from "./ApplySection.module.css";

export default function ApplySection() {
  // TODO: 아래 URL을 본인 Google Form 링크로 교체하세요.
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScVJgEiLJFIFvfxRgQn44LVHW8HS2dquzWU0u0bMtmAK736gg/viewform";

  return (
    <section id="apply" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>신청하기</h2>
        <p className={styles.desc}>
          아래 버튼을 눌러 신청서를 작성해 주세요. 새 탭에서 Google Form이 열립니다.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.submit}
          aria-label="구글 폼 새 탭에서 열기"
        >
          구글 폼 열기
        </a>
      </div>
    </section>
  );
}