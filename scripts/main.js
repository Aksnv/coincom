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