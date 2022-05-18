//handles users login form
function handleSubmitLogin(event) {
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
	}
}

function registerUser(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			console.log(result);
			if (result["type"] == "success") loginUser(params);
			else if (result["type"] === "error") console.error(result.message);
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/RegisterUser.php", true);
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
			if (result["type"] == "success") {
				sessionStorage.setItem("user", JSON.stringify(result["data"]));
				console.log(sessionStorage.getItem("user"));
				window.location.href = "Home.php";
			} else if (result["type"] === "error")
				console.error(result.message);
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/LoginUser.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}

function logoutUser() {
	sessionStorage.removeItem("user");
}

function navbarDomUser() {
	let div = document.getElementById("userAccount");
	div.innerHTML = "";
	let user = JSON.parse(sessionStorage.getItem("user"));
	if (user === null) {
		div.innerHTML = `
		<a href="../pages/UserRegistration.php">
			<button type="button" class="btn btn-primary">Registrati</button>
		</a>`;
	} else {
		div.innerHTML = `
		<span class="navbar-text"> 
            ${user["full_name"]}
        </span>
		<a href="">
            <button onclick="logoutUser(event)" class="btn btn-outline-danger">logout</button>
		</a>`;
	}
}

navbarDomUser();
