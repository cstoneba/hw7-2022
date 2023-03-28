let video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay=false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});


document.querySelector("#play").addEventListener("click", function() {document.querySelector("#player1").load();
	
	console.log("Play Video");
	video.play();
	video.muted = true;

});



document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log(video.currentTime);
	
});

mute_button = document.querySelector("#mute");

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted){
		video.muted = false; 
		mute_button.innerHTML = "Mute";
	}

	else{
		video.muted = true;
		mute_button.innerHTML = "Unmute";

	}
});


document.querySelector("#slider").addEventListener("change", function(){
	
	let slider = document.querySelector("#slider");
	console.log(slider.value);
	let volume = document.querySelector("#volume");

	// Update the current slider value (each time you drag the slider handle)
	volume.innerHTML = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});



