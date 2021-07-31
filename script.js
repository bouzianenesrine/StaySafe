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
	if (covidLeft < 70 && covidLeft > 20 && persoTop >= 40) {
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
}, 30);

document.addEventListener("keydown", function (event) {
	jump();
});


        const btn = document.querySelector('#btn');
        // handle button click
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="mode"]');
			const rbs2 = document.querySelectorAll('input[name="char"]');
			
            let selectedMode;
			let selectedChar;

            for ( const rb of rbs ){
				for ( const rb2 of rbs2 ) {       
                if (rb.checked && rb2.checked) {
                    selectedMode = rb.value;
					selectedChar=rb2.value;
                    break;
                }
				}
            }
			
           // alert(selectedMode + " " + selectedChar  );

			if ( selectedMode == "dark" && selectedChar == "male") {
				//redirection 1 HD
				window.location.href = "index dark.html"  ;

		   } else if ( selectedMode =="dark" && selectedChar =="Female") { //redirection 2
			//FD   
			window.location.href = "indexFD.html"  ;
		   
	   		} else if ( selectedMode =="light" && selectedChar =="male") { //redirection 3 
			   //HL
			   window.location.href = "index.html"  ;

	   		} else if ( selectedMode =="light" && selectedChar =="Female") { //redirection 4 
		   //FL
		   window.location.href = "indexFL.html"  ;}	;
	   	}

		   const btn2 = document.querySelector('#btn2');
		   btn2.onclick = function () {
			window.location.href = "welcome.html";
		   }
