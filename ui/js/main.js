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

  $(".container,.scroll_container").niceScroll({
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

  $("#main_slider").slick({
    dots: true, //네비게이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".prev"), //이전 화살표
    nextArrow: $(".next"), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 2000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: false, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: false
  });

  $("#section01 .logo").mouseenter(function() {
    $("#mega").addClass("on");
  });

  $("#mega").mouseleave(function() {
    $("#mega").removeClass("on");
  });

  const video = document.querySelector("#video01");
  $(".play_btn01").click(function() {
    video.play();
    $(this).fadeOut();
  });

  $("#video01").click(function() {
    video.pause();
    $(".play_btn01").fadeIn();
  });

  const video2 = document.querySelector("#video02");
  $(".play_btn02").click(function() {
    video2.play();
    $(this).fadeOut();
  });

  $("#video02").click(function() {
    video2.pause();
    $(".play_btn02").fadeIn();
  });

  $("#sub_slider .img").slick({
    dots: true, //네비게이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".prev"), //이전 화살표
    nextArrow: $(".next"), //다음 화살표
    autoplay: true, //자동넘김
    // autoplaySpeed: 2000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    // asNavFor: '.slider2', //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: false, //스와이프
    focusOnSelect: false, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    variableWidth: false
  });
  $("#section06 .top_btn").click(function() {
    $("#container")
      .stop()
      .animate({ scrollTop: 0 }, 1200, "easeInOutExpo");
  });

  // =========================
  // on event section      ===
  //==========================

  let value = $("#container .sub_1").height();
  let value2 = $("#container .sub_2").height();
  let value3 = $("#container .sub_4").height();

  $(".scroll_down_btn").click(function() {
    console.log($(this).attr("data-name"));

    if ($(this).attr("data-name") == "btn01") {
      $("#section04,#section05,#footer").removeClass("hidden");
      $("#container")
        .stop()
        .animate({ scrollTop: value }, 1200, "easeInOutExpo");
    } else if ($(this).attr("data-name") == "btn02") {
      $("#footer").removeClass("hidden");
      $("#container")
        .stop()
        .animate({ scrollTop: value2 }, 1200, "easeInOutExpo");
    } else if ($(this).attr("data-name") == "btn03") {
      $("#section04,#footer").removeClass("hidden");
      $("#container")
        .stop()
        .animate({ scrollTop: value3 }, 1200, "easeInOutExpo");
    }
  });

  //==============================================================
});

$(function() {
  // scroll event
  $(".container").scroll(function() {
    var scrollTop = $(".container").scrollTop();
    $(".posNum").text(scrollTop); // 스크롤값

    // =========================
    // scroll event section  ===
    //==========================

    if (scrollTop >= $("#container .sub_1").height() - innerHeight) {
      $(".sub_1 #section03").css("pointer-events", "initial");
    }

    if (scrollTop >= $("#container .sub_2").height() - innerHeight) {
      $(".sub_2 #section03").css("pointer-events", "initial");
    }

    if (scrollTop >= $("#container .sub_4").height() - innerHeight) {
      $(".sub_4 #section03").css("pointer-events", "initial");
    }
  });

  $(".sub_1 .scroll_container").scroll(function() {
    // console.log($(this).scrollLeft());

    if ($(this).scrollLeft() === 0) {
      $(".sub_1 #section03").css("pointer-events", "none");
    }
  });

  $(".sub_2 .scroll_container").scroll(function() {
    console.log($(this).scrollLeft());

    if ($(this).scrollLeft() === 0) {
      $(".sub_2 #section03").css("pointer-events", "none");
    }
  });

  $(".sub_4 .scroll_container").scroll(function() {
    console.log($(this).scrollLeft());

    if ($(this).scrollLeft() === 0) {
      $(".sub_4 #section03").css("pointer-events", "none");
    }
  });

  $("#section03 .page07 .back_btn").click(function() {
    $(".scroll_container")
      .stop()
      .animate({ scrollLeft: 0 }, 1200, "easeInOutExpo");
  });

  $("#section05 .top_btn").click(function() {
    $("#container")
      .stop()
      .animate({ scrollTop: 0 }, 1200, "easeInOutExpo");
  });
});
