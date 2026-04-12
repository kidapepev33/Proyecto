(() => {
  const titleEl = document.querySelector('.pages-title h1');
  if (titleEl) {
    titleEl.textContent = titleEl.textContent.replace('Category Archives: ', '');
  }

  setTimeout(() => {
    const homeLinks = document.querySelectorAll(".page-nav a[href='https://www.fertinyc.com/']");
    if (homeLinks.length) homeLinks[0].textContent = 'Inicio';
  }, 1000);

  const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
    if (!lazyloadBackgrounds.length || typeof IntersectionObserver === 'undefined') return;

    const lazyloadBackgroundObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('e-lazyloaded');
            lazyloadBackgroundObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px 0px 200px 0px' }
    );

    lazyloadBackgrounds.forEach((el) => lazyloadBackgroundObserver.observe(el));
  };

  document.addEventListener('DOMContentLoaded', lazyloadRunObserver);
  document.addEventListener('elementor/lazyload/observe', lazyloadRunObserver);
})();
