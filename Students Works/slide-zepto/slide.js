$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train');
	
	gotopic=function(n){
		train.css({left:(-450*n)+'px'});
	}
	slidenav.click(function(){
		gotopic($(this).index());
	});
});