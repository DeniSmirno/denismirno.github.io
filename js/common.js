
$(function() {


//.....Carousel......//

            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:10, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                // autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:5000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            });
  
});


