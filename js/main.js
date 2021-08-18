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
  Logic();

  $("#container").niceScroll({
    cursorcolor: "#fff",
    cursorwidth: 4,
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

  // ===========================================================
  //click , mouseenter , mouseleave move event section
  //===========================================================

  // const container = document.querySelector("#container");
  // const stage = document.querySelector("#container .main");

  // function pager(nextPage, index) {
  //   container.removeAttribute("class");
  //   setTimeout(() => {
  //     container.setAttribute("class", nextPage);
  //   }, 700);

  //   stage.style.transform = `translateX(-${innerWidth * index}px)`;
  // }

  // function wheelFunc(e) {
  //   let value = e.deltaY;

  //   if (value < 0) {
  //     // up
  //     if (container.classList.contains("page-4")) {
  //       pager("page-3", 2);
  //     } else if (container.classList.contains("page-3")) {
  //       pager("page-2", 1);
  //     } else if (container.classList.contains("page-2")) {
  //       pager("page-1", 0);
  //     }
  //   } else {
  //     //down
  //     if (container.classList.contains("page-1")) {
  //       pager("page-2", 1);
  //     } else if (container.classList.contains("page-2")) {
  //       pager("page-3", 2);
  //     } else if (container.classList.contains("page-3")) {
  //       pager("page-4", 3);
  //     }
  //   }
  // }

  // window.addEventListener("wheel", wheelFunc);

  console.log(innerWidth);

  const stage = $("#container .main");

  $(".next_btn").click(function() {
    if ($(this).attr("data-name") === "page01") {
      stage.css("transform", `translateX(-${innerWidth}px)`);
    } else if ($(this).attr("data-name") === "page02") {
      stage.css("transform", `translateX(-${innerWidth * 2}px)`);
    } else if ($(this).attr("data-name") === "page03") {
      stage.css("transform", `translateX(-${innerWidth * 3}px)`);
    }
    // else if ($(this).attr('data-name') === 'page04') {
    //     stage.css('transform', `translateX(-${innerWidth * 4}px)`);

    // }
  });

  $(".pre_btn").click(function() {
    if ($(this).attr("data-name") === "page02") {
      stage.css("transform", `translateX(${0}px)`);
    } else if ($(this).attr("data-name") === "page03") {
      stage.css("transform", `translateX(-${innerWidth}px)`);
    } else if ($(this).attr("data-name") === "page04") {
      stage.css("transform", `translateX(-${innerWidth * 2}px)`);
    }
  });

  //==============================================================
});
