import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import CurriculumSection from "./sections/CurriculumSection";
import ApplySection from "./sections/ApplySection";
import FaqSection from "./sections/FaqSection";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen text-gray-900">
      <Header />
      <HeroSection />
      <CurriculumSection />
      <ApplySection />
      <FaqSection />
      <footer className="bg-gray-100 py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LikeLion. All rights reserved.
      </footer>
    </div>
  );
}