$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
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
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // responsive scroll for emergence link in about paragraph
  $("#to-emergence").on("click", function (event) {
    if (this.hash !== "") {
      // scroll down page
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );

      // change slide
      $("#carousel-example-generic").carousel(2);
    }
  });

  // responsive scroll for moment link in about paragraph
  $("#to-moment").on("click", function (event) {
    if (this.hash !== "") {
      // scroll down page
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );

      // change slide
      $("#carousel-example-generic").carousel(0);
    }
  });

  // responsive scroll for grid link in about paragraph
  $("#to-grid").on("click", function (event) {
    if (this.hash !== "") {
      // scroll down page
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );

      // change slide
      $("#carousel-example-generic").carousel(1);
    }
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  // back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("#back-to-top").tooltip("hide");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });

  $("#back-to-top").tooltip("show");

  // back to top on bottom logo
  $("#bottom-logo").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });

  // button titles
  $(".hb").hover(function () {
    $(this).tooltip("show");
  });

  $(window).scroll(function () {
    jQuery(".skillbar").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 1000) {
        jQuery(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            5000
          );
      }
    });
  });

  (function ($) {
    //Function to animate slider captions
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";

      elems.each(function () {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
        });
      });
    }

    //Variables on page load
    var $myCarousel = $("#carousel-example-generic"),
      $firstAnimatingElems = $myCarousel
        .find(".item:first")
        .find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel("pause");

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function (e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });
  })(jQuery);
});
