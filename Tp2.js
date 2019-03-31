var invalides = [ "$", "%", "&", "*", "?", "@", "À", "Â ", "Ç ", "È ", "É",
		"Ê ", "Ë ", "Î", "Ï", "Ô", "Ù", "Û", "à", "â", "è", "ç", "é", "ê", "ë",
		"î", "ï", "ô", "ù", "û" ];
function main() { 
	
document.getElementById('username').addEventListener("keypress", function(event){
	console.log("la valeur est : " + this.value[this.value.length-1]);
	if(invalides.includes(this.value)){
		this.style.backgroundColor = "green";
		console.log("bon");
	}else{
		this.style.backgroundColor = "red";
		console.log("mauvais");
	}
	
});

// document.getElementById('password').addEventListener("keypress", function(e){
// 	if(isNaN(e.keyCode)){
// 		this.style.backgroundColor = "green";
// 	}else{
// 		this.style.backgroundColor = "red";
// 	}
// });


function FormValidation(e) {
	var username = document.getElementById('username').value;
	if (username.length === 0) {
		console.log('Rentrer votre code utilisateur');
		document.getElementById('username').style.borderColor = "red";
	} else {
		document.getElementById('username').style.borderColor = "green";
	}

	for (var i = 0; i < document.getElementById("username").value.length; i++) {
		for (var j = 0; j <  invalides.length; j++) {
			if (username.toLowerCase()[i] == invalides[j]) {
				console.log("Votre nom contient des symboles");
				document.getElementById('username').style.backgroundColor = 'red';
			} else {
				document.getElementById('username').style.backgroundColor = "green";
			}
		}
	}
	

	if (username.length <= 5) {
		console.log('Votre nom est trop court');
		document.getElementById('username').style.borderColor = "red";
	} else {
		document.getElementById('username').style.borderColor = "green";
	}
	
	e.preventDefault();
}
	
}

window.onload =main;