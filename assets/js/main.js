const header_navIcon = document.querySelector(".header_navIcon");
const navbar = document.querySelector(".sideBar_menu");
const closeBar = document.querySelector(".close_img");

header_navIcon.addEventListener("click",function(){
  navbar.classList.add("active")
})

closeBar.addEventListener("click",function(){
  navbar.classList.remove("active")
})

// slick slider code
$('.center').slick({
  centerMode: true,
  centerPadding: '51px',
  slidesToShow: 4,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  responsive: [
  ],
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '51px',
        slidesToShow: 4 
      }
    },
    {
      breakpoint: 998,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '45px',
        slidesToShow: 3 
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2 
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
 
});