import { useEffect } from "react";
import CTAButton from "../components/CTAButton";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <section id="about" className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          자기소개서를 작성하시는데
          <br className={styles.br} /> 막막하시나요?
        </h1>

        <div className={styles.ctaRow}>
          <CTAButton>바로 상담/신청하기</CTAButton>
          <CTAButton href="#curriculum" variant="secondary">
            강의 자세히 보기
          </CTAButton>
        </div>
      </div>
    </section>
  );
}