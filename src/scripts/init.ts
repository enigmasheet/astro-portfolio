import { initCounters } from './counters';
import { initReveal } from './reveal';
import { initSkillBars } from './skill-bars';
import { initTyping } from './typing';
import { initQuote } from './quote';

function initAll() {
  initReveal();
  initCounters();
  initTyping();
  initSkillBars();
  initQuote();
}

document.addEventListener('astro:page-load', initAll);
