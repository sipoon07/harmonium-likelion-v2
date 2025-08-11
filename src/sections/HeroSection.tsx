import React, { useEffect } from "react";
import CTAButton from "../components/CTAButton";

export default function HeroSection(): JSX.Element {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <section id="about" className="bg-gray-200">
      <div className="mx-auto grid max-w-5xl place-items-center px-6 py-24 sm:py-28 lg:py-32 text-center">
        <h1 className="text-2xl font-semibold leading-snug sm:text-3xl">
          자기소개서를 작성하시는데
          <br className="hidden sm:block" /> 막막하시나요?
        </h1>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton>바로 상담/신청하기</CTAButton>
          <CTAButton href="#curriculum" variant="secondary">
            강의 자세히 보기
          </CTAButton>
        </div>
      </div>
    </section>
  );
}