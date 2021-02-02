document.getElementById('sign-up-button').onclick=function(){
	document.getElementById("left").style.transform="translateX(-800px)";
	
	document.getElementById("right-panel").style.transform="translateX(800px)";
	document.getElementById("right-panel").style.opacity="0";
	document.getElementById("left-panel").style.opacity="1";
	document.getElementById("left-panel").style.transform="translateX(0)";
	document.getElementById("right").style.opacity="1";
	document.getElementById("right").style.transform="translateX(0)";
	document.getElementById("right").style.zIndex="8";

	
};

document.getElementById('sign-in-button').onclick=function(){
	document.getElementById("left-panel").style.transform="translateX(-800px)";
	document.getElementById("right-panel").style.opacity="1";
	document.getElementById("right").style.transform="translateX(800px)";

	
	document.getElementById("left").style.transform="translateX(0)";
	document.getElementById("right-panel").style.transform="translateX(0)";
	document.getElementById("left").style.zIndex="8";

	
};

