import { FormEvent } from "react";

export default function ApplySection(): JSX.Element {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // TODO: 실제 제출 로직으로 교체 (fetch 등)
    alert("신청이 접수되었습니다! 곧 연락드릴게요.");
  }

  return (
    <section id="apply" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xl font-bold">신청하기</h2>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-gray-700" htmlFor="name">
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="phone">
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            placeholder="010-0000-0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-gray-700" htmlFor="memo">
            문의/요청사항
          </label>
          <textarea
            id="memo"
            name="memo"
            rows={4}
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            placeholder="필요하신 점을 알려주세요"
          />
        </div>
        <button
          type="submit"
          className="sm:col-span-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm text-white shadow hover:shadow-md"
        >
          신청하기
        </button>
      </form>
    </section>
  );
}