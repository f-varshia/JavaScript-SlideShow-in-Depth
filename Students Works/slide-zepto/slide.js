$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train'),
	next=$('.next');
	previous=$('.previous');	
	current=0;
	
	gotopic=function(n){
		if(n < 0) n=slidenav.length-1; 
		if(n >= slidenav.length) n=0; 
		train.css({left:(-450*n)+'px'});
		slidenav.eq(current).removeClass('active');
		slidenav.eq(n).addClass('active');
		current=n;
	}
	slidenav.click(function(){
		gotopic($(this).index());
	});
	next.click(function(){
		gotopic(current+1);	
	});
	previous.click(function(){
		gotopic(current-1);	
	});
});