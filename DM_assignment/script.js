$(document).ready(function () {
  // Tab switching functionality
  $("#myTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  //burger menu click
  $(".sidemenu-toggler").on("click", function (e) {
    $(".side-Menu").toggle(100);
  });
  $(".close_wrapper ").on("click", function (e) {
    $(".side-Menu").hide(100);
  });

  //scroll header hide
  let lastScrollTop = 0; // Stores the previous scroll position
  const delta = 30; // Threshold to show/hide the header

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if ($(window).innerWidth() >= 1024) {
      // Check if scrolling down
      if (scrollTop > lastScrollTop + delta) {
        $("header.menu-header").fadeOut(); // Hide header when scrolling down
        $(".floating-header").addClass("scrolled-header");
      }
      // Check if scrolling up
      else if (scrollTop < lastScrollTop - delta) {
        $("header.menu-header").fadeIn(); // Show header when scrolling up
        $(".floating-header").removeClass("scrolled-header");
      }
    }
    lastScrollTop = scrollTop; // Update last scroll position
  });

  /* impact tile click code */
  var dimgsrc, dtextsrc;
  $(document).on("click", ".impact-content-tile", function () {
    $(".impact-content-tile").removeClass("tile-active");
    $(this).addClass("tile-active");
    /* image replace code */
    dimgsrc = $(this).children(".image-tile-content").attr("imgsrc");

    dtextsrc = $(this).children(".image-tile-content").attr("textsrc");

    $(".impact-image-wrapper").css("background-image", "url(" + dimgsrc + ")");
    $(".floater-text").html(dtextsrc);
  });
  $(".mobile-search-logo .search-icon").on("click", function (e) {
    $(".mobile-search-page").toggle();
  });
  $(".mobile-search-page .close_wrapper").on("click", function (e) {
    $(".mobile-search-page").hide(100);
  });
});
