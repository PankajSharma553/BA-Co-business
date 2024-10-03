const header_navIcon = document.querySelector(".header_navIcon");
header_navIcon.addEventListener("click",function(){
  alert("hello")
})

// slick slider code
$('.center').slick({
  centerMode: true,
  centerPadding: '51px',
  slidesToShow: 4,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 5 
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '51px',
        slidesToShow: 5 
      }
    }
   
  ]
});