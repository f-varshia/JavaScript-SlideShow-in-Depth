Math.rnd = Math.random;
Math.random = function (a,b){
	return (a && b) ? Math.floor(Math.rnd()*(b-a+1))+a : Math.rnd() ;
}
$(function(){
	$images=$('div.gallery a');
			$images.animate({
				left: Math.random(10,800),
				top:Math.random(10,800)
			},500);
})