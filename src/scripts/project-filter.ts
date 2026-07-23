function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
    }, ms);
  } as T;
}

const searchInput = document.getElementById('project-search') as HTMLInputElement | null;
const chips = document.querySelectorAll('.filter-chip');
const items = document.querySelectorAll('.project-item');
const noResults = document.getElementById('no-results');
let activeFilter = 'all';

function filterProjects() {
  const query = (searchInput?.value || '').toLowerCase();
  let visible = 0;

  items.forEach(function (item) {
    const techs = ((item as HTMLElement).dataset.technologies || '').toLowerCase();
    const tags = ((item as HTMLElement).dataset.tags || '').toLowerCase();
    const all = techs + ' ' + tags;
    const matchesFilter =
      activeFilter === 'all' ||
      techs.includes(activeFilter.toLowerCase()) ||
      tags.includes(activeFilter.toLowerCase());
    const matchesSearch = !query || all.includes(query);
    const show = matchesFilter && matchesSearch;
    if (show) {
      (item as HTMLElement).classList.remove('opacity-0', 'pointer-events-none');
    } else {
      (item as HTMLElement).classList.add('opacity-0', 'pointer-events-none');
    }
    if (show) visible++;
  });

  if (noResults) noResults.classList.toggle('hidden', visible > 0);
}

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) {
      c.classList.remove('active', 'bg-(--color-primary)', 'text-white', 'border-primary');
      c.classList.add('border-border', 'text-text-secondary');
    });
    chip.classList.add('active', 'bg-(--color-primary)', 'text-white', 'border-primary');
    chip.classList.remove('border-border', 'text-text-secondary');
    activeFilter = (chip as HTMLElement).dataset.filter || 'all';
    filterProjects();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', debounce(filterProjects, 200));
}

const allChip = document.querySelector('.filter-chip[data-filter="all"]');
if (allChip) (allChip as HTMLElement).click();

export {};
