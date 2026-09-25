type ToastVariant = 'error' | 'success';

export function showToast(message: string, variant: ToastVariant = 'error') {
  const existing = document.getElementById('global-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'global-toast';
  toast.className =
    'fixed top-24 right-4 z-[100] px-5 py-3 rounded-lg shadow-lg text-sm font-medium max-w-sm animate-slide-in';
  toast.style.background = variant === 'success' ? 'var(--color-tertiary)' : 'var(--color-error)';
  toast.style.color = 'white';
  toast.textContent = message;
  toast.setAttribute('role', 'alert');

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
