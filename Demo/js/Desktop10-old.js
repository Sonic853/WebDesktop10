function D10Id(F){
return document.getElementById(F);
}
function AddClass(F,Class){
	D10Id(F).classList.toggle(Class);
}
function ToggleClass(F,Class){
	switch(F) {
		case "D10-LeftNav":
			D10Id(F).classList.toggle("D10-openLeftNav");
			D10Id("D10-LeftNav-Bg").classList.toggle("D10-openLeftNav-Bg");
			break;
		case "D10-StartMenu":
			if(D10Id(F).classList.contains("D10-openStartMenu")){
				D10Id("D10-LeftNav").classList.remove("D10-openLeftNav");
				D10Id("D10-LeftNav-Bg").classList.remove("D10-openLeftNav-Bg");
				D10Id(F).classList.remove("D10-openStartMenu");
				D10Id("D10-StartButton").classList.remove("D10-StartButtonClicked");
			}else{
				D10Id(F).classList.add("D10-openStartMenu");
				D10Id("D10-StartButton").classList.add("D10-StartButtonClicked");
				D10Id("D10-LeftMenu").scrollTop = 0;
				if(D10Id("D10-Desktop").offsetHeight < 490){
					D10Id("D10-StartMenu").style.height = "390px";
				}else if((D10Id("D10-Desktop").offsetHeight - 100) < D10Id("D10-StartMenu").offsetHeight){
					D10Id("D10-StartMenu").style.height = (D10Id("D10-Desktop").offsetHeight - 100) + "px";
				}
			}
			break;
		case "Desktop10":
			D10Id("Desktop10").classList.toggle("D10-minTaskbar");
			break;
		default:
			D10Id(F).classList.toggle(Class);
	}
}
function HideClass(F,Class){
	switch(F) {
		case "D10-LeftNav":
			D10Id(F).classList.remove("D10-openLeftNav");
			D10Id("D10-LeftNav-Bg").classList.remove("D10-openLeftNav-Bg");
			break;
		case "D10-StartMenu":
//			D10Id("D10-LeftMenu").scrollTop = 0;
			D10Id(F).classList.remove("D10-openStartMenu");
			D10Id("D10-StartButton").classList.remove("D10-StartButtonClicked");
			break;
		default:
			D10Id(F).classList.remove(Class);
	}
}
//var GetCss = function(F,K){
//	return F.currentStyle? F.currentStyle[K] : document.defaultView.getComputedStyle(F,false)[K]; 	
//};
function D10Ife(F,e){
	switch(F) {
		case "D10-StartButtonClicked":
			if(D10Id("D10-StartButton").classList.contains(F)){
				e = e || event; e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
			}
			break;
		default:
			console.log("Error.");
	}
}
function D10Drag(Get,Target){
	var params = {
		height: 0,
		width: 0,
		left: 0,
		top: 0,
		cursorX: 0,
		cursorY: 0,
		flag: false
	};
	if(Get == "D10-MenuTop-AdjustHeight" && Target == "D10-Desktop"){
		D10Id(Get).onmousedown = function(e){
			if((D10Id(Target).offsetHeight - 390) < 100){
				D10Id("D10-StartMenu").style.height = "390px";
			}else{
				params.flag = true;
				params.currentY = e.clientY;
				params.height = D10Id("D10-StartMenu").offsetHeight;
				if(!e) {
					e = window.e;
					//防止文字选中
					D10Id(Get).onselectstart = function() {
						return false;
					}
				}
			}
		}
		document.onmouseup = function(e){
			params.flag = false;
		}
		document.onmousemove = function(e){
			var e = e ? e: window.e;
			if(params.flag){
				if((D10Id(Target).offsetHeight - 390) < 100){
					D10Id("D10-StartMenu").style.height = "390px";
				}else{
					var nowY = e.clientY,disY = nowY - params.currentY;
					D10Id("D10-StartMenu").style.height = (params.height - disY) + "px";
					if(D10Id("D10-StartMenu").offsetHeight < 390){
						D10Id("D10-StartMenu").style.height = "390px";
					}else if((D10Id(Target).offsetHeight - D10Id("D10-StartMenu").offsetHeight) < 100){
						D10Id("D10-StartMenu").style.height = (D10Id(Target).offsetHeight - 100) + "px";
					}
				}
				if(event.preventDefault){
				event.preventDefault();
				}
				return false;
			}
		}
	}else if(Get == "D10-Window-Title" && Target.indexOf("D10-WindowBoxs-") == 0){
		D10Id(Target).getElementsByClassName(Get)[0].onmousedown = function(e){
			params.flag = true;
			params.currentX = e.clientX;
			params.currentY = e.clientY;
			params.left = D10Id(Target).offsetLeft;
			params.top = D10Id(Target).offsetTop;
			if(!e) {
				e = window.e;
				//防止文字选中
				D10Id(Get).onselectstart = function() {
					return false;
				}
			}
		}
		document.onmouseup = function(e){
			if(D10Id(Target).offsetTop < 0){
				D10Id(Target).style.top = "0px";
			}
			params.flag = false;
		}
		document.onmousemove = function(e){
			var e = e ? e: window.e;
			if(params.flag){
				var nowX = e.clientX,disX = nowX - params.currentX;
				var nowY = e.clientY,disY = nowY - params.currentY;
				D10Id(Target).style.left = (params.left+ disX) + "px";
				D10Id(Target).style.top = (params.top + disY) + "px";
				if(event.preventDefault){
				event.preventDefault();
				}
				return false;
			}
		}
	}
}
window.onload = function(){
	D10Id("testeditclass").onclick = function(){
		ToggleClass("Desktop10");
	}
	D10Id("D10-StartButton").onclick = function(){
		ToggleClass("D10-StartMenu");
	}
	D10Id("D10-LeftNav-More").onclick = function(){
		ToggleClass("D10-LeftNav");
	}
	D10Id("D10-LeftNav-Bg").onclick = function(){
		HideClass("D10-LeftNav");
	}
	D10Id("Desktop10").onmousedown = function(){
		HideClass("D10-LeftNav");
		HideClass("D10-StartMenu");
	}
	
	D10Id("D10-Taskbar").onmousedown = function(e){
		D10Ife("D10-StartButtonClicked",e);
	}
	D10Id("D10-StartMenu").onmousedown = function(e){
		D10Ife("D10-StartButtonClicked",e);
	}
//	this.onmousedown = function(e){
//		alert(this);
//	}
//	for(var i = 0;i<document.querySelectorAll("[id^=D10-WindowBoxs-]").length;i++){
//		
//	}
//	alert(document.querySelectorAll("[id^=D10-WindowBoxs-]").length);
	D10Drag("D10-MenuTop-AdjustHeight","D10-Desktop");
	D10Drag("D10-Window-Title","D10-WindowBoxs-1");
	D10Drag("D10-Window-Title","D10-WindowBoxs-2");
}
//	document.getElementById("D10-Desktop").offsetHeight;
//	document.getElementById("D10-StartMenu").offsetHeight;
//	alert(document.getElementById("D10-Desktop").offsetHeight);