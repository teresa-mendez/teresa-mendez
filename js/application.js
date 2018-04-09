// Functions

// Change nav style after scrolling
function updateNav() {
  var distance = $(document).scrollTop();
  var $nav = $('nav');

  if (distance > 0) {
    $nav.addClass('dark');
  }
  else{
    $nav.removeClass('dark');
  }
}

// Smooth scroll for anchor links
function navSmoothScroll(){
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
}

// Hightlight anchor links on scroll
function initNavLink() {
  var navItems = $("nav li").children();
  var hrefs = [];

  for (var i = 0; i < navItems.length; i++) {
    var navItem = navItems[i];
    var href = $(navItem).attr('href');
    hrefs.push(href);
  }

  function updateNavLink() {
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();

    for (var i = 0; i < hrefs.length; i++) {
      var theID = hrefs[i];
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
  }

  $(window).scroll(updateNavLink);
}


// Events
$(window).on("scroll touchmove", updateNav);
$('a[href*="#"]:not([href="#"])').click(navSmoothScroll);

// Initialization
initNavLink();

$("#gallery").lightGallery();

var tiltOptions = {
  maxTilt:        20,
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          300,    // Speed of the enter/exit transition.
  transition:     true,   // Set a transition on enter/exit.
  disableAxis:    null,   // What axis should be disabled. Can be X or Y.
  reset:          true,   // If the tilt effect has to be reset on exit.
  glare:          true,  // Enables glare effect
  maxGlare:       0.3   // From 0 - 1.
};

$("#tilt").tilt(tiltOptions);

var scrollUpOptions = {
  scrollName: 'scrollUp',      // Element ID
  scrollDistance: 300,         // Distance from top/bottom before showing element (px)
  scrollFrom: 'top',           // 'top' or 'bottom'
  scrollSpeed: 300,            // Speed back to top (ms)
  easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
  animation: 'fade',           // Fade, slide, none
  animationSpeed: 200,         // Animation speed (ms)
  scrollText: '<i class="fa fa-arrow-up"/>', // Text for element, can contain HTML
  scrollTitle: false,          // Set a custom <a> title if required.
  scrollImg: false,            // Set true to use image
  activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  zIndex: 2147483647           // Z-Index for the overlay
}

$.scrollUp(scrollUpOptions);
