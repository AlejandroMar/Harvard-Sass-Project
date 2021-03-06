$(document).ready(function () {
  // update links in a navigation list based on scroll position.
  $("body").scrollspy({ target: ".nav" });

  // change navbar background if windowTop > headerHeight
  const headerHeight = $(".header").height();
  const windowTop = $(window).scrollTop();
  addRemoveScrollClass(windowTop, headerHeight); 

  // change navbar background color on scroll
  $(document).scroll(function () {
    // get the height of the hero image in the header
    const scroll = $(window).scrollTop();
    addRemoveScrollClass(scroll, headerHeight) 
  });

  $(".navbar").click(function () {
    $(this).toggleClass("navbar-clicked");
  });

  const navbar = document.querySelectorAll(".nav li");
  navbar.forEach(function (elem) {
    elem.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        document.querySelector(".navbar-toggler").click();
      }
    });
  });

  //smooth scroll
  $(".nav a, .arrow").on("click", function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        700,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});


function addRemoveScrollClass(firstMeasure, secondMeasure) {
  if (firstMeasure > secondMeasure) {
    console.log('hellos momo')
    // see the classes in _custom-nav.scss
    $(".navigation").addClass("scrolled");
  } else {
    $(".navigation").removeClass("scrolled");
  }
}