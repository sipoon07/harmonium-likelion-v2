export function smoothScrollToId(
  id: string,
  opts?: { duration?: number; offset?: number }
) {
  const el = document.getElementById(id);
  if (!el) return; // null이면 함수 종료

  const target = el as HTMLElement; // HTMLElement로 단언
  const header = document.querySelector("header");
  const headerH = header instanceof HTMLElement ? header.offsetHeight : 0;

  const startY = window.scrollY;
  const rectTop = target.getBoundingClientRect().top;
  const offset = opts?.offset ?? 0;
  const targetY = startY + rectTop - headerH - offset;

  const duration = Math.max(200, Math.min(opts?.duration ?? 500, 2000));
  const start = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function frame(now: number) {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo({ top: startY + (targetY - startY) * eased });
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      // 접근성: 스크롤 완료 후 포커스 이동
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      setTimeout(() => target.removeAttribute("tabindex"), 0);
    }
  }

  requestAnimationFrame(frame);
}
