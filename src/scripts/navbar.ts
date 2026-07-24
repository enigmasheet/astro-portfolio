const toggle = document.getElementById('nav-toggle');
const drawer = document.getElementById('mobile-drawer');
const backdrop = document.getElementById('drawer-backdrop');
if (toggle && drawer && backdrop) {
  const drawerEl = drawer;
  const backdropEl = backdrop;
  const toggleEl = toggle;
  function closeDrawer() {
    drawerEl.classList.remove('mobile-drawer-open');
    backdropEl.classList.remove('mobile-drawer-open');
    toggleEl.setAttribute('aria-expanded', 'false');
  }
  function openDrawer() {
    drawerEl.classList.add('mobile-drawer-open');
    backdropEl.classList.add('mobile-drawer-open');
    toggleEl.setAttribute('aria-expanded', 'true');
  }
  if (!document.documentElement.dataset.navReady) {
    document.documentElement.dataset.navReady = '';
    toggleEl.addEventListener('click', function () {
      if (drawerEl.classList.contains('mobile-drawer-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
    backdropEl.addEventListener('click', closeDrawer);
    drawerEl.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }
}

const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;
navLinks.forEach(function (link) {
  const href = link.getAttribute('href');
  if (href === currentPath || (href && href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('text-primary', 'bg-(--color-primary)/5');
    link.classList.remove('text-text-secondary');
    link.setAttribute('aria-current', 'page');
  } else {
    link.removeAttribute('aria-current');
  }
});

if (!document.documentElement.dataset.scrollNav) {
  document.documentElement.dataset.scrollNav = '';
  const appbar = document.querySelector('nav');
  if (appbar) {
    document.addEventListener(
      'scroll',
      function () {
        appbar.classList.toggle('shadow-sm', window.scrollY > 10);
      },
      { passive: true },
    );
  }
}
