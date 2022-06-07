$(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() != 0){
      $("#header").addClass("nofixed");
      $(".section_quick").css("display","block");
    }else{
      $("#header").removeClass("nofixed");
      $(".section_quick").css("display","none");
    }
    })
  $(document).ready(function(){
      $("#header").hover(function(){
        $(this).addClass("on");

      }, function(){
        $(this).removeClass("on");
      });

      $("#gnb ul li").hover(function(){
        $(this).addClass("on");
      }, function(){
        $(this).removeClass("on");
      });
    });
    $(".b_btn").click(function(){
      $("#visual").toggle("paused");
      if($(this).hasClass("play")){
        $(this).css("background-image",url("../img/btn-stop.png"));
      }else {
        $(this).css("background-image",url("../img/btn-play.png"));
      }
    })

    $(".slick-list .slick-slide").hover(function(){
        $(this).addClass("slick-current");
    }, function(){
      $(this).removeClass("slick-current");
    });

    $(".slick-list .slick-slide").click(function(){
      $(this).toggleClass("slick-current");
    })

    $(".price.effect_cont dl").hover(function(){
      $(this).addClass("on");
    }, function(){
      $(this).removeClass("on");
    });

    $(".sub_tab > li:last").click(function(){
      $(".sub_tab > li:first").removeClass("tab_up");
      $(".sub_tab > li:last").addClass("tab_up");
      $(".price > div:first").css("display","none");
      $(".price > div:last").css("display","block");
    });
    $(".sub_tab > li:first").click(function(){
      $(".sub_tab > li:last").removeClass("tab_up");
      $(".sub_tab > li:first").addClass("tab_up");
      $(".price > div:last").css("display","none");
      $(".price > div:first").css("display","block");
    });

    console.log($("#mCSB_1_container").offset().left);

  });
function m_hide(){
  $("#topNotice").addClass("none");
}
