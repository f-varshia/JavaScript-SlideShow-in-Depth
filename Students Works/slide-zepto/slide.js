$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train'),
	current=0;
	
	gotopic=function(n){
		train.css({left:(-450*n)+'px'});
		slidenav.eq(current).removeClass('active');
		slidenav.eq(n).addClass('active');
		current=n;
	}
	slidenav.click(function(){
		gotopic($(this).index());
	});
});