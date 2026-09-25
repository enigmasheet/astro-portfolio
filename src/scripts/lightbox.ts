document.querySelectorAll<HTMLImageElement>('[data-lightbox]').forEach(function (img) {
  img.addEventListener('click', function () {
    const overlay = document.createElement('div');
    overlay.className =
      'fixed inset-0 z-[100] bg-black/80 flex items-center justify-center cursor-pointer';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image lightbox');

    const closeBtn = document.createElement('button');
    closeBtn.className =
      'absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer text-2xl';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = 'close';
    closeBtn.className += ' material-symbols-outlined';
    overlay.appendChild(closeBtn);

    const clone = document.createElement('img');
    clone.src = img.src;
    clone.alt = img.alt;
    clone.className = 'max-w-[90vw] max-h-[90vh] object-contain rounded-lg animate-zoom-in';
    overlay.appendChild(clone);

    function close() {
      overlay.remove();
    }
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', handler);
      }
    });

    document.body.appendChild(overlay);
  });
});
