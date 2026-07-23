import { FORMSPREE_URL } from '../data/social';

var form = document.getElementById('contact-form') as HTMLFormElement | null;
var submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
var successDiv = document.getElementById('form-success');

function showError(field: string) {
  var err = document.querySelector('[data-error="' + field + '"]');
  if (err) err.classList.remove('hidden');
}

function clearErrors() {
  document.querySelectorAll('[data-error]').forEach(function (e) { e.classList.add('hidden'); });
}

function validateEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
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
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      alert('Network error. Please try again or email me directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }
  });
}
