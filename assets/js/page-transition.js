(function () {
  function isInternalPageLink(a) {
    if (!a || !a.getAttribute) return false;
    var href = a.getAttribute('href');
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    if (a.target && a.target !== '_self') return false;

    try {
      var url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  function getLogoPath() {
    return (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'))
      ? 'assets/img/logo-fertinyc.png'
      : '../assets/img/logo-fertinyc.png';
  }

  function removeAllTransitions() {
    document.querySelectorAll('.page-transition').forEach(function (el) {
      el.remove();
    });
  }

  function createTransition() {
    var wrap = document.createElement('div');
    wrap.className = 'page-transition';

    var white = document.createElement('div');
    white.className = 'transition-white';

    var bar = document.createElement('div');
    bar.className = 'bar';

    var logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = getLogoPath();
    logo.alt = 'Fertinyc';

    wrap.appendChild(white);
    wrap.appendChild(bar);
    wrap.appendChild(logo);
    document.body.appendChild(wrap);

    return wrap;
  }

  function finishEntry(overlay) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('is-active');
      });
    });

    setTimeout(function () {
      removeAllTransitions();
      document.documentElement.classList.remove('has-page-transition');
      sessionStorage.removeItem('page-transition-enter');
    }, 1400);
  }

  function showEntryTransition() {
    var tries = 0;

    function findOrCreate() {
      var overlay = document.querySelector('.page-transition.preloaded');

      if (overlay) {
        finishEntry(overlay);
        return;
      }

      tries++;

      // esperar un poco por si head-transition todavía no lo metió
      if (tries < 20) {
        setTimeout(findOrCreate, 25);
        return;
      }

      // fallback: si nunca apareció, crear uno nosotros
      overlay = createTransition();
      overlay.classList.add('is-entering');
      finishEntry(overlay);
    }

    findOrCreate();
  }

  function showExitTransition(href) {
    removeAllTransitions();

    var overlay = createTransition();
    overlay.classList.add('is-leaving');

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('is-active');
      });
    });

    setTimeout(function () {
      sessionStorage.setItem('page-transition-enter', 'true');
      window.location.href = href;
    }, 700);
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem('page-transition-enter') === 'true') {
      showEntryTransition();
    } else {
      removeAllTransitions();
      document.documentElement.classList.remove('has-page-transition');
    }

    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;

      var link = target.closest('a');
      if (!isInternalPageLink(link)) return;

      var href = link.getAttribute('href');
      if (!href) return;

      var targetUrl;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch (e) {
        return;
      }

      if (targetUrl.href === window.location.href) return;

      event.preventDefault();
      showExitTransition(href);
    });
  });

  window.addEventListener('pageshow', function () {
    if (sessionStorage.getItem('page-transition-enter') !== 'true') {
      removeAllTransitions();
      document.documentElement.classList.remove('has-page-transition');
    }
  });
})();