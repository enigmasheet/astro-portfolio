import { FORMSPREE_URL } from '../data/social';

var form = document.getElementById('contact-form') as HTMLFormElement | null;
var submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
var successDiv = document.getElementById('form-success');
var textarea = document.getElementById('message') as HTMLTextAreaElement | null;
var charCount = document.getElementById('char-count');

if (textarea && charCount) {
  var textareaEl = textarea;
  var charCountEl = charCount;
  textareaEl.addEventListener('input', function () {
    var len = textareaEl.value.length;
    charCountEl.textContent = len + '/5000';
    charCountEl.style.color = len > 4500 ? 'var(--color-error)' : '';
  });
}

function showError(field: string) {
  var err = document.querySelector('[data-error="' + field + '"]');
  if (err) err.classList.remove('hidden');
  var input = form?.querySelector('[name="' + field + '"]');
  if (input) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', 'error-' + field);
  }
}

function clearErrors() {
  document.querySelectorAll('[data-error]').forEach(function (e) { e.classList.add('hidden'); });
  form?.querySelectorAll('[aria-invalid]').forEach(function (e) { e.removeAttribute('aria-invalid'); e.removeAttribute('aria-describedby'); });
}

function validateEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function showToast(msg: string) {
  var existing = document.getElementById('form-toast');
  if (existing) existing.remove();
  var toast = document.createElement('div');
  toast.id = 'form-toast';
  toast.className = 'fixed top-24 right-4 z-[100] bg-(--color-error) text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium max-w-sm animate-slide-in';
  toast.textContent = msg;
  toast.setAttribute('role', 'alert');
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(function () { toast.remove(); }, 300);
  }, 4000);
}

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearErrors();

    var name = (form.querySelector('[name="name"]') as HTMLInputElement).value.trim();
    var email = (form.querySelector('[name="email"]') as HTMLInputElement).value.trim();
    var message = (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim();
    var valid = true;

    if (!name) { showError('name'); valid = false; }
    if (!email || !validateEmail(email)) { showError('email'); valid = false; }
    if (!message) { showError('message'); valid = false; }

    if (!valid) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      var res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        form.classList.add('hidden');
        if (successDiv) successDiv.classList.remove('hidden');
      } else {
        showToast('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      showToast('Network error. Please try again or email me directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }
  });
}
