var progressBar = document.querySelector('#progress-bar > div') as HTMLElement | null;
if (progressBar) {
  const progressBarElement = progressBar;
  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    progressBarElement.style.width = progress + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

var copyBtn = document.getElementById('copy-link');
var copyLabel = document.getElementById('copy-label');
if (copyBtn && copyLabel) {
  var shareUrl = copyBtn.dataset.url || '';
  copyBtn.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(shareUrl);
      copyLabel.innerHTML = 'Link copied! &#10003;';
      copyBtn.classList.add('scale-pulse');
      setTimeout(function () { copyLabel.innerHTML = 'Copy link'; copyBtn.classList.remove('scale-pulse'); }, 2000);
    } catch { console.warn('Clipboard write failed'); }
  });
}
