function initReveal() {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  );
  els.forEach(function (el) {
    const staggerParent = el.closest('[data-reveal-stagger]');
    if (staggerParent) {
      const stagger =
        Number.parseInt((staggerParent as HTMLElement).dataset.revealStagger || '100') || 100;
      const children = staggerParent.querySelectorAll('[data-reveal]:not(.revealed)');
      children.forEach(function (child, i) {
        (child as HTMLElement).style.transitionDelay = i * stagger + 'ms';
        observer.observe(child);
      });
    } else {
      observer.observe(el);
    }
  });
}

export { initReveal };
