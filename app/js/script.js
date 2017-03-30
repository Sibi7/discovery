$(document).ready(function () {


    $('.section-quote__slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });


    $('.sideScroll').click(function (event) {
        event.preventDefault(); // отменят стандартное свойство
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else{
            $('.sideScroll').removeClass('active'); // удаляет класс у всех дочерних элем.
            $(this).addClass('active');
        }
        var href = $(this).attr('href'), // получает атрибут в конкретного  нажатого элем
            target = $(href), // таргет- значение ссылки (ищет путь к элемменту на который указывает ссылка)
            top = target.offset().top; // узнает на каком расстояние от верха был секция которую нуэно скроллить
        $('html,body').animate({scrollTop: top}, 1000);
        return false; // вышел из функции
    });


});



