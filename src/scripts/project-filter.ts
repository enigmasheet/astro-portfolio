var searchInput = document.getElementById('project-search') as HTMLInputElement | null;
var chips = document.querySelectorAll('.filter-chip');
var items = document.querySelectorAll('.project-item');
var noResults = document.getElementById('no-results');
var activeFilter = 'all';

function filterProjects() {
  var query = (searchInput?.value || '').toLowerCase();
  var visible = 0;

  items.forEach(function (item) {
    var techs = ((item as HTMLElement).dataset.technologies || '').toLowerCase();
    var tags = ((item as HTMLElement).dataset.tags || '').toLowerCase();
    var all = techs + ' ' + tags;
    var matchesFilter = activeFilter === 'all' || techs.includes(activeFilter.toLowerCase()) || tags.includes(activeFilter.toLowerCase());
    var matchesSearch = !query || all.includes(query);
    var show = matchesFilter && matchesSearch;
    (item as HTMLElement).style.display = show ? '' : 'none';
    if (show) visible++;
  });

  if (noResults) noResults.classList.toggle('hidden', visible > 0);
}

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) {
      c.classList.remove('active', 'bg-(--color-primary)', 'text-white', 'border-(--color-primary)');
      c.classList.add('border-(--color-border)', 'text-(--color-text-secondary)');
    });
    chip.classList.add('active', 'bg-(--color-primary)', 'text-white', 'border-(--color-primary)');
    chip.classList.remove('border-(--color-border)', 'text-(--color-text-secondary)');
    activeFilter = (chip as HTMLElement).dataset.filter || 'all';
    filterProjects();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', filterProjects);
}

var allChip = document.querySelector('.filter-chip[data-filter="all"]');
if (allChip) (allChip as HTMLElement).click();
