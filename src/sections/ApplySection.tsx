import type { FormEvent } from "react";
import styles from "./ApplySection.module.css";

export default function ApplySection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("신청이 접수되었습니다! 곧 연락드릴게요.");
  }

  return (
    <section id="apply" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>신청하기</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" placeholder="홍길동" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">연락처</label>
            <input id="phone" name="phone" type="tel" placeholder="010-0000-0000" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="memo">문의/요청사항</label>
            <textarea id="memo" name="memo" rows={4} placeholder="필요하신 점을 알려주세요" />
          </div>
          <button type="submit" className={styles.submit}>신청하기</button>
        </form>
      </div>
    </section>
  );
}
