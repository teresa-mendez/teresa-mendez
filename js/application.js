$(function () {
    $.scrollUp({
      scrollText: ''
    });
});

$(window).on("scroll touchmove", function () {
  var distance = $(document).scrollTop();
  var $header = $('header');

  if (distance > 0){
    $header.addClass('dark');
  }
  else{
    $header.removeClass('dark');
  }
});
