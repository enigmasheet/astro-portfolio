var backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.classList.remove('opacity-0', 'translate-y-5', 'pointer-events-none');
      backToTop.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
      backToTop.classList.add('opacity-0', 'translate-y-5', 'pointer-events-none');
      backToTop.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
  }, { passive: true });
}
