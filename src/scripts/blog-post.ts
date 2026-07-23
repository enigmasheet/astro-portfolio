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

const copyBtn = document.getElementById('copy-link');
const copyLabel = document.getElementById('copy-label');
if (copyBtn && copyLabel) {
  const copyBtnElement = copyBtn;
  const copyLabelElement = copyLabel;
  const shareUrl = copyBtnElement.dataset.url || '';
  copyBtnElement.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(shareUrl);
      copyLabelElement.innerHTML = 'Link copied! &#10003;';
      copyBtnElement.classList.add('scale-pulse');
      setTimeout(function () { copyLabelElement.innerHTML = 'Copy link'; copyBtnElement.classList.remove('scale-pulse'); }, 2000);
    } catch { console.warn('Clipboard write failed'); }
  });
}
