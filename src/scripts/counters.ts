function animateCounter(el: HTMLElement) {
  const target = Number.parseInt(el.dataset.target || '') || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const start = performance.now();
  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]:not(.counter-animated)');
  if (!counters.length) return;
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          entry.target.classList.add('counter-animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach(function (el) {
    observer.observe(el);
  });
}

export { animateCounter, initCounters };
