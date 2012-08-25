Math.rnd = Math.random;
Math.random = function (a,b){
	return (a && b) ? Math.floor(Math.rnd()*(b-a+1))+a : Math.rnd() ;
}
$(function(){
	var images=$('div.gallery a'),
		maxwi=window.innerWidth,
		maxhe=window.innerHeight,
		delay=0;
	images.each(function(){
	var that=this;	
		setTimeout(function(){
			$(that).animate({
				left:Math.random(10,maxwi-200),
				top:Math.random(10,maxhe-200),
				/*rotate : (Math.random(1,360)+'deg')*/
			},1200,'ease-in-out');
		},delay+=300);
	}).click(function(){
		//===========  just to scale inside the page
		var movex=movey=0;
		lefti=parseInt($(this).css("left"));
		topi=parseInt($(this).css("top"));
		movex= (lefti <(maxwi/2)) ? 10 : -10;
		movey= (topi <(maxhe/2)) ? 10 : -10;
		//===========
		$(this).animate({
			scale : [-3, -3],
			rotate : ('180deg'),
			translate :[ movex+'px',movey+'px']
		},1200,'ease-out');	
		
		return false;
	});
});