function D10Id(F){
return document.getElementById(F);
}
window.onload = function(){
	var z = D10Id("Desktop10");
	var y = D10Id("D10-StartButton");
	var x = D10Id("D10-StartMenu");
	var w = D10Id("D10-LeftNav-More");
	var v = D10Id("D10-LeftNav");
	var u = D10Id("D10-LeftNav-Bg");
	var a = D10Id("testeditclass");
	a.onclick = function(){
		if(z.className=="D10-minTaskbar"){
			z.className = "";
			a.innerHTML = "Use small Taskbar";
		}else{
			z.className = "D10-minTaskbar";
			a.innerHTML = "Don't use small Taskbar";
		}
	}
	y.onclick = function(){
		if(x.className=="D10-openStartMenu"){
			x.className = "";
			y.className = "";
			v.className = "";
			u.className = "";
		}else{
			x.className = "D10-openStartMenu";
			y.className = "D10-StartButtonClicked";
		}
	}
	w.onclick = function(){
		if(v.className=="D10-openLeftNav"){
			v.className = "";
			u.className = "";
		}else{
			v.className = "D10-openLeftNav";
			u.className = "D10-openLeftNav-Bg";
		}
	}
	u.onclick = function(){
		if(v.className=="D10-openLeftNav"){
			v.className = "";
			u.className = "";
		}
	}
	z.onmousedown = function(){
		if(x.className=="D10-openStartMenu"){
			x.className = "";
			y.className = "";
		}
		if(v.className=="D10-openLeftNav"){
			v.className = "";
			u.className = "";
		}
	}
	y.onmousedown = function(e){
		e = e||event; N(e);
	}
	x.onmousedown = function(e){
		e = e||event; N(e);
	}
	function N(e){
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;	   
	}
}