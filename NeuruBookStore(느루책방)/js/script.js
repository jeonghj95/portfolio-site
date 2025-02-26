$(function () {
  //메뉴
  // $(".toggle_btn").click(function () {
  //   $(".menu").addClass("active"); // 메뉴 열기
  //   $(this).hide(); // 'xi-bars' 버튼 숨김
  //   $(".toggle_c_btn").show(); // 'xi-close' 버튼 표시
  // });
  
  // $(".toggle_c_btn").click(function () {
  //   $(".menu").removeClass("active"); // 메뉴 닫기
  //   $(this).hide(); // 'xi-close' 버튼 숨김
  //   $(".toggle_btn").show(); // 'xi-bars' 버튼 표시
  // });
  // 메뉴 열기
$(".toggle_btn").click(function () {
  $(".menu").addClass("active"); // 메뉴 활성화
  $(".dimmer").fadeIn(); // 딤 배경 표시
  $(this).hide(); // 'xi-bars' 버튼 숨김
  $(".toggle_c_btn").show(); // 'xi-close' 버튼 표시
});

// 메뉴 닫기
$(".toggle_c_btn").click(function () {
  $(".menu").removeClass("active"); // 메뉴 비활성화
  $(".dimmer").fadeOut(); // 딤 배경 숨김
  $(this).hide(); // 'xi-close' 버튼 숨김
  $(".toggle_btn").show(); // 'xi-bars' 버튼 표시
});

// 딤 영역 클릭 시 메뉴 닫기
$(".dimmer").click(function () {
  $(".menu").removeClass("active");
  $(".dimmer").fadeOut();
  $(".toggle_c_btn").hide();
  $(".toggle_btn").show();
});
//   // 메뉴 열기
// $(".toggle_btn").click(function () {
//   $(".menu").slideDown(300).addClass("active"); // 메뉴를 부드럽게 열기
//   $(this).hide(); // 'xi-bars' 버튼 숨김
//   $(".toggle_c_btn").show(); // 'xi-close' 버튼 표시
// });

// // 메뉴 닫기
// $(".toggle_c_btn").click(function () {
//   $(".menu").slideUp(300, function () { // 메뉴를 부드럽게 닫기
//     $(this).removeClass("active"); // 닫힌 후 클래스 제거
//   });
//   $(this).hide(); // 'xi-close' 버튼 숨김
//   $(".toggle_btn").show(); // 'xi-bars' 버튼 표시
// });

  // var swiper = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   loop: true,
  // });
  // 비디오
  const video = document.getElementById('promoVideo');
const playStartBtn = document.getElementById('playStartBtn');
const playPauseBtn = document.getElementById('playPauseBtn');

// 재생 버튼 클릭 시 동영상 재생
playStartBtn.addEventListener('click', () => {
  video.play();
});

// 일시정지 버튼 클릭 시 동영상 정지
playPauseBtn.addEventListener('click', () => {
  video.pause();
});
  // 슬라이드
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination', // 페이지네이션 요소 지정
      clickable: true, // 페이지네이션 클릭 가능
      type: 'fraction', // 현재/전체 형식
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });
  // const swiper = new Swiper('.mySwiper', {
  //   loop: true, // 슬라이드 루프
  //   pagination: {
  //     el: '.swiper-pagination', // 페이지네이션 요소 지정
  //     clickable: true, // 페이지네이션 클릭 가능
  //     type: 'fraction', // 현재/전체 형식
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next', // 다음 버튼
  //     prevEl: '.swiper-button-prev', // 이전 버튼
  //   },
  // });
// 자주묻는질문
  $(".faq_title").click(function () {
    const faqCon = $(this).next(".faq_con");
  
    if (faqCon.hasClass("active")) {
      faqCon.removeClass("active").slideUp();
      $(this).removeClass("active");
    } else {
      $(".faq_con").removeClass("active").slideUp();
      $(".faq_title").removeClass("active");
      faqCon.addClass("active").slideDown();
      $(this).addClass("active");
    }
  });
});//ready