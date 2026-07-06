document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-enter');

  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && link.target !== '_blank') {
      link.addEventListener('click', event => {
        event.preventDefault();
        const destination = link.href;
        document.body.classList.remove('page-enter');
        document.body.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = destination;
        }, 250);
      });
    }
  });
});