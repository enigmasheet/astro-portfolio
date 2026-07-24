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

document.addEventListener('astro:page-load', initAll);
