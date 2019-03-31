function main() {

	var date = new Date();
	var jour = date.getDate();
	var semaine = date.getDay();
	var mois = date.getMonth();
	var annee = date.getFullYear();
	var monthNames = [ "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December" ];
	var joursSemaine = [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi",
			"Vendredi", "Samedi" ];

	document.getElementById("date").innerHTML = "Date: "
			+ joursSemaine[semaine] + ", " + jour + " " + monthNames[mois]
			+ " " + annee;
	chrono();

	var interval;
	function chrono() {
		var min = 0;
		var sec = 0;
		interval = setInterval(tick, 1000);
		document.getElementById("chrono").innerHTML = "0" + min + ":0" + sec;

		function tick() {
			sec++;
			if (sec == 60) {
				min += 1;
				sec = 0;
			}

			if (sec < 10 && min < 10) {
				document.getElementById("chrono").innerHTML = "0" + min + ":0"
						+ sec;
			} else if (sec < 10) {
				document.getElementById("chrono").innerHTML = min + ":0" + sec;
			} else if (min < 10) {
				document.getElementById("chrono").innerHTML = "0" + min + ":"
						+ sec;
			} else {
				document.getElementById("chrono").innerHTML = min + ":" + sec;
			}

		}
	}

		var boiteBanque = document.getElementById('boiteBanque');
		var contexteBanque = boiteBanque.getContext('2d');
		var image = document.getElementById('image');
		
		contexteBanque.drawImage(image,45,20,165,220);
		
		var boiteMesCartes = document.getElementById('boiteMesCartes');
		var contexteMes = boiteMesCartes.getContext('2d');
		var image = document.getElementById('image');
		
		contexteMes.drawImage(image,45,20,165,220);

	var arreter = document.getElementById("arrete");
	arreter.onclick = function clear() {
		clearInterval(interval);
	}

	var rejouer = document.getElementById("rejouer");
	rejouer.onclick = function recetTimer() {
		clearInterval(interval);
		chrono();
	}

	function newCarte() {

	}

}

window.onload = main;
