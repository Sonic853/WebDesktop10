var d = document;
window.onload = function(){
	var z = d.getElementById("Desktop10");
	var y = d.getElementById("D10-StartButton");
	var x = d.getElementById("D10-StartMenu");
	var w = d.getElementById("D10-LeftNav-More");
	var v = d.getElementById("D10-LeftNav");
	var u = d.getElementById("D10-LeftNav-Bg");
	var a = d.getElementById("testeditclass");
	a.onclick = function(){
		if(z.className=="minTaskbar"){
			z.className = "";
			a.innerHTML = "Use small Taskbar";
		}else{
			z.className = "minTaskbar";
			a.innerHTML = "Don't Use small Taskbar";
		}
	}
	y.onclick = function(){
		if(x.className=="openStartMenu"){
			x.className = "";
			y.className = "";
		}else{
			x.className = "openStartMenu";
			y.className = "StartButtonClicked";
		}
	}
	w.onclick = function(){
		if(v.className=="openLeftNav"){
			v.className = "";
			u.className = "";
		}else{
			v.className = "openLeftNav";
			u.className = "openLeftNav-Bg";
		}
	}
	u.onclick = function(){
		if(v.className=="openLeftNav"){
			v.className = "";
			u.className = "";
		}
	}
	z.onmousedown = function(){
		if(x.className=="openStartMenu"){
			x.className = "";
			y.className = "";
		}
		if(v.className=="openLeftNav"){
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