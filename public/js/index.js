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

    const navbar = document.querySelectorAll('.nav li');
    navbar.forEach(function(elem) {
        elem.addEventListener('click', function(){ 
            if(window.innerWidth < 992){
                document.querySelector('.navbar-toggler').click()
            }
            
        })
    })
});
