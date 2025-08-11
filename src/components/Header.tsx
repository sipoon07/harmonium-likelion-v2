import styles from "./Header.module.css";
import { smoothScrollToId } from "../lib/scroll";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "about", label: "강의소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "apply", label: "신청하기" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollToId(id, { duration: 600, offset: 8 }); // 속도/오프셋 취향대로
    // URL 해시도 갱신 (뒤로가기 동작, 북마크 등 편의)
    history.pushState(null, "", `#${id}`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={styles.link}
            onClick={(e) => handleClick(e, it.id)}
          >
            {it.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
