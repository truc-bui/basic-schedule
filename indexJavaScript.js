var mainNavigationId = 'main-navigation';
var showNavigationClass = 'navigation-bar__item-list--show';

function onMenuBurgerClick() {
  var element = document.getElementById(mainNavigationId);
  element.classList.toggle(showNavigationClass);
}