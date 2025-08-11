const items: string[] = [
  "채용 공고/직무 키워드 해석",
  "경험 인벤토리 작성 및 정리",
  "STAR/BEI 기반 스토리 구조화",
  "문항 유형별 템플릿 & 실습",
  "표현 다듬기와 가독성 향상",
  "실전 피드백과 보완 계획",
];

export default function CurriculumSection(): JSX.Element {
  return (
    <section id="curriculum" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold">커리큘럼</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((t) => (
            <li key={t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}