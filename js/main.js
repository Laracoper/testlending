new Swiper ('.slide__body', {
    // бесконечный слайдер
    // loop: true,
    // effect: 'coverflow',

    // количество дублирующих слайдов
    // loopedSlides: 0,

    // автопрокрутка
    // autoplay: {
    //     delay: 4000,
    // },

    // скорость
    // speed: 800,

    // адаптивность
    // breakpoints: {
    //     375: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     991.98: {
    //         slidesPerView: 3,
    //     }
    // },

    // стрелки
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    // круглые кнопки  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    // автовысота
    autoHeight: true,

    // количество слайдов для показа
    // slidesPerView: 2.3,
    // centeredSlides: true,

    // отступы между слайдами
    // spaceBetween: 30,

    // количество пролистываемых слайдов
    // slidesPerGroup: 1,
});

// ------------------------------------

new Swiper ('.block-five__swiper-container', {
  // бесконечный слайдер
  // loop: true,
  // effect: 'coverflow',

  // количество дублирующих слайдов
  // loopedSlides: 0,

  // автопрокрутка
  autoplay: {
      delay: 4000,
  },

  // скорость
  // speed: 800,

  // адаптивность
  breakpoints: {
      270: {
          slidesPerView: 1,
      },
      767.98: {
          slidesPerView: 2,
      },
      991.98: {
          slidesPerView: 3,
      }
  },

  // стрелки
  navigation: {
      nextEl: '.bn',
      prevEl: '.bp',
    },
  // круглые кнопки  
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
  // автовысота
  // autoHeight: true,

  // количество слайдов для показа
  slidesPerView: 2,
  // centeredSlides: true,

  // отступы между слайдами
  // spaceBetween: 30,

  // количество пролистываемых слайдов
  slidesPerGroup: 3,
});

// ================================================

const stut = document.querySelector('.stut')
const stutbtn = document.querySelector('.stut__btn')


setTimeout(() => {
    stut.classList.add('open')
},6000)

stutbtn.addEventListener('click', function() {
    stut.classList.remove('open')
})