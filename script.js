const perso = document.getElementById("perso");
const covid = document.getElementById("covid");
//document.getElementById("HscoreSpan").innerHTML = counter;
var score = 0;
var hscore = 0;



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
	if (covidLeft < 70 && covidLeft > 20 && persoTop >= 80 /*140*/) {
		// collision
		alert('Game over! score :'+ score);
		score = 0;
	}//calcul score
	 else {
		score++;
		//document.getElementById("hscoreSpan").innerHTML = hscore;
		document.getElementById("scoreSpan").innerHTML = score;
		if(score >= hscore){
			hscore = score
			document.getElementById("hscoreSpan").innerHTML = hscore;
		}
	}
}, 10);

document.addEventListener("keydown", function (event) {
	jump();
});