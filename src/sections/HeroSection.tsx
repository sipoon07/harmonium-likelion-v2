import { useEffect } from "react";
import CTAButton from "../components/CTAButton";
import { smoothScrollToId } from "../lib/scroll";
import Typewriter from "../components/Typewriter";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  const goApply = () => {
    smoothScrollToId("apply", { duration: 600, offset: 8 });
    history.pushState(null, "", "#apply");
  };

  const goCurriculum = () => {
    smoothScrollToId("curriculum", { duration: 600, offset: 8 });
    history.pushState(null, "", "#curriculum");
  };

  return (
    <section id="about" className={styles.wrap}>
      <div className={styles.inner}>
        <Typewriter
          className={styles.title}
          lines={[
            "아직도 혼자서 자기소개서를 작성하시나요?",
            "이 강의를 들어보시고 생성형 AI 자기소개서를 작성해보세요!"
          ]}
          typingSpeed={42}
          startDelay={200}
          linePause={600}
        />
        <div className={styles.ctaRow}>
          {/* 같은 URL이더라도 onClick으로 스무스 스크롤 가로채기 */}
          <CTAButton href="#apply" onClick={goApply}>
            신청하기
          </CTAButton>
          <CTAButton href="#curriculum" variant="secondary" onClick={goCurriculum}>
            강의 자세히 보기
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
