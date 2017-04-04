$(document).ready(function () {

    $("#modal-phone").mask("+7(999) 999-9999");

    $("#business-phone").mask("+7(999) 999-9999");

    $("#ready-phone").mask("+7(999) 999-9999");

    $("#cup-coffee-phone").mask("+7(999) 999-9999");

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

    /*fullpage scroll*/  
    var position = 1;//переменная для позиции, приравнивается 1 
    
    $(document).on('DOMMouseScroll mousewheel', function (event) {//при прокрутке колесика мыши
        event.preventDefault();//сбрасываем свойство по умолчанию
        if($('body').attr('data-scroll') == '1'){//проверям наличия у body атрибута скрола равного 1
            $('body').attr('data-scroll', '0');//сбрасываем значения скрола, чтобы пользователь мог проскролить только один блок!!!
            var log = event.originalEvent.deltaY;//определяем изменение положения колеса            
            if (log > 0) {//при изменении положения колеса
                if (position > 0 && position < 9) {//если значение позиции от 1 до 8
                    position++;//увеличиваем счетчик на 1
                }
            } else if (position > 1 && position < 10) {//если значение позиции от 2 до 9
                position--;//уменьшаем счетчик на 1
            }
            var section = $('.vertical-scrolling' + position),//добовляем к классу нужной секции номер для скрола
                sectionPosition = section.offset().top;//расчитываем положение элемента относительно окна браузера 
            $('html,body').animate({scrollTop: sectionPosition}, 1000, function () {//скролим вверх или вниз
                $('body').attr('data-scroll', '1');//запрещаем скрол по умолчанию, чтобы пользователь мог прокрутить только одну секцию поворот колеса!!!
            });
        }        
    });

    /*close fullpage scroll*/
    

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

    /*animation*/
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
    /*close animation*/
});


