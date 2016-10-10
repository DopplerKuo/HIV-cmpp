$(document).ready(function() {
  // 進入主要任務執行 step2
 w = $(window).width();
  if ( w >= 992 ) {
    $(".mission_hint").click(function(){
        var target = $(this).attr("data-game")
        $("#pop-step2").fadeIn(300);
        $("#pop-step2 .content").hide()
        $("#pop-step2 .content[data-game=" + target + "]").fadeIn(0)
    })
  } else {
    $(".mission_hint").click(function(){
        goFindIt = $(this).offset().top;
        $(document.body).animate({
          scrollTop: goFindIt
        })
    })
  }
 $(".step2 .step-btn").click(function(){
    var target = $(this).attr("data-game")
    $("#pop-step2").fadeIn(300);
    $("#pop-step2 .content").hide()
    $("#pop-step2 .content[data-game=" + target + "]").fadeIn(0)
 })
 $(".close").click(function(){
    $("#pop-step2").fadeOut(300);
    $("#pop-step3").fadeOut(300);
 })
  // 進入得幾名單 step3
 $(".step3 .step-btn").click(function(){
    var target = $(this).attr("data-game")
    $("#pop-step3").fadeIn(300);
    $("#pop-step3 .content").hide()
    $("#pop-step3 .content[data-game=" + target + "]").css("display","flex");
 })

 $("#pop-step-completed .btn.more").click(function() {
     $("#pop-step-completed").fadeOut(300);
 });
});

