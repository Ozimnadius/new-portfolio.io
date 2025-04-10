// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/\s/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    },
    imagesResize: function (src) {
        let img = document.querySelectorAll('img');

        for (let i = 0; i < img.length; i++) {
            img[i].src = src;
        }
    }
};

//nav.js
window.addEventListener('load', function () {
    let nav = document.querySelector('.nav');

    nav.addEventListener('click', function (e) {
        e.preventDefault();

        let target = e.target;

        if (target.classList.contains('nav__item')) {
            window.scrollTo({
                top: document.querySelector(target.hash).offsetTop,
                behavior: 'smooth'
            });
        }

    });

});

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

//services.js
window.addEventListener('load', function () {

    ////Naming elements
    //sky
    let starSmall = document.getElementsByClassName("starSmall");
    let starPointy = document.getElementsByClassName("starPointy");
    let starCross = document.getElementsByClassName("starCross");

    //forest
    let grass = document.getElementsByClassName("grass");
    let swingingTree = document.getElementsByClassName("swingingTree");
    let swingingFurTree = document.getElementsByClassName("furTree");

    //fire
    let fireLight = document.getElementsByClassName("fireLight");

    let fireRight = document.getElementsByClassName("fireRight");
    let fireMiddle = document.getElementsByClassName("fireMiddle");
    let fireLeft = document.getElementsByClassName("fireLeft");

    let fireParticle = document.getElementsByClassName("fireParticle");
    let fireParticleCross1 = document.getElementsByClassName("fireParticleCross1");
    let fireParticleCross2 = document.getElementsByClassName("fireParticleCross2");
    let fireParticleSquare1 = document.getElementsByClassName("fireParticleSquare1");
    let fireParticleSquare2 = document.getElementsByClassName("fireParticleSquare2");
    let fireParticleSquare3 = document.getElementsByClassName("fireParticleSquare3");
    let fireParticleSquare4 = document.getElementsByClassName("fireParticleSquare4");

    let shadowTrunk1 = document.getElementsByClassName("shadowTrunk1");
    let shadowTrunk2 = document.getElementsByClassName("shadowTrunk2");


    //characters
    let marshmallow = document.getElementsByClassName("marshmallow");

    let blueArm = document.getElementsByClassName("blueArm");
    let blueStick = document.getElementsByClassName("blueStick");

    let redArm = document.getElementsByClassName("redArm");
    let redStick = document.getElementsByClassName("redStick");

    let characterEyes = document.getElementsByClassName("characterEyes");


    //bear
    let bearFace = document.getElementsByClassName("bearFace");

    let bearBody = document.getElementsByClassName("bearBody");
    let bearEyes = document.getElementsByClassName("bearEyes");
    let bearNose = document.getElementsByClassName("bearNose");

    let bearEars = document.getElementsByClassName("bearEars");
    let bearEarLeft = document.getElementsByClassName("bearEarLeft");
    let bearEarRight = document.getElementsByClassName("bearEarRight");

    let bearBrows = document.getElementsByClassName("bearBrows");

    let bearPaws = document.getElementsByClassName("bearPaws");
    let bearPawRight = document.getElementsByClassName("bearPawRight");
    let bearPawLeft = document.getElementsByClassName("bearPawLeft");


    //// Animation
    ///Sky
    let tlstarSmall = new TimelineMax();
    tlstarSmall.staggerFromTo(starSmall, .5, {
        opacity: 1
    }, {
        opacity: 0,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true
    }, 3.5)

    let tlstarPointy = new TimelineMax();
    tlstarPointy.staggerFromTo(starPointy, 2, {
        transformOrigin: "50% 50%",
        scaleY: .75,
        scaleX: .75
    }, {
        scaleY: 1.2,
        scaleX: 1.1,
        repeat: -1,
        yoyo: true
    }, 2)


    let tlstarRotate = new TimelineMax({
        repeat: -1,
    });
    tlstarRotate.staggerTo(starCross, 30, {
        transformOrigin: "50% 50%",
        rotation: "360deg",
        ease: "linear"
    }, 3)

    let tlstarCross = new TimelineMax();
    tlstarCross.staggerFromTo(starCross, 1, {
        transformOrigin: "50% 50%",
        scaleY: .9,
        scaleX: .9
    }, {
        scaleY: 1.05,
        scaleX: 1.05,
        repeat: -1,
        yoyo: true
    }, 3)


    ///Forest
    //grass
    let tlgrass = new TimelineMax();
    tlgrass.staggerFromTo(grass, 2, {
        transformOrigin: "0% 100%",
        skewX: "10deg"
    }, {
        skewX: "-10deg",
        repeat: -1,
        yoyo: true
    }, 0.3);

    //tree
    let tlswingingTree = new TimelineMax();
    tlswingingTree.staggerFromTo(swingingTree, 2, {
        transformOrigin: "0% 100%",
        skewX: "1.5deg",
    }, {
        skewX: "-1.5deg",
        repeat: -1,
        yoyo: true,
    }, 1);

    let tlswingingFurTree = new TimelineMax();
    tlswingingFurTree.staggerFromTo(swingingFurTree, 4, {
        transformOrigin: "0% 100%",
        skewX: "1.5deg",
    }, {
        skewX: "-1.5deg",
        repeat: -1,
        yoyo: true,
    }, 1);



    //Fire
    let tlfire = new TimelineMax();
    tlfire.staggerFromTo([fireLeft, fireMiddle, fireRight], .6, {
        transformOrigin: "50% 100%",
        scaleY: 1
    }, {
        scaleY: 1.3,
        repeat: -1,
        yoyo: true,
    }, .3);

    let tlfireParticles = new TimelineMax();
    tlfireParticles.staggerFromTo(fireParticle, 5, {
        y: 10,
        opacity: 1
    }, {
        y: -30,
        opacity: 0,
        rotation: 40,
        repeat: -1,
    }, .5)

    let tlfireLight = new TimelineMax();
    tlfireLight.to(fireLight, 2, {
        transformOrigin: "50% 50%",
        scaleX: .5,
        scaleY: .8,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })

    let tlshadowtrunkOne = new TimelineMax();
    tlshadowtrunkOne.to(shadowTrunk1, 2, {
        transformOrigin: "100% 50%",
        scaleX: .8,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })

    let tlshadowtrunk2 = new TimelineMax();
    tlshadowtrunk2.to(shadowTrunk2, 2, {
        transformOrigin: "50% 0%",
        scaleY: .7,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })


    //Marshmallows
    let tlblueArm = new TimelineMax();
    tlblueArm.to([blueArm, blueStick], 1.5, {
        transformOrigin: "0% 0%",
        rotation: "8deg",
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })
    let tlblueStick = new TimelineMax();
    tlblueStick.to(blueStick, 1.5, {
        y: 2,
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })

    let tlredArm = new TimelineMax();
    tlredArm.to([redArm, redStick], 1.5, {
        transformOrigin: "100% 0%",
        rotation: "12deg",
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })
    let tlredStick = new TimelineMax();
    tlredStick.to(redStick, 1.5, {
        y: -3,
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })

    let tlcharacterEyes = new TimelineMax({repeat: -1});
    tlcharacterEyes.to(characterEyes, .2, {opacity: 0}, 4)
    tlcharacterEyes.to(characterEyes, .2, {opacity: 1})


    //Bear
    let tlbearAppear = new TimelineMax({
        repeat: -1,
        repeatDelay: 10
    });
    tlbearAppear.staggerFromTo([bearFace, bearNose, bearEars, bearPaws, bearBrows], .7, {
        y: 25,
        scaleY: .5,
        opacity: 0
    }, {
        y: 0,
        scaleY: 1,
        opacity: 1,
        delay: 0,
        ease: Back.easeOut.config(2),
    }, .05);
    tlbearAppear.to(bearBrows, .5, {y: -2, ease: Back.easeOut.config(2)}, 1)
    tlbearAppear.to(bearBrows, .4, {y: 0}, 3)
    tlbearAppear.to(bearPaws, .8, {
        y: 3,
        scaleY: 0,
        opacity: 0,
    }, 5.5)
    tlbearAppear.to([bearFace, bearNose, bearEars, bearBrows], .5, {
        y: 30,
        scaleY: 0,
    }, 6)

    let tlbearBlink = new TimelineMax({repeat: -1});
    tlbearBlink.to(bearEyes, .2, {opacity: 0}, 4)
    tlbearBlink.to(bearEyes, .2, {opacity: 1})
});

//portfolio.js
window.addEventListener('load', function () {
    function renderList(data) {

        let items = data.map(function (i) {
            return `<div class="portfolio__item swiper-slide" data-type="${i.type}">
                <div class="portfolio__img">
                    <img class="potrfolio__img-img" src="${i.thumb}" alt="lorem"/>
                </div>
                <div class="portfolio__links">
                    <a class="portfolio__view portfolio__link" href="${i.img}" target="_blank">
                         View Project
                    </a>
                     <a class="portfolio__link portfolio__go" href="${i.link}" target="_blank">
                        Go to project
                     </a>
                </div>
            </div>`;
        });

        return `<div class="swiper-wrapper portfolio__grid">${items.join('')}</div>`;


    }

    fetch('/data/data.json')
        .then(response => response.json())
        .then(function (data) {
            document.querySelector('.portfolio__swiper').innerHTML = renderList(data.list);
        });

    let filter = document.querySelector('.filter');

    filter.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;


        if (target.classList.contains('filter__item')) {
            let list = document.querySelectorAll('.portfolio__item'),
                type = target.dataset.type;

            filter.querySelector('.active').classList.remove('active');
            target.classList.add('active');


            list.forEach(function (i) {

                i.classList.remove('hidden');
                if (i.dataset.type != type && type != 'all') {
                    i.classList.add('hidden');
                }

            });

        }
    });

    let swiper = document.querySelector('.portfolio__swiper');

    swiper.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('portfolio__item')) {
            target.classList.toggle('hover');
        }
    });
});

//services.js
window.addEventListener('load', function () {

    ////Naming elements
    //sky
    let starSmall = document.getElementsByClassName("starSmall");
    let starPointy = document.getElementsByClassName("starPointy");
    let starCross = document.getElementsByClassName("starCross");

    //forest
    let grass = document.getElementsByClassName("grass");
    let swingingTree = document.getElementsByClassName("swingingTree");
    let swingingFurTree = document.getElementsByClassName("furTree");

    //fire
    let fireLight = document.getElementsByClassName("fireLight");

    let fireRight = document.getElementsByClassName("fireRight");
    let fireMiddle = document.getElementsByClassName("fireMiddle");
    let fireLeft = document.getElementsByClassName("fireLeft");

    let fireParticle = document.getElementsByClassName("fireParticle");
    let fireParticleCross1 = document.getElementsByClassName("fireParticleCross1");
    let fireParticleCross2 = document.getElementsByClassName("fireParticleCross2");
    let fireParticleSquare1 = document.getElementsByClassName("fireParticleSquare1");
    let fireParticleSquare2 = document.getElementsByClassName("fireParticleSquare2");
    let fireParticleSquare3 = document.getElementsByClassName("fireParticleSquare3");
    let fireParticleSquare4 = document.getElementsByClassName("fireParticleSquare4");

    let shadowTrunk1 = document.getElementsByClassName("shadowTrunk1");
    let shadowTrunk2 = document.getElementsByClassName("shadowTrunk2");


    //characters
    let marshmallow = document.getElementsByClassName("marshmallow");

    let blueArm = document.getElementsByClassName("blueArm");
    let blueStick = document.getElementsByClassName("blueStick");

    let redArm = document.getElementsByClassName("redArm");
    let redStick = document.getElementsByClassName("redStick");

    let characterEyes = document.getElementsByClassName("characterEyes");


    //bear
    let bearFace = document.getElementsByClassName("bearFace");

    let bearBody = document.getElementsByClassName("bearBody");
    let bearEyes = document.getElementsByClassName("bearEyes");
    let bearNose = document.getElementsByClassName("bearNose");

    let bearEars = document.getElementsByClassName("bearEars");
    let bearEarLeft = document.getElementsByClassName("bearEarLeft");
    let bearEarRight = document.getElementsByClassName("bearEarRight");

    let bearBrows = document.getElementsByClassName("bearBrows");

    let bearPaws = document.getElementsByClassName("bearPaws");
    let bearPawRight = document.getElementsByClassName("bearPawRight");
    let bearPawLeft = document.getElementsByClassName("bearPawLeft");


    //// Animation
    ///Sky
    let tlstarSmall = new TimelineMax();
    tlstarSmall.staggerFromTo(starSmall, .5, {
        opacity: 1
    }, {
        opacity: 0,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true
    }, 3.5)

    let tlstarPointy = new TimelineMax();
    tlstarPointy.staggerFromTo(starPointy, 2, {
        transformOrigin: "50% 50%",
        scaleY: .75,
        scaleX: .75
    }, {
        scaleY: 1.2,
        scaleX: 1.1,
        repeat: -1,
        yoyo: true
    }, 2)


    let tlstarRotate = new TimelineMax({
        repeat: -1,
    });
    tlstarRotate.staggerTo(starCross, 30, {
        transformOrigin: "50% 50%",
        rotation: "360deg",
        ease: "linear"
    }, 3)

    let tlstarCross = new TimelineMax();
    tlstarCross.staggerFromTo(starCross, 1, {
        transformOrigin: "50% 50%",
        scaleY: .9,
        scaleX: .9
    }, {
        scaleY: 1.05,
        scaleX: 1.05,
        repeat: -1,
        yoyo: true
    }, 3)


    ///Forest
    //grass
    let tlgrass = new TimelineMax();
    tlgrass.staggerFromTo(grass, 2, {
        transformOrigin: "0% 100%",
        skewX: "10deg"
    }, {
        skewX: "-10deg",
        repeat: -1,
        yoyo: true
    }, 0.3);

    //tree
    let tlswingingTree = new TimelineMax();
    tlswingingTree.staggerFromTo(swingingTree, 2, {
        transformOrigin: "0% 100%",
        skewX: "1.5deg",
    }, {
        skewX: "-1.5deg",
        repeat: -1,
        yoyo: true,
    }, 1);

    let tlswingingFurTree = new TimelineMax();
    tlswingingFurTree.staggerFromTo(swingingFurTree, 4, {
        transformOrigin: "0% 100%",
        skewX: "1.5deg",
    }, {
        skewX: "-1.5deg",
        repeat: -1,
        yoyo: true,
    }, 1);



    //Fire
    let tlfire = new TimelineMax();
    tlfire.staggerFromTo([fireLeft, fireMiddle, fireRight], .6, {
        transformOrigin: "50% 100%",
        scaleY: 1
    }, {
        scaleY: 1.3,
        repeat: -1,
        yoyo: true,
    }, .3);

    let tlfireParticles = new TimelineMax();
    tlfireParticles.staggerFromTo(fireParticle, 5, {
        y: 10,
        opacity: 1
    }, {
        y: -30,
        opacity: 0,
        rotation: 40,
        repeat: -1,
    }, .5)

    let tlfireLight = new TimelineMax();
    tlfireLight.to(fireLight, 2, {
        transformOrigin: "50% 50%",
        scaleX: .5,
        scaleY: .8,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })

    let tlshadowtrunkOne = new TimelineMax();
    tlshadowtrunkOne.to(shadowTrunk1, 2, {
        transformOrigin: "100% 50%",
        scaleX: .8,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })

    let tlshadowtrunk2 = new TimelineMax();
    tlshadowtrunk2.to(shadowTrunk2, 2, {
        transformOrigin: "50% 0%",
        scaleY: .7,
        repeat: -1,
        repeatDelay: .3,
        yoyo: true
    })


    //Marshmallows
    let tlblueArm = new TimelineMax();
    tlblueArm.to([blueArm, blueStick], 1.5, {
        transformOrigin: "0% 0%",
        rotation: "8deg",
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })
    let tlblueStick = new TimelineMax();
    tlblueStick.to(blueStick, 1.5, {
        y: 2,
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })

    let tlredArm = new TimelineMax();
    tlredArm.to([redArm, redStick], 1.5, {
        transformOrigin: "100% 0%",
        rotation: "12deg",
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })
    let tlredStick = new TimelineMax();
    tlredStick.to(redStick, 1.5, {
        y: -3,
        repeat: -1,
        yoyo: true,
        ease: "linear"
    })

    let tlcharacterEyes = new TimelineMax({repeat: -1});
    tlcharacterEyes.to(characterEyes, .2, {opacity: 0}, 4)
    tlcharacterEyes.to(characterEyes, .2, {opacity: 1})


    //Bear
    let tlbearAppear = new TimelineMax({
        repeat: -1,
        repeatDelay: 10
    });
    tlbearAppear.staggerFromTo([bearFace, bearNose, bearEars, bearPaws, bearBrows], .7, {
        y: 25,
        scaleY: .5,
        opacity: 0
    }, {
        y: 0,
        scaleY: 1,
        opacity: 1,
        delay: 0,
        ease: Back.easeOut.config(2),
    }, .05);
    tlbearAppear.to(bearBrows, .5, {y: -2, ease: Back.easeOut.config(2)}, 1)
    tlbearAppear.to(bearBrows, .4, {y: 0}, 3)
    tlbearAppear.to(bearPaws, .8, {
        y: 3,
        scaleY: 0,
        opacity: 0,
    }, 5.5)
    tlbearAppear.to([bearFace, bearNose, bearEars, bearBrows], .5, {
        y: 30,
        scaleY: 0,
    }, 6)

    let tlbearBlink = new TimelineMax({repeat: -1});
    tlbearBlink.to(bearEyes, .2, {opacity: 0}, 4)
    tlbearBlink.to(bearEyes, .2, {opacity: 1})
});
