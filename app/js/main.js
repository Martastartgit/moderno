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
        max: 1000,
        from: 0,
        to: 600,
        type: 'double',
        prefix: "$",
    });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active')

    });

    $('.icon-th-large').on('click', function (){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active')
        
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
        
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();

    });
    
    $('.wrapper .tab, .settings__tabs.tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.wrapper, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper .tabs, .settings__tabs.tab').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

     $('input[type="file"], select').styler();

    var mixer = mixitup('.products__inner-box');

});