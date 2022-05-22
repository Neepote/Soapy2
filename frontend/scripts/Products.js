function handleSubmitProducts(event) {
	event.preventDefault();
	//takes form data and converts it into an object
	let fromData = new FormData(event.target);
	let parsed = Object.fromEntries(fromData);
	console.log(parsed);

	let form = parsed.type;
	delete parsed.type;
	//document.getElementsByClassName("form").reset();

	switch (form) {
		case "search":
			search(parsed);
			break;
		case "addProduct":
			insertProduct(parsed);
			break;
	}
}

function search(params) {
	params = params || { name: "" };

	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			console.log(result);
			if (result["type"] == "success") {
				//printAlert(result.message, "alert-primary");
				//table
				return result.data;
			} else if (result["type"] === "error") {
				printAlert(result.message, "alert-danger");
				console.error(result.message);
			}
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/GetProduct.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}

function insertProduct(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			if (result["type"] == "success") {
				printAlert(result.message, "alert-primary");
				search();
			} else if (result["type"] === "error") {
				printAlert(result.message, "alert-danger");
				console.error(result.message);
			}
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/AddProduct.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}

function deleteProduct(id) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			if (result["type"] == "success") {
				printAlert(result.message, "alert-primary");
				search();
			} else if (result["type"] === "error") {
				printAlert(result.message, "alert-danger");
				console.error(result.message);
			}
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify({ id: id });
	request.open("POST", "../../backend/controllers/DelProduct.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}
