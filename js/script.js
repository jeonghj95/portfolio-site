$(document).ready(function () {

// 사이드 메뉴
  $(document).ready(function(){

      $(".toggle_btn").click(function () {
    $(".menu").addClass("active"); 
    $(".dimmer").fadeIn(); 
    $(this).hide(); 
    $(".toggle_c_btn").show();
  });
  
  // 메뉴 닫기
  $(".toggle_c_btn").click(function () {
    $(".menu").removeClass("active"); 
    $(".dimmer").fadeOut(); 
    $(this).hide(); 
    $(".toggle_btn").show(); 
  });
  
  // 딤 영역 클릭 시 메뉴 닫기
  $(".dimmer").click(function () {
    $(".menu").removeClass("active");
    $(".dimmer").fadeOut();
    $(".toggle_c_btn").hide();
    $(".toggle_btn").show();
  });
  });
  
// 커서 효과
const cursor = document.querySelector(".cursor");
const scrollSection = document.querySelector(".horizontal-scroll-container");

scrollSection.addEventListener("mousemove", (e) => {
    const rect = scrollSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor.style.opacity = "1"; 
});
// 섹션 끝나면 커서서 사라지는 효과
scrollSection.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0"; 
});

// gsap 가로스크롤
gsap.registerPlugin(ScrollTrigger);

const scrollContent = document.querySelector('.scroll-content');

gsap.to(scrollContent, {
  x: () => -(scrollContent.scrollWidth - window.innerWidth), 
  ease: "none", 
  scrollTrigger: {
    trigger: ".horizontal-scroll-container", 
    start: "top top", 
    end: () => `+=${scrollContent.scrollWidth - window.innerWidth}`,
    scrub: true, 
    pin: true, 
    anticipatePin: 1, 
  },
});

// design tab1 슬라이드
$(document).ready(function(){
  // 슬릭 초기화
  $('.banner').slick({
    dots: true,            
    infinite: true,        
    speed: 300,          
    slidesToShow: 1,       
    adaptiveHeight: true,   
    autoplay: true,        
    autoplaySpeed: 1000,  
   
   
  });

  // 탭 변경 시 슬릭 슬라이더 다시 로드
  $('input[name="tab"]').on("change", function(){
    if($("#tab1").is(":checked")) { 
      setTimeout(function() {
        $('.banner').slick('refresh'); 
      }, 100); 
    }
  });
});


});//ready 괄호
