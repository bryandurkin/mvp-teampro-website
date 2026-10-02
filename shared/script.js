const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const dropdowns = [...document.querySelectorAll('.nav-item.has-dropdown')];

function closeDropdowns(except = null) {
  dropdowns.forEach(item => {
    if (item === except) return;
    item.classList.remove('open');
    item.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) closeDropdowns();
  });
}

dropdowns.forEach(item => {
  const button = item.querySelector('.dropdown-toggle');
  button?.addEventListener('click', event => {
    if (window.innerWidth > 1060) return;
    event.preventDefault();
    const willOpen = !item.classList.contains('open');
    closeDropdowns(item);
    item.classList.toggle('open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
  });
});

document.querySelectorAll('.primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    closeDropdowns();
  });
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  closeDropdowns();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1060) {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    closeDropdowns();
  }
});