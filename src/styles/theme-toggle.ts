const STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'dark';
  return (localStorage.getItem(STORAGE_KEY) as Theme) || 'dark';
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

export function toggleTheme(): Theme {
  const current = getStoredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme(): void {
  const theme = getStoredTheme();
  setTheme(theme);
}
