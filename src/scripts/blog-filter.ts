var chips = document.querySelectorAll('#filter-chips .filter-chip');
var items = document.querySelectorAll('.blog-item');
var noResults = document.getElementById('no-results');

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) {
      c.classList.remove('active', 'bg-(--color-primary)', 'text-white', 'border-(--color-primary)');
      c.classList.add('border-(--color-border)', 'text-(--color-text-secondary)');
    });
    chip.classList.add('active', 'bg-(--color-primary)', 'text-white', 'border-(--color-primary)');
    chip.classList.remove('border-(--color-border)', 'text-(--color-text-secondary)');
    var filter = (chip as HTMLElement).dataset.filter || 'all';
    var visible = 0;
    items.forEach(function (item) {
      var tags = ((item as HTMLElement).dataset.tags || '').toLowerCase();
      var match = filter === 'all' || tags.includes(filter.toLowerCase());
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
