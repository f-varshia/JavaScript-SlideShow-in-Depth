$(function(){
	var delay=0;
	$('.menunav li').each(function(){
		var that=this;
		setTimeout(function(){
			$(that).animate({
				left:-100	
			},500,'ease-out');	
		},delay+=150);
	}).mouseover(function(){
		$(this).animate({
			left:-150
		});
	}).mouseout(function(){
		$(this).animate({
			left:-100
		});
	});
});