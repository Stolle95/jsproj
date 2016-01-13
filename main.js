/**
 * Place your JS-code here.
 */
 
 var rand, audio, currentPlayText="info", currentAnimal, currentPage="info", soundOn=false, playImage=document.getElementById("playText");


function setCurrentAnimal(a)
{
	console.log(a);
	currentAnimal=a;
	localStorage.setItem("currentAnimal", currentAnimal);

}

function playHoverSound(s)
{
	if(soundOn==true)
	{
		stopHoverSound();
	}
	else
	{
	audio = new Audio('sounds/'+s+".wav");
	audio.play();
	soundOn=true;
	}
	
}
function stopHoverSound()
{
	audio.pause();
	audio.currentTime = 0;
	soundOn=false;
}

function stopSound()
{
	audio.pause();
	audio.currentTime = 0;
	playImage.src="images/speakerOff.png"
	soundOn=false;
	
}

document.getElementById("playText").onclick=function(){

	if(soundOn==true)
	{
		console.log("Sound is playing, stoping it");
		stopSound();
		
		
	}
	else
	{
		console.log("spelar: "+currentPlayText);
		currentAnimal = localStorage.getItem("currentAnimal");
		audio = new Audio('sounds/'+currentAnimal+currentPage+".wav");
		audio.play();
		soundOn=true;
		playImage.src="images/speaker.png";
	}


	
};

//Visar endast ett div element med information, detta styrs med style.display*/

	document.getElementById("infoBtn").onclick=function(){
	btn = document.getElementById("infoBtn");
	document.getElementById("info").style.display = 'block';
	document.getElementById("live").style.display = 'none';
	document.getElementById("eat").style.display = 'none';
	document.getElementById("extra").style.display = 'none';
	currentPlayText="info";
	currentPage="info";
	stopSound();
	
};
document.getElementById("liveBtn").onclick=function(){
	document.getElementById("info").style.display = 'none';
	document.getElementById("live").style.display = 'block';
	document.getElementById("eat").style.display = 'none';
	document.getElementById("extra").style.display = 'none';
	currentPlayText="live";
	currentPage="live";
	stopSound();

};
document.getElementById("eatBtn").onclick=function(){
	document.getElementById("info").style.display = 'none';
	document.getElementById("live").style.display = 'none';
	document.getElementById("eat").style.display = 'block';
	document.getElementById("extra").style.display = 'none';
	currentPlayText="eat";
	currentPage="eat";
	stopSound();
};
document.getElementById("extraBtn").onclick=function(){
	document.getElementById("info").style.display = 'none';
	document.getElementById("live").style.display = 'none';
	document.getElementById("eat").style.display = 'none';
	document.getElementById("extra").style.display = 'block';
	currentPlayText="extra";
	currentPage="extra";
	stopSound();
};/*

Image slider
var imgSlider,src, counter = 2;

function initSlider(){
    imgSlider = document.getElementById("slider");
    src = document.getElementById("slider").src;
	console.log(src);
}
document.getElementById("slider").onclick=function(){
	initSlider();
	/*window.setInterval(function(){
  	updateSlider();
}, 5000);
};
function updateSlider()
{

	src = src.substring(0, src.length - 5);
	src+=counter+".jpg";
	imgSlider.src=src;
	counter++;
	if(counter>=6)
		counter=1;

}*/

