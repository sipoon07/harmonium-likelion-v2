import type { ReactNode, MouseEvent } from "react";
import styles from "./CTAButton.module.css";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
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
    // 앵커 클릭도 onClick을 지원: onClick이 있으면 기본 이동을 막고 onClick 수행
    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        e.preventDefault();
        onClick(e);
      }
    };
    return (
      <a href={href} onClick={handleAnchorClick} className={`${cls} ${className}`}>
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