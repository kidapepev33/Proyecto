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

  function createTransition() {
    var wrap = document.createElement('div');
    wrap.className = 'page-transition';

    var bar = document.createElement('div');
    bar.className = 'bar';

    var logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'))
      ? 'assets/img/logo-fertinyc.png'
      : '../assets/img/logo-fertinyc.png';
    logo.alt = 'Fertinyc';

    wrap.appendChild(bar);
    wrap.appendChild(logo);
    document.body.appendChild(wrap);
    return wrap;
  }

  function runTransition(onEnd) {
    var overlay = createTransition();
    requestAnimationFrame(function () {
      overlay.classList.add('is-running');
    });

    setTimeout(function () {
      if (typeof onEnd === 'function') onEnd();
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 1000);
  }

  window.addEventListener('DOMContentLoaded', function () {
    runTransition();

    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var link = target.closest('a');
      if (!isInternalPageLink(link)) return;

      var href = link.getAttribute('href');
      event.preventDefault();
      runTransition(function () {
        window.location.href = href;
      });
    });
  });
})();
