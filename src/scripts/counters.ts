function animateCounter(el: HTMLElement) {
  var target = Number.parseInt(el.dataset.target || '') || 0;
  var suffix = el.dataset.suffix || '';
  var duration = 1500;
  var start = performance.now();
  function update(now: number) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    var current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  var counters = document.querySelectorAll('.counter[data-target]:not(.counter-animated)');
  if (!counters.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target as HTMLElement);
        entry.target.classList.add('counter-animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { observer.observe(el); });
}

export { animateCounter, initCounters };
