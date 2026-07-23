function initTyping() {
  var el = document.querySelector('[data-typing]:not(.typing-active)');
  if (!el) return;
  el.classList.add('typing-active');
  var phrases = (el.getAttribute('data-phrases') || '').split('|').filter(Boolean);
  if (!phrases.length) return;
  var speed = parseInt(el.getAttribute('data-speed') || '') || 80;
  var deleteSpeed = parseInt(el.getAttribute('data-delete-speed') || '') || 40;
  var pause = parseInt(el.getAttribute('data-pause') || '') || 2000;
  var delay = parseInt(el.getAttribute('data-delay') || '') || 0;
  var phraseIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  el.after(cursor);
  function type() {
    var current = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, deleteSpeed);
    } else {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, pause);
        return;
      }
      setTimeout(type, speed);
    }
  }
  setTimeout(type, delay);
}

function watchTyping() {
  var pageContent = document.getElementById('page-content');
  if (!pageContent) return;
  var timer: ReturnType<typeof setTimeout>;
  var mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(initTyping, 50);
  });
  mo.observe(pageContent, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initTyping();
    watchTyping();
  });
} else {
  initTyping();
  watchTyping();
}

export { initTyping, watchTyping };
