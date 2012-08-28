$(function(){
	var delay=0;
	$('.menunav li').each(function(){
		var that=this;
		setTimeout(function(){
			$(that).animate({
				left:-40	
			},500,'ease-out');	
		},delay+=150);
	}).mouseover(function(){
		$(this).animate({
			left:-60,
		},300,'ease-in');
	}).mouseout(function(){
		$(this).animate({
			left:-40
		},300,'ease-out');
	});
});