$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train');
	
	slidenav.click(function(){
		train.css({left:'-900px'});
	});

});