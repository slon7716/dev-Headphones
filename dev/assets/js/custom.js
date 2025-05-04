const carouselcollection = new Swiper('.swiper', {
  speed: 700,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});