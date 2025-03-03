$(function () {
  // ART_DESIGN 슬라이드
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    infinite: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // BEST_ART 슬라이드
  var artSwiper = new Swiper(".artSwiper", {
    slidesPerView: 4, 
    spaceBetween: 20,  
    // loop: true,       
    pagination: {
        el: ".art-pagination",
        clickable: true,
       },
    navigation: {
        nextEl: ".art-next",
        prevEl: ".art-prev",
    },
    breakpoints: {
        1440: { slidesPerView: 4 }, 
        768: { slidesPerView: 3 },   
        480: { slidesPerView: 2 },
        320: { slidesPerView: 2 }   
    }
});

});
//ready