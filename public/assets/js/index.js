$(document).ready(function() {
//// =================載入共用元素================== ////
  $("#nav").load('/assets/_nav.html', function(){
    $("#nav").append('<div class=\"btn menu-btn\"></div>')
    $("#nav .menu-btn").click(function() {
      $('#nav').toggleClass('show');
    });
  })
  $("#form").load('/assets/_form.html')



// youtube-box  
  $('.play-video').click(function() {
    $('.youtube-box').fadeIn(300); 
  });
  $('.youtube-box .img-bg-black').click(function() {
    $('.youtube-box').fadeOut(0);
    var src = $(".youtube-box iframe").attr('src');
    $(".youtube-box iframe").attr('src', src);
  });
// youtube-box END

	$(".shadow").click(function() {
    var target = $(this).attr("data-game")
		$(".game").removeClass('default');
		$(".game[data-game=" + target + "]").addClass('show');
    $(".pop-msg").delay(1200).fadeIn(300);
    $(".pop-g").hide();
    $(".pop-g[data-game=" + target + "]").css("display","flex");
	});
  $(".pop-msg").click(function(){
    $(".pop-msg").fadeOut(300);
    $(".pop-g").hide();
  })

	$(".goback").click(function() {
		$(".game").removeClass('show');
		$(".game").addClass('default');
	});
}); // document ready end





//// ================== reveal =================== ////
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);

