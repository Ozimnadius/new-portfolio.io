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