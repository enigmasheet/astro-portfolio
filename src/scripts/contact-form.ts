import { FORMSPREE_URL } from '../data/social';
import { showToast } from './toast';

const form = document.getElementById('contact-form') as HTMLFormElement | null;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
const btnSpinner = document.getElementById('btn-spinner') as HTMLElement | null;
const btnLabel = document.getElementById('btn-label') as HTMLElement | null;
const successDiv = document.getElementById('form-success');
const textarea = document.getElementById('message') as HTMLTextAreaElement | null;
const charCount = document.getElementById('char-count');

if (textarea && charCount) {
  const textareaEl = textarea;
  const charCountEl = charCount;
  textareaEl.addEventListener('input', function () {
    const len = textareaEl.value.length;
    charCountEl.textContent = len + '/5000';
    charCountEl.style.color = len > 4500 ? 'var(--color-error)' : '';
  });
}

function showError(field: string) {
  const err = document.querySelector('[data-error="' + field + '"]');
  if (err) err.classList.remove('hidden');
  const input = form?.querySelector('[name="' + field + '"]');
  if (input) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', 'error-' + field);
  }
}

function clearErrors() {
  document.querySelectorAll('[data-error]').forEach(function (e) {
    e.classList.add('hidden');
  });
  form?.querySelectorAll('[aria-invalid]').forEach(function (e) {
    e.removeAttribute('aria-invalid');
    e.removeAttribute('aria-describedby');
  });
}

function validateEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

if (form) {
  const formEl = form;
  formEl.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearErrors();

    const nameInput = formEl.querySelector<HTMLInputElement>('[name="name"]');
    const emailInput = formEl.querySelector<HTMLInputElement>('[name="email"]');
    const messageInput = formEl.querySelector<HTMLTextAreaElement>('[name="message"]');

    if (!nameInput || !emailInput || !messageInput) {
      showToast('Please complete the contact form and try again.');
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    let valid = true;

    if (!name) {
      showError('name');
      valid = false;
    }
    if (!email || !validateEmail(email)) {
      showError('email');
      valid = false;
    }
    if (!message) {
      showError('message');
      valid = false;
    }

    if (!valid) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.classList.remove('hidden');
      if (btnLabel) btnLabel.textContent = 'Sending...';
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(formEl),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        formEl.classList.add('hidden');
        if (successDiv) successDiv.classList.remove('hidden');
      } else {
        showToast('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      showToast('Network error. Please try again or email me directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (btnSpinner) btnSpinner.classList.add('hidden');
        if (btnLabel) btnLabel.textContent = 'Send Message';
      }
    }
  });
}
