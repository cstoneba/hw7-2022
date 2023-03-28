let video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay=false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {

	let slider = document.querySelector("#slider");
	let volume_output = document.querySelector("#volume");
	volume_output.innerHTML= slider.value;
	slider.oninput = function(){
	volume_output.innerHTML = this.value + "%";
	};
	document.querySelector("#player1").load();
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume + "%";

	document.querySelector("#mute").addEventListener("click", function(){
		if(slider.value > 0){
			slider.value = 0;
			volume_output = 0;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	
		else{
			slider.value = 100;
			volume_output = 100;
			document.querySelector("#mute").innerHTML = "Mute";
	
		}
	})

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




document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});



