$(document).ready(function() {
  // change navbar background color on scroll
  $(document).scroll(function() {
    // get the height of the hero image in the header
    const headerHeight = $(".header").height();
    const scroll = $(window).scrollTop();
    if (scroll > headerHeight) {
      // see the classes in _custom-nav.scss
      $(".navigation").addClass("scrolled");
    } else {
      $(".navigation").removeClass("scrolled");
    }
  });
  $(".navbar").click(function() {
    $(this).toggleClass("navbar-clicked");
  });
});
