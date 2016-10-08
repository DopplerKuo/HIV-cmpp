$(document).ready(function() {
  $(".qa-section input[type='radio']").change(function() {
    var target = $(".qa-section input[type='radio']:checked")
    var r_n = target.length
    if ( r_n >= 5) {
      var n = 0;
      target.each(function(){
        var thisN = parseInt($(this).attr("data-point"))
        n += thisN
      })
      $("#pop-step2 .btn.result").addClass('go')
      $("#pop-step2 .btn.result").text("立即看看結果")
      $("#pop-step2 .btn.result.go").click(function() {
        $("#pop-step2 .form_result").css("display","flex")
        $(".loading").delay(1400).fadeOut(300);
        $(".form_result_text").hide()
        if ( n >= 81 ) {
          $(".r8-10").show()
        }
        else if ( n >= 61 ) {
          $(".r6-8").show()
        }
        else if ( n >= 41 ) {
          $(".r4-6").show()
        }
        else if ( n >= 21 ) {
          $(".r2-4").show()
        }
        else if ( n >= 0 ) {
          $(".r0-2").show()
        }
      })
    } else {
      $("#pop-step2 .btn.result").text("有題目未作答")
    }
  });
});

