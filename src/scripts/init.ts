import { initCounters } from './counters';
import { initReveal } from './reveal';
import { initSkillBars } from './skill-bars';
import { initTyping } from './typing';

function initAll() {
  initReveal();
  initCounters();
  initTyping();
  initSkillBars();
}

const pageContent = document.getElementById('page-content');
if (pageContent) {
  if ((pageContent as any).__mo) (pageContent as any).__mo.disconnect();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(initAll, 50);
  });
  mo.observe(pageContent, { childList: true, subtree: true });
  (pageContent as any).__mo = mo;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
