$(function(){

    var mixer = mixitup('.portfolio__content');

    $('.burger').on('click', function(){
        $('.burger__line, .menu__list').toggleClass('active');
    });




    $(".logo, .menu__link, .header__link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    window.addEventListener("scroll", function(){
        var menu = document.querySelector('.menu');
        var headerContent = document.querySelector('.header__content');
        menu.classList.toggle('fixed', window.scrollY > 50);
        headerContent.classList.toggle('full', window.scrollY > 0);
    });

});


