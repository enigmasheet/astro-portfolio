const chips = document.querySelectorAll('#filter-chips .filter-chip');
const items = document.querySelectorAll('.blog-item');
const noResults = document.getElementById('no-results');

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) {
      c.classList.remove('active', 'bg-(--color-primary)', 'text-white', 'border-primary');
      c.classList.add('border-border', 'text-text-secondary');
    });
    chip.classList.add('active', 'bg-(--color-primary)', 'text-white', 'border-primary');
    chip.classList.remove('border-border', 'text-text-secondary');
    const filter = (chip as HTMLElement).dataset.filter || 'all';
    let visible = 0;
    items.forEach(function (item) {
      const tags = ((item as HTMLElement).dataset.tags || '').toLowerCase();
      const match = filter === 'all' || tags.includes(filter.toLowerCase());
      if (match) {
        (item as HTMLElement).classList.remove('opacity-0', 'pointer-events-none');
      } else {
        (item as HTMLElement).classList.add('opacity-0', 'pointer-events-none');
      }
      if (match) visible++;
    });
    if (noResults) noResults.classList.toggle('hidden', visible > 0);
  });
});

export {};
