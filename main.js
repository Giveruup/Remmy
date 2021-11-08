$(function() {

  $("#burger__btn").on("click", function(event) {
      event.preventDefault();
      $('#nav').toggleClass('active');
      $('#burger__btn').toggleClass('active');
  });

});
