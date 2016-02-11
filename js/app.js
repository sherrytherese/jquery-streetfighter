$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','619px');
			});
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
	//.keydown("x",function() {
	//alert("x was pressed");
	//$('.ryu-ready').hide();
	//$('.ryu-cool').show();
	//});
});
$(document).keydown("x",function() {
	//alert("x was pressed");
	$('.ryu-ready').hide();
	$('.ryu-cool').show();
});
$(document).keyup("x",function() {
	$('.ryu-ready').show();
	$('.ryu-cool').hide();
});
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}