function toast(a,b){
	if(!a){
		return
	}else if(document.getElementById('toats')){
		return
	}

	var ToatsDom = document.createElement("div"); 
		ToatsDom.innerHTML = a;
		ToatsDom.id = 'toats';
		ToatsDom.style.position = 'fixed';
		ToatsDom.style.top = '50%';
		ToatsDom.style.left = '50%';
		ToatsDom.style.opacity = '0.8';
		ToatsDom.style.background = '#000';
		ToatsDom.style.color = '#fff';
		ToatsDom.style.padding = '10px';
		ToatsDom.style.maxWidth = '160px'
	var Bl = document.body.firstChild; 

	document.body.insertBefore(ToatsDom,Bl)

	var ThisDom = document.getElementById('toats');
	var ThisDomWidth = ThisDom.offsetWidth;
	var ToatsDomLeft = '-'+(ThisDomWidth/2)+'px';

		ToatsDom.style.marginLeft = ToatsDomLeft;

		if(b){
			setTimeout('remove()',b)
		}else{
			setTimeout('remove()',3000)
		}
			
	}

 function remove(){
	var ThisDom = document.getElementById('toats');
	if (!ThisDom) {
		return
	}else{
		ThisDom.parentNode.removeChild(ThisDom);
	}
 }
