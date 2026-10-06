(function () {
  var root = document.documentElement;

  // Theme toggle: an explicit choice is stored; otherwise the OS preference applies.
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // BibTeX show/hide.
  document.querySelectorAll('.bib-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = document.getElementById(btn.getAttribute('aria-controls'));
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      box.hidden = open;
    });
  });

  // BibTeX copy.
  document.querySelectorAll('.bib-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.parentElement.querySelector('pre').textContent;
      var done = function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done, function () {});
      }
    });
  });
})();
