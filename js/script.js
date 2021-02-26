$(function () {

   $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/slider/left.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/slider/right.svg" alt=""></button>',
      autoplay: true,

   });

   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active')
   });


});


