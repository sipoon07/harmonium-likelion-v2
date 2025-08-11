import React from "react";  
type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "about", label: "강의소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "apply", label: "신청하기" },
  { id: "faq", label: "FAQ" },
];

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-gray-700 text-gray-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-10 py-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm tracking-tight hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/60 rounded px-1"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}