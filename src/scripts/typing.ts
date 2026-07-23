function initTyping() {
  const el = document.querySelector<HTMLElement>('[data-typing]:not(.typing-active)');
  if (!el) return;
  const typingEl = el;
  typingEl.classList.add('typing-active');
  var phrases = (typingEl.getAttribute('data-phrases') || '').split('|').filter(Boolean);
  if (!phrases.length) return;
  var speed = parseInt(typingEl.getAttribute('data-speed') || '') || 80;
  var deleteSpeed = parseInt(typingEl.getAttribute('data-delete-speed') || '') || 40;
  var pause = parseInt(typingEl.getAttribute('data-pause') || '') || 2000;
  var delay = parseInt(typingEl.getAttribute('data-delay') || '') || 0;
  var phraseIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  typingEl.after(cursor);
  function type() {
    var current = phrases[phraseIndex];
    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, deleteSpeed);
    } else {
      typingEl.textContent = current.substring(0, charIndex++);
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

export { initTyping };
