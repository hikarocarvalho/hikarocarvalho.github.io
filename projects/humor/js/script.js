const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
function change(value){
	if(value == "happy" || value == "angry"){
	
		document.getElementById("name").innerHTML = "Monkey D' Luffy "+value;
		if(value=="angry"){
			document.getElementById("name").style.color="red";
		}
		else{
			document.getElementById("name").style.color="lime";
		}

	}else{
		document.getElementById("name").innerHTML = "Monkey D' Luffy "+value;
		if(value=="idiot"){
			document.getElementById("name").style.color="blue";
		}
		else{
			document.getElementById("name").style.color="yellow";
		}
		
	}
	document.getElementById("luffy").src="imgs/"+value+".png";
	console.log("img/"+value+".png");
	return 0;
}