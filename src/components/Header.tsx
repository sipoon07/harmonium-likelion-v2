import styles from "./Header.module.css";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "about", label: "강의소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "apply", label: "신청하기" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className={styles.link}>
            {it.label}
          </a>
        ))}
      </nav>
    </header>
  );
}