console.clear();

// // 문서를 스크롤했을 때
// $(window).scroll(function(){
//   let $this = $(this);
  
//   // 현재 위치를 scrollTop 변수에 저장
//   let scrollTop = $this.scrollTop();
  
//   // 스크롤 위치가 100 이상이면 scrolled 클래스 추가
//   if (scrollTop > 400) {
//     $("header").addClass("scrolled");
//   } else { // 그렇지 않다면 제거
//     $("header").removeClass("scrolled");
//   }
// });

var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('header').outerHeight()

$(window).scroll(function(event){ didScroll = true; });

setInterval(function() {
   if (didScroll) { hasScrolled(); didScroll = false;
   } }, 250);

   function hasScrolled() { 
     var st = $(this).scrollTop();
     // Make sure they scroll more than delta 
     if(Math.abs(lastScrollTop - st) <= delta) return;

     if (st > lastScrollTop && st > navbarHeight){ 
       // Scroll Down 
       $('header').removeClass('nav-down').addClass('nav-up');
       } else { // Scroll Up 
        if(st + $(window).height() < $(document).height()) {
           $('header').removeClass('nav-up').addClass('nav-down');
           } 

          } 
          
          lastScrollTop = st; }

 



// 메뉴

$(".btn-menu").click(function(){
  if($(".top-menu").hasClass("active")){
    $(".top-menu").removeClass("active"); 
  }
  else {
    $(".top-menu").addClass("active");
  }
});





// 슬라이더박스
function SliderBox__init(){
  const swiper = new Swiper('.slider-box .swiper', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 3000, // 5초마다 슬라이드 넘김
    disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
  },

  // If we need pagination
  pagination: {
    el: '.slider-box .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-box .swiper-button-next',
    prevEl: '.slider-box .swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.slider-box .swiper-scrollbar',
  //   draggable: false,
  // },
});};

SliderBox__init();

//  메인컨텐츠
  function mainContents__init() {
    const swiper = new Swiper(".main-contents .swiper", {
  
      loop:true,
      autoplay: {
        delay: 5000, // 5초마다 슬라이드 넘김
        disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
      },

      pagination: {
        el: '.main-contents .swiper-pagination',
      },

      navigation: {
        nextEl: ".main-contents .swiper-button-next",
        prevEl: ".main-contents .swiper-button-prev",
      },

      
    });
  }
  
  mainContents__init();
  
  // 공지사항
  function noticeContent__init(){
    const swiper = new Swiper('.notice-content .swiper', {
      direction: 'vertical',
      loop: true,
        autoplay: {
          delay: 2000, // 5초마다 슬라이드 넘김
          disableOnInteraction: false, // 자동 재생 중 건드려도 비활성화되지 않음
        },
    
      // If we need pagination
      pagination: {
        el: '.notice-content .swiper-pagination',
      },
    
    });
  
  };

  noticeContent__init();

  // aos 라이브러리

  AOS.init();