$(function () {
  $('.owl-one').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    margin: 10,
  })
});

$(function () {
  $('.owl-two').owlCarousel({
    items: 5,
    loop: true,
    animateOut: 'fadeOut',
    margin: 10,
    dots:false,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  })
});
