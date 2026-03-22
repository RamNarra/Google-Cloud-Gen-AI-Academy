(function () {
  var links = [
    { href: '/home.html', label: 'Home' },
    { href: '/notes/intro.html', label: 'Intro' },
    { href: '/notes/track1.html', label: 'Track 1' },
    { href: '/notes/track2.html', label: 'Track 2' }
  ];

  var panel = document.createElement('aside');
  panel.className = 'notes-mini-nav';

  var title = document.createElement('p');
  title.className = 'notes-mini-nav-title';
  title.textContent = 'Quick Links';
  panel.appendChild(title);

  var list = document.createElement('nav');
  list.className = 'notes-mini-nav-links';

  var path = window.location.pathname.toLowerCase();

  links.forEach(function (item) {
    var a = document.createElement('a');
    a.className = 'notes-mini-nav-link';
    a.href = item.href;
    a.textContent = item.label;

    if (path === item.href.toLowerCase()) {
      a.classList.add('is-active');
      a.setAttribute('aria-current', 'page');
    }

    list.appendChild(a);
  });

  panel.appendChild(list);

  if (document.body) {
    document.body.appendChild(panel);
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(panel);
    });
  }
})();
