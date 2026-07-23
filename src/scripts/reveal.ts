function initReveal() {
  var els = document.querySelectorAll('[data-reveal]:not(.revealed)');
  if (!els.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) {
    var staggerParent = el.closest('[data-reveal-stagger]');
    if (staggerParent) {
      var stagger = Number.parseInt(staggerParent.dataset.revealStagger) || 100;
      var children = staggerParent.querySelectorAll('[data-reveal]:not(.revealed)');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * stagger) + 'ms';
        observer.observe(child);
      });
    } else {
      observer.observe(el);
    }
  });
}

function watchReveals() {
  var pageContent = document.getElementById('page-content');
  if (!pageContent) return;
  var timer: ReturnType<typeof setTimeout>;
  var mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(initReveal, 50);
  });
  mo.observe(pageContent, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    watchReveals();
  });
} else {
  initReveal();
  watchReveals();
}

export { initReveal, watchReveals };
