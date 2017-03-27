/* Свернуть/развернуть список мест установки терминалов */

(function() {

  $(".terminals__location-button").click(function() {
    if ($(this).hasClass("terminals__location-button--open")) {
      $(this).addClass("terminals__location-button--close");
      $(this).removeClass("terminals__location-button--open");
      $(this).html("Развернуть список");
      $(".terminals__location-list").slideUp();
    } else {
      $(this).addClass("terminals__location-button--open");
      $(this).removeClass("terminals__location-button--close");
      $(this).html("Свернуть список");
      $(".terminals__location-list").slideDown();
    }
  });

})();

/* Активация карты с местами установки терминалов при клике по ней */

$(".terminals__map-mask").click(function() {
  $(this).hide();
});

/* Плавный скролл страницы при нажатии на пункты меню */

$(".header__menu-link--about").click(function() {
  $(".header__menu").toggleClass("header__menu--open");
  $(".header__contacts").toggleClass("header__contacts--open");
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
  return false;
});

$(".header__menu-link--partnership").click(function() {
  $(".header__menu").toggleClass("header__menu--open");
  $(".header__contacts").toggleClass("header__contacts--open");

  if ($(".container").css("width") <= "665px") {
    $("html, body").animate({
      scrollTop: $("#partnership").offset().top
    }, 1000);
    return false;
  } else {
    $("html, body").animate({
      scrollTop: $("#about__comment").offset().top
    }, 1000);
    return false;
  }
  
});

$(".header__menu-link--how-it-works").click(function() {
  $(".header__menu").toggleClass("header__menu--open");
  $(".header__contacts").toggleClass("header__contacts--open");
  $("html, body").animate({
    scrollTop: $("#how-it-works").offset().top
  }, 1000);
  return false;
});

$(".header__menu-link--terminals").click(function() {
  $(".header__menu").toggleClass("header__menu--open");
  $(".header__contacts").toggleClass("header__contacts--open");
  $("html, body").animate({
    scrollTop: $("#terminals").offset().top
  }, 1000);
  return false;
});

/*$(".header__menu-link--offer").click(function() {
  $("html, body").animate({
    scrollTop: $("#footer").offset().top
  }, 1000);
  return false;
});*/

/* Плавный скролл страницы при нажатии кнопки "Наверх" */

$(".upstairs-block__button").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

/* Выпадающее основное меню для мобильной версии */

$(".header__menu-hamburger").click(function() {
  $(".header__menu").toggleClass("header__menu--open");
  $(".header__contacts").toggleClass("header__contacts--open");
});