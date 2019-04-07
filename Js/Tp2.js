var invalides = /[^a-zA-Z0-9]/;
function main() {

	var userName = document.getElementById('username');
	userName.addEventListener("keyup", function(event) {
		if (!invalides.exec(userName.value)) {
			this.style.backgroundColor = "white";
		} else {
			this.style.backgroundColor = "red";
		}

	});
	
	var pass =document.getElementById('pass');
	pass.addEventListener("keyup", function(e){
		if (!isNaN(pass.value)) {
			this.style.backgroundColor = "white";
		} else {
			this.style.backgroundColor = "red";
		}
	});

	document.getElementById('seConn').addEventListener("click", function FormValidation(event){
		var username = document.getElementById('username').value;
		if (username.length == 0) {
			alert('Rentrer votre code utilisateur');
			document.getElementById('username').style.borderColor = "red";
			event.preventDefault();
		} else {
			document.getElementById('username').style.borderColor = "green";
		}
		
		for (var i = 0; i < document.getElementById("username").value.length; i++) {
			for (var j = 0; j <  invalides.length; j++) {
				if (username.toLowerCase()[i] == invalides[j]) {
					alert("Votre nom contient des symboles");
					document.getElementById('username').style.backgroundColor = 'red';
				} else {
					document.getElementById('username').style.backgroundColor = "green";
				}
			}
		}

		if (username.length < 5) {
			alert('Votre nom est trop court');
			document.getElementById('username').style.borderColor = "red";
		} else {
			document.getElementById('username').style.borderColor = "green";
		}
		
		if(window.localStorage){
			var couleur = document.forms["formulaire"]["carte"];
			localStorage.setItem("Couleur choisie", couleur.value);
			var usernname = document.forms["formulaire"]["username"];
			localStorage.setItem("Nom d'utilisateur", username.value);
			var pass = document.forms["formulaire"]["password"];
			localStorage.setItem("Mot de pass", pass.value);
		}else{
			alert("Votre browser ne supporte pas local Storage");
		}
	});
	

}

window.onload = main;