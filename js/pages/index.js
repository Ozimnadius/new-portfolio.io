//index.js

window.addEventListener('load', function () {
    const techsSwiper = new Swiper('.techs__swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
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
                slidesPerView: 4,
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


    let toTop = document.querySelector('.top');
    window.addEventListener('scroll', function (e){


       if (document.documentElement.scrollTop>window.innerHeight/2){
           toTop.classList.add('active');
       } else{
           toTop.classList.remove('active');
       }
    });

    toTop.addEventListener('click',function (e){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    let mmenuBtn = document.querySelector('.header__mmenu'),
        mmenu = document.querySelector('.header__nav');

    mmenuBtn.addEventListener('click', function (e){
        mmenu.classList.add('open');
    });

    mmenu.addEventListener('click', function (e){
        let target = e.target;
        if (!target.classList.contains('nav__item')){
            this.classList.remove('open');
        }
    });


});