let menu = document.querySelector("#icono");
let enlaces = document.querySelector("#enlaces");
let activado = false;

menu.addEventListener("click",()=>{
	if (activado===false){
		enlaces.className=("enlaces dos")		
		activado=true;
	}else{
		enlaces.classList.remove("dos")
		enlaces.className=("enlaces uno")		
		activado=false;
	}
});