window.onload=function(){
	var slideshow=document.getElementsByClassName('slideshow').item(0);
	var slidenav=slideshow.getElementsByClassName('slidenav').item(0).getElementsByTagName('li');
	var train=slideshow.getElementsByClassName('train').item(0);
	var nextpic=document.getElementsByClassName('next').item(0);
	var prepic=document.getElementsByClassName('previes').item(0);
	var footerpic=document.getElementsByClassName('footer').item(0).getElementsByTagName('div');
	var current=0;
	(go2pic=function(n){
		if(n >=slidenav.length)n=0;
		if(n <0)n=slidenav.length-1;		
		train.style.left=(-480*n)+'px';
		slidenav.item(current).className ='';
		footerpic.item(current).className ='';
		footerpic.item(n).className ='foot';
		slidenav.item(n).className ='active';
		current=n;
	})(0);
	for(var i=0 ; i<slidenav.length ;i++){
		(function(j){
			var j;
			footerpic.item(j).onclick=function(){
				go2pic(j);
				atuoplaystop();
			}
			slidenav.item(j).onclick=function(){
				go2pic(j);
				atuoplaystop();
			}
		})(i);
	}
	next=function(){
		go2pic(current+1);	
	}
	setiv=false;
	atuoplaystart=slideshow.onmouseout=function(){
		if(setiv) return;
			setiv=setInterval(next,2500);	
	}	
	atuoplaystop=slideshow.onmouseover=function(){
		clearInterval(setiv);
		setiv=false;
	}	

	
	nextpic.onclick=function(){
		go2pic(current+1);
		atuoplaystop();
				
	}
	prepic.onclick=function(){
		go2pic(current-1);
		atuoplaystop();		
	}
	atuoplaystart();
}
