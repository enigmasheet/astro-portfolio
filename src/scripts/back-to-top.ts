var backToTop = document.getElementById('back-to-top');
var progressRing = document.getElementById('progress-ring') as SVGCircleElement | null;
var CIRCUMFERENCE = 125.6;
if (backToTop) {
  var backToTopButton = backToTop;
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
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
  }, { passive: true });
}
