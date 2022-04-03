function toggleNav() {
  const navMenu = document.getElementById('primary-navigation');
  const navBtn = document.getElementById('nav-btn');

  if (navMenu.getAttribute('data-visible') === 'false') {
    navMenu.setAttribute('data-visible', 'true');
    navBtn.setAttribute('aria-expanded', 'true');
    navBtn.style.backgroundImage = "url('./assets/shared/icon-close.svg')";
  } else {
    navMenu.setAttribute('data-visible', 'false');
    navBtn.setAttribute('aria-expanded', 'false');
    navBtn.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')";
  }
}
