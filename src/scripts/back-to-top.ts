var backToTop = document.getElementById('back-to-top');
if (backToTop) {
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
