//index.js

window.addEventListener('load', function () {
    const techsSwiper = new Swiper('.techs__swiper', {
        slidesPerView: 5,
        spaceBetween: 70,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.techs__next',
            prevEl: '.techs__prev',
        },
        autoplay: {
            delay: 7000,
        },
    });

});