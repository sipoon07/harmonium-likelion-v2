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
    smoothScrollToId(id, { duration: 600, offset: 8 });
    history.pushState(null, "", `#${id}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* ✅ import한 로고 사용 */}
        <a href="/" className={styles.logo} aria-label="홈으로 이동">
          <img src="https://likelion.net/img/likelion_kor_logo_renew.svg" alt="사이트 로고" />
        </a>

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
      </div>
    </header>
  );
}
