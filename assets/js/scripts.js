function active_course() {
    if ($(".active_course").length) {
      $(".active_course").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: true,
        autoplay: 5000,
        smartSpeed: 3000,
        dots: true,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  active_course(); 


  $(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 600) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      center: true,
      nav: true,
      dots: true,
      items: 3,
      navText: ['<span></span>', '<span></span>'],
      autoplay: false,
    })
  });