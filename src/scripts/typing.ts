function initTyping() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el = document.querySelector<HTMLElement>('[data-typing]:not(.typing-active)');
  if (!el) return;
  const typingEl = el;
  typingEl.classList.add('typing-active');
  const phrases = (typingEl.getAttribute('data-phrases') || '').split('|').filter(Boolean);
  if (!phrases.length) return;
  const speed = parseInt(typingEl.getAttribute('data-speed') || '') || 80;
  const deleteSpeed = parseInt(typingEl.getAttribute('data-delete-speed') || '') || 40;
  const pause = parseInt(typingEl.getAttribute('data-pause') || '') || 2000;
  const delay = parseInt(typingEl.getAttribute('data-delay') || '') || 0;
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  typingEl.after(cursor);
  function type() {
    const current = phrases[phraseIndex];
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
