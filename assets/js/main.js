
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 6,
    // spaceBetween: 51,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
               
              },  
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              
              998: {
                slidesPerView: 4,
                spaceBetweenSlides: 20,
              }, 
              1300: {
                slidesPerView: 6,
                spaceBetweenSlides: 51,
              }, 
            },
  });
