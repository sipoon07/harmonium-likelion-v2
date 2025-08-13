import styles from "./InstructorSection.module.css";
import instructorPhoto from "../assets/instructor.png"; // ← 업로드한 사진 파일명을 이렇게 저장

const CAREERS: string[] = [
  "(前) SI/OS 대기업 S사 회계팀/총무팀",
  "(前) 국비지원 데이터분석가 양성 프로그램 운영팀 PL",
  "(前) Series B SaaS 솔루션 스타트업, Series A DTx 개발 스타트업 경영지원팀장",
  "(前) IT교육 스타트업 C사 교육운영팀장",
  "(前) 멋쟁이사자처럼 Career Coach (KDT 부트캠프 수료생 취/창업 지원 프로그램 기획 총괄)",
  "(現) 멋쟁이사자처럼 교육 기획/운영 PM",
  "(前) 취업/인재 지원 프로그램 ‘취준캠퍼니’ 경영지원 직무 멘토",
  "(前) HR 전문가 커뮤니티 플랫폼 ‘인살롱’ 필진",
];

export default function InstructorSection() {
  return (
    <section id="instructor" className={styles.wrap}>
      <div className={styles.inner}>
        {/* 왼쪽: 강사사진 */}
        <div className={styles.photoWrap}>
          <img
            src={instructorPhoto}
            alt="강사 이은지"
            className={styles.photo}
          />
        </div>

        {/* 오른쪽: 강사 정보 */}
        <div className={styles.info}>
          <h2 className={styles.title}>강사소개</h2>
          <ul className={styles.baseList}>
            <li><strong className={styles.label}>이름</strong> : 이은지</li>
            <li>
              <strong className={styles.label}>소속</strong> : 멋쟁이사자처럼 교육 기획/운영 PM
            </li>
            <li>
              <strong className={styles.label}>경력</strong> : 경영학과 졸업 / 교육학과, 통계데이터과학과 학사편입 재학
              <ul className={styles.subList}>
                {CAREERS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
