import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import CurriculumSection from "./sections/CurriculumSection";
import ApplySection from "./sections/ApplySection";
import FaqSection from "./sections/FaqSection";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <HeroSection />
      <OverviewSection />
      <CurriculumSection />
      <ApplySection />
      <FaqSection />
      <footer className={styles.footer}>
        © {new Date().getFullYear()} LikeLion. All rights reserved.
      </footer>
    </div>
  );
}
