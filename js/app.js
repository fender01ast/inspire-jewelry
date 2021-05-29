document.addEventListener("DOMContentLoaded", function(){
    let currentYear = new Date().getFullYear();
    document.getElementById('year-now').innerHTML = currentYear;

    document.querySelector('.header__logo-img').addEventListener('click', function(){
        window.open('https://www.instagram.com/inspire__jewelry/');
    });
});