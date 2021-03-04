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
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 70
            }
        }
    });
});