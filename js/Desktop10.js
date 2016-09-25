var d = document;
function minTaskbar(){
	var z = d.getElementById("Desktop10");
	var y = d.getElementById("testeditclass");
	if(z.className=="minTaskbar"){
		z.className = "";
		y.innerHTML = "Use small Taskbar";
	}else{
		z.className = "minTaskbar";
		y.innerHTML = "Don't Use small Taskbar";
	}
}