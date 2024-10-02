// var swiper = new Swiper(".serviceSwiper", {
//     spaceBetween: 69,
//     slidesPerView: 4,
//     slidesPerView: "auto",
//     centeredSlides: true,
//     roundLengths: true,
//     loop: true,
//     autoplay: {
//       delay: 2000,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         if (this.slides.length > 3) {
//           return index < 3 ? `<span class="${className}"></span>` : "";
//         }
//         return `<span class="${className}"></span>`;
//       },
//     },

//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         centeredSlides: false,
//       },
//       480: {
//         slidesPerView: 2,
//         spaceBetweenSlides: 20,
//         spaceBetween: 20,
//         centeredSlides: false,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetweenSlides: 30,
//         spaceBetween: 30,
//         centeredSlides: false,
//       },
//       998: {
//         slidesPerView: 4,
//         spaceBetweenSlides: 69,
//       },
//     },

//   });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 51,
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

    // breakpoints: {
    //           0: {
    //             slidesPerView: 1,
    //           },
    //           480: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
               
    //           },
    //           768: {
    //             slidesPerView: 3,
              
    //             spaceBetween: 30,
               
    //           },
    //           998: {
    //             slidesPerView: 3,
    //             spaceBetweenSlides: 40,
    //           },
    //           1000: {
    //             slidesPerView: 5,
    //             spaceBetweenSlides: 10,
    //           }, 
    //         },
  });
