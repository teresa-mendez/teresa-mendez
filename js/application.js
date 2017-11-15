// Scrollup
$.scrollUp({
  scrollSpeed: 300,
  scrollText: 'Scroll to top', // Text for element, can contain HTML
});

// Change nav style after scrolling
$(window).on("scroll touchmove", function () {
  var distance = $(document).scrollTop();
  var $nav = $('nav');

  if (distance > 0){
    $nav.addClass('dark');
  }
  else{
    $nav.removeClass('dark');
  }
});

// Smooth scroll for anchor links
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 57
      }, 300);
      return false;
    }
  }
});

// Hightlight anchor links on scroll
var navChildren = $("nav li").children();
var aArray = [];
for (var i = 0; i < navChildren.length; i++) {
  var aChild = navChildren[i];
  var ahref = $(aChild).attr('href');
  aArray.push(ahref);
}
$(window).scroll(function() {
  var windowPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docHeight = $(document).height();

  for (var i = 0; i < aArray.length; i++) {
    var theID = aArray[i];
    var secPosition = $(theID).offset().top;
    secPosition = secPosition - 85;
    var divHeight = $(theID).height();
    
    divHeight = divHeight - 50;
    if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
      $("a[href='" + theID + "']").addClass("active");
    } else {
      $("a[href='" + theID + "']").removeClass("active");
    }
  }
});

// LightGallery
$("#gallery").lightGallery(); 

// Effect for the box hero
var options = {
  maxTilt:        20,
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          300,    // Speed of the enter/exit transition.
  transition:     true,   // Set a transition on enter/exit.
  disableAxis:    null,   // What axis should be disabled. Can be X or Y.
  reset:          true,   // If the tilt effect has to be reset on exit.
  glare:          true,  // Enables glare effect
  maxGlare:       0.3       // From 0 - 1.
};

$("#tilt").tilt(options);