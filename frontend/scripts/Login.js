//handles users login form
function handleSubmit(event) {
	event.preventDefault();
	//takes form data and converts it into an object
	let fromData = new FormData(event.target);
	let parsed = Object.fromEntries(fromData);

	let form = parsed.type;
	delete parsed.type;

	console.log(parsed);

	switch (form) {
		case "userLogin":
			loginUser(parsed);
			break;
		case "userRegistration":
			registerUser(parsed);
			break;
		case "search":
			search(parsed);
			break;
	}
}

function registerUser(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			console.log(result);
			if (result["type"] == "success") window.location.href = "Home.php";
			else if (result["type"] === "error") console.error(result.message);
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/RegisterUser.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}

function loginUser(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			//console.log(request.responseText);
			let result = JSON.parse(request.responseText);
			console.log(result);
			if (result["type"] == "success") window.location.href = "Home.php";
			else if (result["type"] === "error") console.error(result.message);
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/LoginUser.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}

function logoutUser() {
	//event.preventDefault();
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		window.location.href = "Home.php";
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta

	request.open("POST", "../../backend/LogoutUser.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
}

function search(params) {}
