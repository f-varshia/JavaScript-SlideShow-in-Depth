$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train');
	
	slidenav.click(function(){
		alert($(this).index());	
	});

});