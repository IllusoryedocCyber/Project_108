// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//             }
//           }
//         ]
//       });
//   });
            //ссылаемся на элемент который нажали . на элемент на который нажали даем ему класс актив а у всех остальных убираем класс актив . у соседних забираем класс актив если он у них присутствует
        //   команда найти блок div с классом ближайший 
        // find some block with content 
        // thouse elements that we found we will remove class active or element with class _active
        // eq that command add number to the element to which we press 
        // when i press tab 2 i should open content with number 2 that eq index is doing it 
        // next add class i will add to content class active 
    // доллар $это функция в jquery позволяет мне  получать все елементы по классу со страници селектор это(класс айди комбинации(тег с классом ul class=name и тд)) я хочу чтоб при клике на определенные ссылки у меня что то происходило 
    // указываю each говорю что для каждого елементы будет чтото происходить
    // каждый елемент ето каждая ссылка подробнее из каждой карточки
    // ссылаюсь на каждый елемент  , function прописываю что будет происходить для каждого елемента аргумент i 
    // $ еще раз потом говорю коду что на каждую ссылку  я буду кликать on Click
    // потом после клика я говорю что будет происходить после клика 
    // сдесь идет стандартное поведение браузера (я его отменяю с помщью preventDefault, что она сработала в функции пишу (e))
    // часто используеться на ссылках для того чтоб не переходили по адресу а выполняли другие действия
    // пишу логическое вырадение  (когда кликаю на подробнее что должно происходить я должен взять контент свой)
    // дальше при клике на ету кнопку у меня должен переключаться класс причем автоматически
    // toggleClass если класс есть то убираеться если класса нету то добавляеться 
    // и как раз для етого я писал классс catalog-item__content_active
    // одновременно не будет класса активности у контента и листа если в листа добавляю класс активности то из контента убираю
    // что б указать какой конкретный элеметн я хочу использовать прописываю перед toggleClass команду eq
    // указыва. у eq (i) ето атрибут отвечает номер по порядку 
    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    // // прописываю код который при клике назад ведет к основному контенту подставляю класс сылки назад
    // $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    // убираю класс и ставлю item теперь когда я буду вызывать элемент 
    // там где будет меняться класс я ставлю item в теперь каждый раз когда я буду вызывать функцию я будут подставлять item 
    // ссылку на тот элемент который буду использовать в зависимости от этого у меня будут выполняться операции с разными ссылками
    // есть функция которой я передаю ссылку и она уже делает операции с ними 
$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
          .eq($(this).index()).addClass('catalog__content_active');
      });
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });
// tinyslider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});
document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
});
// tiny slider code 