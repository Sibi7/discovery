$(document).ready(function () {


    $('.section-quote__carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 220,
        itemMargin: 0,
        asNavFor: '.section-quote__slider'
    });

    $('.section-quote__slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: ".section-quote__carousel"
    });

    /*$('.section-quote__slider').owlCarousel({
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
     });*/


    $('.sideScroll').click(function (event) {
        event.preventDefault(); // отменят стандартное свойство
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.sideScroll').removeClass('active'); // удаляет класс у всех дочерних элем.
            $(this).addClass('active');
        }
        var href = $(this).attr('href'), // получает атрибут в конкретного  нажатого элем
            target = $(href), // таргет- значение ссылки (ищет путь к элемменту на который указывает ссылка)
            top = target.offset().top; // узнает на каком расстояние от верха был секция которую нуэно скроллить
        $('html,body').animate({scrollTop: top}, 1000);
        return false; // вышел из функции
    });

    $(window).scroll(function () {

        $('.slides').each(function () {  // прошлись по всем секция с классом
            var target = $(this).attr('id'),
                currentPosition = $(this).position().top,
                targetPosition = currentPosition - $(document).scrollTop(),
                href = $('a[href="#' + target + '"]');

            if (targetPosition > -10 && targetPosition < 10) {//при условии попадания нужного элемента в диапазон 48 пикселей
                $('.sideScroll').removeClass("active");
                href.addClass('active');
            }
        });

    });


    var windowHeight = $(window).height();//переменная для определения высоты окна
    var elements = $('.section-what-getting '),//блок элементов
        item = $('.post');//скрытый елемент

    $(window).scroll(function () {//при прокрутке окна
        if (($(this).scrollTop() + windowHeight) >= elements.offset().top) {//до начала блока с классом how
            item.each(function (i) {//функция задержки появления каждого элемента
                $(this).delay((i++) * 500).fadeTo(1000, 1);
            });
        }
    });


    $('#sections-01-head .section01-bg').css({opacity: '1'}).addClass('animated fadeInDown');
    $('#sections-01-head .section01-bg-1').css({opacity: '1'}).addClass('animated fadeInDown');
    
    $(window).scroll(function () {

        var h = $(window).height();

        if (($(this).scrollTop() + h) >= $('#topical-goods').offset().top) {
            $('#topical-goods .fire').css({opacity: '1'}).addClass('animated fadeInDown');
            $('#topical-goods .money').css({opacity: '1'}).addClass('animated fadeInDown');
        }
        if (($(this).scrollTop() + h) >= $('#business-growth').offset().top) {
            $('#business-growth .earth').css({opacity: '1'}).addClass('animated fadeInLeft');
            $('#business-growth .toothpiece').css({opacity: '1'}).addClass('animated fadeInRight');
        }
        if (($(this).scrollTop() + h) >= $('#cup-coffee').offset().top) {
            $('#cup-coffee .river-bg').css({opacity: '1'}).addClass('animated fadeInLeft');
        }

    });

});


