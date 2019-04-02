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

	var couleurCarte = (window.location.href).substr((window.location.href)
			.lastIndexOf("=") + 1);

	function Cartes(cle, valeur) {
		this.cle = cle;
		this.image = new Image();
		this.image.src = "images/" + couleurCarte + "/" + cle;
		this.image.alt = couleurCarte + cle;
		document.body.appendChild(this.image);
		this.valeur = valeur;
	}

	var LesCartes = [ new Cartes("as.jpg", 1), new Cartes("deux.jpg", 2),
			new Cartes("trois.jpg", 3), new Cartes("quatre.jpg", 4),
			new Cartes("cinq.jpg", 5), new Cartes("six.jpg", 6),
			new Cartes("sept.jpg", 7), new Cartes("huit.jpg", 8),
			new Cartes("neuf.jpg", 9), new Cartes("dix.jpg", 10),
			new Cartes("valet.jpg", 10), new Cartes("dame.jpg", 10),
			new Cartes("roi.jpg", 10) ];

	
	setTimeout(function(){
		CartesBanque();
		MaCarte();
	},50);
	
	
	
	var contexteBanque;
	function CartesBanque() {

		var indexBanque = Math.floor(Math.random() * 13);
		var boiteBanque = document.getElementById('boiteBanque');
		contexteBanque = boiteBanque.getContext('2d');
		var imageBanque = LesCartes[indexBanque].image;
		contexteBanque.drawImage(imageBanque, 45, 20, 165, 220);

	}
	
	
	var contexteMes;
	function MaCarte() {

		var index = Math.floor(Math.random() * 13);
		var boiteMesCartes = document.getElementById('boiteMesCartes');
		contexteMes = boiteMesCartes.getContext('2d');
		var image = LesCartes[index].image;
		contexteMes.drawImage(image, 45, 20, 165, 220);

	}

	
	
	
	
	
	
	var arreter = document.getElementById("arrete");
	arreter.onclick = function clear() {
		clearInterval(interval);
	}

	var rejouer = document.getElementById("rejouer");
	rejouer.onclick = function recetTimer() {
		clearInterval(interval);
		chrono();
	}

	var newCarte = document.getElementById("newCarte");
	newCarte.addEventListener("click", function(){
		MaCarte();
	});

}

window.onload = main;
