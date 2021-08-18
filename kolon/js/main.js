/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

$(document).ready(function() {
  //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
  Logic();

  $(".scroll_inner,.hori_scroll,.sc05_scroll_inner").niceScroll({
    cursorcolor: "#000",
    cursorwidth: 0,
    scrollspeed: 60,
    cursorborderradius: 0,
    mousescrollstep: 40,
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    background: "none",
    cursorborder: "none",
    autohidemode: true,
    boxzoom: false,
    smoothscroll: true,
    zindex: 9999
  });

  //
  // window.addEventListener('wheel',function(e){
  //     console.log(e.deltaY);
  //
  // });

  //=============================intro script start===============================//
  $("#main_slider").slick({
    dots: false, //네비게이션 사용여부
    arrows: false, //화살표 사용여부
    // prevArrow: $('.prev'), //이전 화살표
    // nextArrow: $('.next'), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 500, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: false
  });

  let value = 14.75;
  let value2 = 102.75;
  $("#main_slider")
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function(event, slick, currentSlide, nextSlide) {
      if (currentSlide === 0) {
        $("#section01 .intro_small_title img").css(
          "transform",
          `translateY(0px)`
        );
        $("#section01 .intro_title .numbering img").css(
          "transform",
          `translateY(0px)`
        );
      } else if (currentSlide === 1) {
        $("#section01 .intro_small_title img").css(
          "transform",
          `translateY(-${value}px)`
        );
        $("#section01 .intro_title .numbering img").css(
          "transform",
          `translateY(-${value2}px)`
        );
      } else if (currentSlide === 2) {
        $("#section01 .intro_small_title img").css(
          "transform",
          `translateY(-${value * 2}px)`
        );
        $("#section01 .intro_title .numbering img").css(
          "transform",
          `translateY(-${value2 * 2}px)`
        );
      } else if (currentSlide === 3) {
        $("#section01 .intro_small_title img").css(
          "transform",
          `translateY(-${value * 3}px)`
        );
        $("#section01 .intro_title .numbering img").css(
          "transform",
          `translateY(-${value2 * 3}px)`
        );
      }
    });

  //==============================intro script end===========================================================//

  //================================숫자 슬라이드 start========================//
  $("#slider").slick({
    dots: false, //네비게이션 사용여부
    arrows: false, //화살표 사용여부
    // prevArrow: $('.prev'), //이전 화살표
    // nextArrow: $('.next'), //다음 화살표
    autoplay: false, //자동넘김
    autoplaySpeed: 2000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: true, //센터모드
    centerPadding: "10%", //센터 모드 시 여백
    slidesToShow: 9, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: false
  });

  $("#slider")
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      $("#slider .slick-slide").removeClass("on");
    })
    .on("afterChange", function(event, slick, currentSlide, nextSlide) {
      $("#slider .slick-current").addClass("on");
    });

  $("#slider .list").click(function() {
    $(".number_pop").addClass("on");

    if ($(this).attr("data-name") === "pop_01") {
      $(".pop .main .list01").addClass("on");
    } else if ($(this).attr("data-name") === "pop_02") {
      $(".pop .main .list02").addClass("on");
    } else if ($(this).attr("data-name") === "pop_03") {
      $(".pop .main .list03").addClass("on");
    } else if ($(this).attr("data-name") === "pop_04") {
      $(".pop .main .list04").addClass("on");
    } else if ($(this).attr("data-name") === "pop_05") {
      $(".pop .main .list05").addClass("on");
    }
  });

  $(".pop .close").click(function() {
    $(".pop").removeClass("on");
    $(".pop .main .list").removeClass("on");
  });

  //==================================숫자 슬라이드 end=======================//

  //================================영어 슬라이드(세로) start ===========================//
  $("#slider2").slick({
    dots: false, //네비게이션 사용여부
    arrows: false, //화살표 사용여부
    // prevArrow: $('.prev'), //이전 화살표
    // nextArrow: $('.next'), //다음 화살표
    autoplay: false, //자동넘김
    autoplaySpeed: 2000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: true, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 11, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: true, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: false
  });

  $("#slider2")
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      $("#slider2 .slick-slide")
        .removeClass("on")
        .removeClass("fade");
      $("#category > div > img").removeClass("on");
    })
    .on("afterChange", function(event, slick, currentSlide, nextSlide) {
      $("#slider2 .slick-current").addClass("on");

      $("#slider2 .slick-current")
        .prev()
        .addClass("fade");
      $("#slider2 .slick-current")
        .next()
        .addClass("fade");

      if (currentSlide === 0) {
        $("#category > div > img:nth-child(1)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list01");
      } else if (currentSlide === 1) {
        $("#category > div > img:nth-child(2)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list02");
      } else if (currentSlide === 2) {
        $("#category > div > img:nth-child(3)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list03");
      } else if (currentSlide === 3) {
        $("#category > div > img:nth-child(1)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list01");
      } else if (currentSlide === 4) {
        $("#category > div > img:nth-child(2)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list02");
      } else if (currentSlide === 5) {
        $("#category > div > img:nth-child(3)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list03");
      } else if (currentSlide === 6) {
        $("#category > div > img:nth-child(1)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list01");
      } else if (currentSlide === 7) {
        $("#category > div > img:nth-child(2)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list02");
      } else if (currentSlide === 8) {
        $("#category > div > img:nth-child(3)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list03");
      } else if (currentSlide === 6) {
        $("#category > div > img:nth-child(1)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list01");
      } else if (currentSlide === 7) {
        $("#category > div > img:nth-child(2)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list02");
      } else if (currentSlide === 8) {
        $("#category > div > img:nth-child(3)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list03");
      } else if (currentSlide === 9) {
        $("#category > div > img:nth-child(1)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list01");
      } else if (currentSlide === 10) {
        $("#category > div > img:nth-child(2)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list02");
      } else if (currentSlide === 11) {
        $("#category > div > img:nth-child(3)").addClass("on");
        $("#section03 .detail_btn").attr("data-name", "list03");
      }
    });

  $("#section03 .detail_btn").click(function() {
    $("#detail_section").css("transform", "translateX(0)");
    $("#container .main").css("left", "-100vw");

    if ($(this).attr("data-name") === "list01") {
      $("#detail_section .page03").addClass("on");
    } else if ($(this).attr("data-name") === "list02") {
      $("#detail_section .page01").addClass("on");
    } else if ($(this).attr("data-name") === "list03") {
      $("#detail_section .page02").addClass("on");
    }
  });

  $("#detail_section .preview_btn").click(function() {
    $("#detail_section > div")
      .delay(700)
      .queueRemoveClass("on");
    $("#detail_section").css("transform", "translateX(100vw)");
    $("#container .main").css("left", "0");
    $("#detail_section .page .scroll_inner")
      .stop()
      .animate({ scrollTop: 0 }, 1200, "easeInOutExpo");
  });

  $(".c_depth03 .list_img").slick({
    dots: false, //네비게이션 사용여부
    arrows: false, //화살표 사용여부
    // prevArrow: $('.prev'), //이전 화살표
    // nextArrow: $('.next'), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 2000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 4, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: true
  });

  const video = document.querySelector("#video01");
  $(".c_plus_btn").click(function() {
    video.play();
    $(this).fadeOut();
  });

  $("#video01").click(function() {
    video.pause();
    $(".c_plus_btn").fadeIn();
  });

  const section02 = document.querySelector("#section02");
  const section03 = document.querySelector("#section03");

  function moveFunc(e) {
    // console.log(e.clientX,e.clientY);

    if (e.clientY < 100) {
      $(".previous_btn").addClass("on");
    } else {
      $(".previous_btn").removeClass("on");
    }
  }

  window.addEventListener("mousemove", moveFunc);

  function sc02Wheel(e) {
    let value = e.deltaY;

    if (value < 0) {
      //up
      $("#slider").slick("slickPrev");
    } else {
      //down
      $("#slider").slick("slickNext");
    }
  }

  function sc03Wheel(e) {
    let value = e.deltaY;

    if (value < 0) {
      //up
      $("#slider2").slick("slickPrev");
    } else {
      //down
      $("#slider2").slick("slickNext");
    }
  }
  //================================영어 슬라이드(세로) end ===========================//

  section02.addEventListener("wheel", sc02Wheel);
  section03.addEventListener("wheel", sc03Wheel);

  // =========================
  // on event section      ===
  //==========================

  console.log(innerHeight);

  const stage = $("#container .main");

  $(".next_btn").click(function() {
    if ($(this).attr("data-name") === "page01") {
      stage.css("transform", `translateY(-${innerHeight}px)`);
      $("#logo").css("opacity", "1");
    } else if ($(this).attr("data-name") === "page02") {
      stage.css("transform", `translateY(-${innerHeight * 2}px)`);
      $("#slider2").slick("slickNext");
    } else if ($(this).attr("data-name") === "page03") {
      stage.css("transform", `translateY(-${innerHeight * 3}px)`);
    } else if ($(this).attr("data-name") === "page04") {
      stage.css("transform", `translateY(-${innerHeight * 4}px)`);
      $("#logo img").attr("src", "img/main/event/event_logo_white.png");
    } else if ($(this).attr("data-name") === "page05") {
      stage.css("transform", `translateY(${0}px)`);
      $("#logo img").attr("src", "img/main/logo.png");
      $("#logo").css("opacity", "0");
    }
  });

  $(".previous_btn").click(function() {
    video.pause();
    video.currentTime = 0;

    if ($(this).attr("data-name") === "page02") {
      stage.css("transform", `translateY(${0}px)`);
    } else if ($(this).attr("data-name") === "page03") {
      stage.css("transform", `translateY(-${innerHeight}px)`);
    } else if ($(this).attr("data-name") === "page04") {
      stage.css("transform", `translateY(-${innerHeight * 2}px)`);
    } else if ($(this).attr("data-name") === "page05") {
      stage.css("transform", `translateY(-${innerHeight * 3}px)`);
    }
  });

  //--------------------------section 04 event

  $("#section04 .back_btn").click(function() {
    $(".hori_scroll")
      .stop()
      .animate({ scrollLeft: 0 }, 1200, "easeInOutExpo");
  });

  $("#section05 .event_title").click(function() {
    $(".sc05_pop").addClass("on");
  });

  $("#section05 .sc05_pop .close_btn").click(function() {
    $(".sc05_pop").removeClass("on");
  });

  $("#section05 .sc05_pop .top_btn").click(function() {
    $("#section05 .sc05_pop .sc05_scroll_inner")
      .stop()
      .animate({ scrollTop: 0 }, 1200, "easeInOutExpo");
  });

  //-------------------------------------------

  const scrollPage = document.querySelector(
    "#detail_section .page .scroll_inner"
  );

  document.addEventListener("scroll", function(e) {
    console.log(e);
  });

  $("#detail_section .top_btn").click(function() {
    // $('.scroll_inner')
    $("#detail_section .page .scroll_inner")
      .stop()
      .animate({ scrollTop: 0 }, 1200, "easeInOutExpo");
  });
  $("#detail_section .page .scroll_inner").scroll(function(e) {
    console.log(e.target.scrollTop);
  });

  //==============================================================
});
