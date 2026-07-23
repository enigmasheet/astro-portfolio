var toggle = document.getElementById('nav-toggle');
var drawer = document.getElementById('mobile-drawer');
var backdrop = document.getElementById('drawer-backdrop');
if (toggle && drawer && backdrop) {
  function closeDrawer() {
    drawer.classList.remove('mobile-drawer-open');
    backdrop.classList.remove('mobile-drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openDrawer() {
    drawer.classList.add('mobile-drawer-open');
    backdrop.classList.add('mobile-drawer-open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  toggle.addEventListener('click', function () {
    if (drawer.classList.contains('mobile-drawer-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
  backdrop.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(function (a) {
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
  document.addEventListener('scroll', function () {
    appbar.classList.toggle('shadow-sm', window.scrollY > 10);
  }, { passive: true });
}
