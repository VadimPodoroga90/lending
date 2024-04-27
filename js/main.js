$(function () {
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });

    $('.menu, .bike__column').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 1500);
    });

    $('.bike-slider, .slider__items').click(function (event) {
        $('.bike-slider, .slider__items').slick('slickNext');
    });
});


