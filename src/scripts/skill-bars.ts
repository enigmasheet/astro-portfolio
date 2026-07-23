function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-target]:not(.animated)');
  if (!bars.length) return;
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          bar.classList.add('animated');
          const targetValue = bar.dataset.target || '0';
          bar.style.width = targetValue + '%';
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 },
  );
  bars.forEach(function (bar) {
    observer.observe(bar);
  });
}

export { initSkillBars };
