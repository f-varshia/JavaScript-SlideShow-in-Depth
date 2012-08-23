Math.rnd = Math.random;
Math.random = function (a,b){
	return (a && b) ? Math.floor(Math.rnd()*(b-a+1))+a : Math.rnd() ;
}
$(function(){
	$images=$('div.gallery a');
	$maxwi=window.innerWidth;
	$maxhe=window.innerHeight;
	$images.each(function(){
		$(this).animate({
			left:Math.random(100,$maxwi-200),
			top:Math.random(100,$maxhe-200)
		},500);
	});

	$images.click(function(){
		$left=parseInt($(this).css("left"));
		$top=parseInt($(this).css("top"));
		$movex= ($left <($maxwi/2)) ? 5 : -5;
		$movey= ($top <($maxhe/2)) ? 5 : -5;
		$(this).animate({
			scale : [3, 3],
			translateY : $movey+'px',
			translateX : $movex+'px',
			/*rotate: '360deg'*/
		},2000);	
		
		return false;
	});
});