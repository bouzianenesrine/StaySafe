const perso = document.getElementById("perso");
const covid = document.getElementById("covid");

function jump() {
	if(perso.classList != "jump"){
		perso.classList.add("jump");

		setTimeout(function () {
			perso.classList.remove("jump");
		}, 300);
	}
}

let isAlive = setInterval(function() {
	//get current person Y position
	let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
	
	//get current virus X position
	let covidLeft = parseInt(window.getComputedStyle(covid).getPropertyValue("left"));

	//detect collision
	if (covidLeft < 70 && covidLeft > 20 && persoTop >= 140) {
		// collision
		alert("Game over!");
	}

}, 10);

document.addEventListener("keydown", function (event) {
	jump();
});