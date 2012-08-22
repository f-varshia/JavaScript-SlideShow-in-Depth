Math.rnd = Math.random;
Math.random = function (a,b){
	return (a && b) ? Math.floor(Math.rnd()*(b-a+1))+a : Math.rnd() ;
}
$(function(){
	$images=$('div.gallery a');
	$maxwi=window.innerWidth;
	$maxhe=window.innerHeight;
	for(var $i=0;$i< $images.length ;$i++){
		(function(){
			$images.eq($i).animate({
				left: Math.random(10,$maxwi-200),
				top:Math.random(10,$maxhe-200)
			},500);
		})($i);
	}
})