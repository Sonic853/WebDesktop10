function minTaskbar(){
	var z = document.getElementById("Desktop10");
	var y = document.getElementById("testeditclass");
	if(z.className=="minTaskbar"){
		z.className = "";
		y.innerHTML = "Use small Taskbar";
	}else{
		z.className = "minTaskbar";
		y.innerHTML = "Don't Use small Taskbar";
	}
}
