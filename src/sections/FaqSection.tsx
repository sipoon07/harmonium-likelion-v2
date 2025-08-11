import FaqItem from "../components/FaqItem";

const FAQS = [
  { q: "수강 대상은 누구인가요?", a: "취업 준비생 및 이직을 준비하는 분 모두 가능합니다." },
  { q: "강의는 어떻게 진행되나요?", a: "온라인 라이브 + 실습 + 피드백으로 진행됩니다." },
  { q: "환불/취소 규정이 있나요?", a: "개강 전 전액 환불, 개강 후 일정 비율 공제 후 환불 정책을 따릅니다." },
];

export default function FaqSection(): JSX.Element {
  return (
    <section id="faq" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold">자주 묻는 질문</h2>
        <div className="mt-6 grid gap-4">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}