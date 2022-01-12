(() => {
  const refs = {
    openMenulBtn: document.querySelector('.open-menu-button'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menu: document.querySelector('.js-menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();