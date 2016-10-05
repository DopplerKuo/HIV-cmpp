$(document).ready(function() {
//// =================載入共用元素================== ////
  $("#nav").load('/assets/_nav.html')



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

	$(".ilove-btn").click(function() {
		$(".game").removeClass('default');
		$(this).parent(".game").addClass('show');
	});

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

