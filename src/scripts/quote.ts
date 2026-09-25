export function initQuote() {
  const el = document.getElementById('rotating-quote');
  if (!el) return;

  const raw = el.getAttribute('data-quotes');
  if (!raw) return;

  try {
    const quotes: string[] = JSON.parse(raw);
    if (quotes.length === 0) return;

    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    el.textContent = `\u201C${pick}\u201D`;
  } catch {
    /* ignore parse errors */
  }
}
