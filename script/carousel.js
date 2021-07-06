$("#owl-header-7-2").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header7/Header-7-4.png'>",
    "<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header7/Header-7-5.png'>",
  ],
  dots: false,
  items: 1,
});

// Owl Carousel init & navigation
$("#owl-content-7-4").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    769: {
      items: 2.4,
      margin: 40,
    },
  },
});
