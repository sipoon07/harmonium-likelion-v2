import styles from "./OverviewSection.module.css";

export default function OverviewSection() {
  const items = [
    { icon: "⏰", label: "강의 시간", value: "2025. 08. 07 (목) 14:00 ~ 16:00" },
    { icon: "🗺️", label: "강의 장소", value: "ZOOM (주소는 추후 공개예정)" },
    { icon: "🗓️", label: "모집 기간", value: "2025. 08. 04. (월) 15:00 ~ 2025. 08. 06 (수) 15:00" },
    { icon: "💰", label: "참가 비용", value: "무료" },
  ];

  return (
    <section id="overview" className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>강의개요</h2>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
