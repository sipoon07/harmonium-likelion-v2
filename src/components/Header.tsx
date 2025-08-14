import { useState } from "react";
import styles from "./Header.module.css";
import { smoothScrollToId } from "../lib/scroll";

type NavItem = { id: string; label: string };
const items: NavItem[] = [
  { id: "overview", label: "강의개요" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "instructor", label: "강사소개" },
  { id: "apply", label: "신청하기" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false); // 모바일에서 항목 클릭 시 닫기
    smoothScrollToId(id, { duration: 600, offset: 8 });
    history.pushState(null, "", `#${id}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* 로고 */}
        <a href="/" className={styles.logo} aria-label="홈으로 이동">
          <img
            src="https://likelion.net/img/likelion_kor_logo_renew.svg"
            alt="사이트 로고"
          />
        </a>

        {/* 데스크탑 네비 (그대로) */}
        <nav className={styles.nav} aria-label="주요 메뉴">
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

        {/* 모바일 햄버거 버튼 (데스크탑에서는 숨김) */}
        <button
          className={styles.hamburger}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* 모바일 드롭다운 패널 */}
      <div className={`${styles.mobilePanel} ${open ? styles.show : ""}`}>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={styles.mobileLink}
            onClick={(e) => handleClick(e, it.id)}
          >
            {it.label}
          </a>
        ))}
      </div>

      {/* 모바일 백드롭 */}
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </header>
  );
}