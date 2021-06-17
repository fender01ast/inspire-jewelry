document.addEventListener("DOMContentLoaded", function(){
    new WOW().init();

    let currentYear = new Date().getFullYear();
    document.getElementById('year-now').innerHTML = currentYear;

    document.querySelector('.header__logo-img').addEventListener('click', function(){
        window.open('index.html');
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    let button = $('.toTopBtn');
    button.fadeOut();
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
          } else {
            button.fadeOut();
          }
    });

    $(window).scroll(function() {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress").width(ratio + "%");
    });
    
    if (document.location.pathname.indexOf('/mega.html') >= 0) {    // если страница === мега
        /* <slider mega> */
        new Splide( '.splide', {
            type        : 'loop',
            perPage     : 3,
            focus       : 'center',
            width       : '100%',
            height      : '320px',
            pagination  : true,
            arrows      : true,
            autoplay    : true,
            interval    : '2500',
            drag        : true,
            lazyLoad    : true,
            gap         : '10px',
            breakpoints : {
                767: {
                    perPage  : 1,
                    height   : '225px',
                },
                991: {
                    perPage  : 2,
                }
            }
        } ).mount();
        /* </slider mega> */

        var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [51.089758, 71.407374],
                zoom: 16
            });

            DG.marker([51.089581, 71.406209]).addTo(map).bindPopup('Inspire Jewelry Mega Silkway');
            DG.marker([51.164572, 71.44242]).addTo(map).bindPopup('Inspire Jewelry Alma-Ata');
        });
    }

    if (document.location.pathname.indexOf('/alma-ata.html') >= 0) {    // если страница === алма-ата
        /* <slider alma-ata> */
        new Splide( '.splide', {
            type        : 'loop',
            perPage     : 3,
            focus       : 'center',
            width       : '100%',
            height      : '320px',
            pagination  : true,
            arrows      : true,
            autoplay    : true,
            interval    : '2500',
            drag        : true,
            lazyLoad    : true,
            gap         : '10px',
            breakpoints : {
                767: {
                    perPage  : 1,
                    height   : '225px',
                },
                991: {
                    perPage  : 2,
                }
            }
        } ).mount();
        /* </slider alma-ata> */

        var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [51.164246, 71.441412],
                zoom: 16
            });

            DG.marker([51.089581, 71.406209]).addTo(map).bindPopup('Inspire Jewelry Mega Silkway');
            DG.marker([51.164572, 71.44242]).addTo(map).bindPopup('Inspire Jewelry Alma-Ata');
        });
    }
});