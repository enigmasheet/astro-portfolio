const backToTop = document.getElementById('back-to-top');
const progressRing = document.getElementById('progress-ring') as SVGCircleElement | null;
const CIRCUMFERENCE = 125.6;
if (backToTop) {
  const backToTopButton = backToTop;
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener(
    'scroll',
    function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      if (progressRing) {
        progressRing.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      }
      if (scrollTop > 300) {
        backToTopButton.classList.remove('opacity-0', 'translate-y-5', 'pointer-events-none');
        backToTopButton.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        backToTopButton.classList.add('opacity-0', 'translate-y-5', 'pointer-events-none');
        backToTopButton.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      }
    },
    { passive: true },
  );
}
