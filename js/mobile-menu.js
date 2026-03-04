$(document).ready(function () {
  // ── Hamburger toggle ──
  $(".mobile-btn").on("click", function () {
    const isOpen = $(this).hasClass("open");
    $(this).toggleClass("open");
    $(this).attr("aria-expanded", !isOpen);
    $("nav.mobile").slideToggle(300);
    $("nav.mobile").attr("aria-hidden", isOpen);
  });

  // ── Zamknij menu przy resize / scroll ──
  $(window).on("resize", function () {
    if ($(window).width() > 900) {
      $(".mobile-btn").removeClass("open").attr("aria-expanded", false);
      $("nav.mobile").slideUp(200).attr("aria-hidden", true);
    }
  });

  $(document).on("scroll", function () {
    $(".mobile-btn").removeClass("open").attr("aria-expanded", false);
    $("nav.mobile").slideUp(200).attr("aria-hidden", true);
  });

  $("nav.mobile ul li a").on("click", function () {
    $(".mobile-btn").removeClass("open").attr("aria-expanded", false);
    $("nav.mobile").slideUp(300).attr("aria-hidden", true);
  });

  // ── Shrink navbar po scrollu ──
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 40) {
      $("#main-header").addClass("scrolled");
    } else {
      $("#main-header").removeClass("scrolled");
    }
  });
});
