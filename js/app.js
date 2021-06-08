document.addEventListener("DOMContentLoaded", function(){
    let currentYear = new Date().getFullYear();
    document.getElementById('year-now').innerHTML = currentYear;

    document.querySelector('.header__logo-img').addEventListener('click', function(){
        window.open('https://www.instagram.com/inspire__jewelry/');
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    let button = $('.toTopBtn');
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
});