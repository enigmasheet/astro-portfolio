function initProjectFilters() {
  const controls = document.querySelector<HTMLElement>('[data-project-filters]');
  if (!controls || controls.dataset.initialized === 'true') return;

  const searchInput = controls.querySelector<HTMLInputElement>('#project-search');
  const technologySelect = controls.querySelector<HTMLSelectElement>('#project-technology');
  const clearButton = controls.querySelector<HTMLButtonElement>('#clear-project-filters');
  const resultCount = controls.querySelector<HTMLElement>('#project-results');
  const items = Array.from(document.querySelectorAll<HTMLElement>('.project-item'));
  const noResults = document.getElementById('no-results');

  if (!searchInput || !technologySelect || !clearButton || !resultCount || !noResults) return;
  const search = searchInput;
  const technology = technologySelect;
  const clear = clearButton;
  const results = resultCount;
  const emptyState = noResults;
  controls.dataset.initialized = 'true';

  function filterProjects() {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedTechnology = technology.value;
    let visible = 0;

    items.forEach((item) => {
      const searchableContent = item.dataset.search || '';
      const technologies = (item.dataset.technologies || '').split('|');
      const matchesSearch = !query || searchableContent.includes(query);
      const matchesTechnology =
        selectedTechnology === 'all' || technologies.includes(selectedTechnology);
      const matches = matchesSearch && matchesTechnology;

      item.hidden = !matches;
      if (matches) visible += 1;
    });

    emptyState.classList.toggle('hidden', visible > 0);
    results.textContent =
      visible === items.length
        ? `${visible} ${visible === 1 ? 'project' : 'projects'}`
        : `Showing ${visible} of ${items.length} projects`;
    clear.classList.toggle('hidden', !query && selectedTechnology === 'all');
  }

  search.addEventListener('input', filterProjects);
  technology.addEventListener('change', filterProjects);
  clear.addEventListener('click', () => {
    search.value = '';
    technology.value = 'all';
    filterProjects();
    search.focus();
  });

  filterProjects();
}

document.addEventListener('astro:page-load', initProjectFilters);
initProjectFilters();

export {};
