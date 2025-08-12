import { useState } from "react";
import styles from "./FaqItem.module.css";

type Props = { q: string; a: string };

export default function FaqItem({ q, a }: Props) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, "-")}`;

  return (
    <div className={styles.item}>
      <button
        className={styles.button}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className={styles.q}>{q}</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>
      <div
        id={id}
        className={`${styles.answer} ${open ? styles.show : ""}`}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}