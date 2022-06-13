$(".study .tabs button").click(function () {
  $(".study .tabs button i").removeClass("tab-active");
  $(this).find("i").addClass("tab-active");
});

$(document).ready(function () {
  $(".center").slick({
    infinite: true,
    centerMode: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
