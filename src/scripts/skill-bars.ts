function initSkillBars() {
  var bars = document.querySelectorAll('.skill-bar-fill[data-target]:not(.animated)');
  if (!bars.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bar = entry.target as HTMLElement;
        bar.classList.add('animated');
        var targetValue = bar.dataset.target || '0';
        bar.style.width = targetValue + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function (bar) { observer.observe(bar); });
}

export { initSkillBars };
