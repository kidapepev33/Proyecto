(function () {
  function updateHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader);
  window.addEventListener("load", updateHeader);

  if (sessionStorage.getItem('page-transition-enter') !== 'true') return;

  document.documentElement.classList.add('has-page-transition');

  function getLogoPath() {
    return (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'))
      ? 'assets/img/logo-fertinyc.png'
      : '../assets/img/logo-fertinyc.png';
  }

  function addPreloadedTransition() {
    if (!document.body) {
      requestAnimationFrame(addPreloadedTransition);
      return;
    }

    if (document.querySelector('.page-transition.preloaded')) return;

    var wrap = document.createElement('div');
    wrap.className = 'page-transition is-entering preloaded';

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
  }

  addPreloadedTransition();
})();