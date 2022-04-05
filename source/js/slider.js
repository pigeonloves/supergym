'use strict';

$('.coaches__list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: false,
  slidesToScroll: 4,
  variableWidth: true,
  appendArrows: $('.coaches__arrows'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        adaptiveHeight: true,
        variableWidth: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true,
        variableWidth: true,
        slidesToScroll: 1
      }
    }
  ]
});

$('.reviews__list').slick({
  speed: 300,
  variableWidth: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        variableWidth: false,
      },
    }
  ]
});
