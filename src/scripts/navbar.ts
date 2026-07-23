var toggle = document.getElementById('nav-toggle');
var drawer = document.getElementById('mobile-drawer');
if (toggle && drawer) {
  toggle.addEventListener('click', function () {
    var open = drawer.classList.toggle('mobile-drawer-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('mobile-drawer-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

var navLinks = document.querySelectorAll('.nav-link');
var currentPath = window.location.pathname;
navLinks.forEach(function (link) {
  var href = link.getAttribute('href');
    if (href === currentPath || (href && href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('text-(--color-primary)', 'bg-(--color-primary)/5');
    link.classList.remove('text-(--color-text-secondary)');
  }
});

var appbar = document.querySelector('nav');
if (appbar) {
  document.addEventListener('scroll', function () {
    appbar.classList.toggle('shadow-sm', window.scrollY > 10);
  }, { passive: true });
}
