import React, { useState } from "react";

type Props = { q: string; a: string };

export default function FaqItem({ q, a }: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
        aria-controls={`faq-${q}`}
      >
        <span className="font-medium">{q}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p id={`faq-${q}`} className="mt-3 text-gray-600 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}
