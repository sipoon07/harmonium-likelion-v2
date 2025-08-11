import type { ReactNode } from "react";
import styles from "./CTAButton.module.css";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function CTAButton({
  href = "#apply",
  variant = "primary",
  className = "",
  children,
  onClick,
}: Props) {
  const cls =
    variant === "primary"
      ? `${styles.btn} ${styles.primary}`
      : `${styles.btn} ${styles.secondary}`;

  if (href) {
    return (
      <a href={href} className={`${cls} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`${cls} ${className}`}>
      {children}
    </button>
  );
}