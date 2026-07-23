import { initCounters } from "./counters";
import { initReveal } from "./reveal";
import { initSkillBars } from "./skill-bars";
import { initTyping } from "./typing";

function initAll() {
  initReveal();
  initCounters();
  initTyping();
  initSkillBars();
}

var pageContent = document.getElementById('page-content');
if (pageContent) {
  var timer: string | number | NodeJS.Timeout | undefined;
  var mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(initAll, 50);
  });
  mo.observe(pageContent, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
