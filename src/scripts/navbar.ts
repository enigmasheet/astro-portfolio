var toggle = document.getElementById('nav-toggle');
var drawer = document.getElementById('mobile-drawer');
var backdrop = document.getElementById('drawer-backdrop');
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

var navLinks = document.querySelectorAll('.nav-link');
var currentPath = window.location.pathname;
navLinks.forEach(function (link) {
  var href = link.getAttribute('href');
    if (href === currentPath || (href && href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('text-(--color-primary)', 'bg-(--color-primary)/5');
    link.classList.remove('text-(--color-text-secondary)');
    link.setAttribute('aria-current', 'page');
  } else {
    link.removeAttribute('aria-current');
  }
});

var appbar = document.querySelector('nav');
if (appbar) {
  const appbarEl = appbar;
  document.addEventListener('scroll', function () {
    appbarEl.classList.toggle('shadow-sm', window.scrollY > 10);
  }, { passive: true });
}
