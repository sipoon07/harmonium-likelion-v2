import React, { ReactNode } from "react";

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
}: Props): JSX.Element {
  const base = "rounded-2xl px-5 py-2 text-sm transition shadow";
  const styles =
    variant === "primary"
      ? "bg-gray-900 text-white hover:opacity-95 hover:shadow-md"
      : "border border-gray-900/20 hover:bg-white/60";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}