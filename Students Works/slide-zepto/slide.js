$(function(){
	var slidenav=$('.slideshow .slidenav li'),
	train=$('.slideshow .train');	
	current=0;
	
	(gotopic=function(n){
		if(n < 0) n=slidenav.length-1; 
		if(n >= slidenav.length) n=0; 
		train.animate({left:(-450*n)+'px'},1000,'ease-in-out');
		slidenav.eq(current).removeClass('active');
		slidenav.eq(n).addClass('active');
		current=n;
	})(0);
	slidenav.click(function(){
		gotopic($(this).index());
	});
	$('.next').click(nextf=function(){
		gotopic(current+1);	
	});
	$('.previous').click(function(){
		gotopic(current-1);
	});
	var iv=false;
	(atuoplaystart=function(){
		if(!iv)
		iv=setInterval(nextf,2000);
		return;		
	})();
	atuoplaystop=function(){
		clearInterval(iv);
		iv=false;		
	}
	$('.slideshow').mouseover(atuoplaystop);
	$('.slideshow').mouseout(atuoplaystart);
});