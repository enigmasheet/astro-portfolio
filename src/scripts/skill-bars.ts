function initSkillBars() {
  var bars = document.querySelectorAll('.skill-bar-fill[data-target]:not(.animated)');
  if (!bars.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bar = entry.target as HTMLElement;
        bar.classList.add('animated');
        bar.style.width = bar.dataset.target + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function (bar) { observer.observe(bar); });
}

function watchSkillBars() {
  var pageContent = document.getElementById('page-content');
  if (!pageContent) return;
  var timer: ReturnType<typeof setTimeout>;
  var mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(initSkillBars, 50);
  });
  mo.observe(pageContent, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initSkillBars();
    watchSkillBars();
  });
} else {
  initSkillBars();
  watchSkillBars();
}

export { initSkillBars, watchSkillBars };
