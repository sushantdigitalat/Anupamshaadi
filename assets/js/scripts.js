function active_course() {
  if ($(".active_course").length) {
    $(".active_course").owlCarousel({
      loop: true,
      margin: 20,
      items: 3,
      nav: true,
      autoplay: 5000,
      smartSpeed: 2000,
      dots: true,
      responsiveClass: true,
      thumbs: true,
      thumbsPrerendered: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          items: 2,
          margin: 30,
        },
        1200: {
          items: 3,
          margin: 30,
        },
      },
    });
  }
}
active_course();


function profiles() {
  if ($(".profiles").length) {
    $(".profiles").owlCarousel({
      loop: true,
      margin: 20,
      items: 4,
      nav: true,
      autoplay: 5000,
      smartSpeed: 2000,
      dots: true,
      responsiveClass: true,
      thumbs: true,
      thumbsPrerendered: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          items: 3,
          margin: 30,
        },
        1200: {
          items: 4,
          margin: 30,
        },
      },
    });
  }
}
profiles();

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 600) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    // center: true,
    nav: true,
    dots: true,
    margin: 15,
    items: 3,
    navText: ["<span></span>", "<span></span>"],
    autoplay: 1500,
    smartSpeed: 700,
    dots: true,
    responsiveClass: true,
    thumbs: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
        margin: 30,
      },
      1200: {
        items: 3,
        margin: 30,
      },
    },
  });
});



$(".second a").click(function () {
  $("#steps-uid-0-p-0").removeClass("current");
  $("#steps-uid-0-p-1").addClass("current");
  $(".first").removeClass("current");
  $(".second").addClass("current");
});

$(".first a").click(function () {
  $("#steps-uid-0-p-1").removeClass("current");
  $("#steps-uid-0-p-0").addClass("current");
  $(".second").removeClass("current");
  $(".first").addClass("current");
});

$("#accordionPanelsStayOpenExample .accordion-button").click(function () {
  $(this).toggleClass("expanded");
  $(this)
    .closest(".accordion-item")
    .children(".accordion-collapse")
    .toggleClass("show");
});

//-----JS for Price Range slider-----

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
