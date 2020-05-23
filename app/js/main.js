$(function(){


    $(".product-slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4



    });


    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 0,
        to: 600,
        type: 'double',
        prefix: "$",
    });

    var mixer = mixitup('.products__inner-box');

});