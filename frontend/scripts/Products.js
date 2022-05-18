//handles users login form
function handleSubmitProducts(event) {
	event.preventDefault();
	//takes form data and converts it into an object
	let fromData = new FormData(event.target);
	let parsed = Object.fromEntries(fromData);

	let form = parsed.type;
	delete parsed.type;

	console.log(parsed);

	switch (form) {
		case "search":
			search(parsed);
			break;
		case "addProduct":
			insertProduct(parsed);
			break;
	}
}

function search(params) {}

function insertProduct(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			console.log(result);
			if (result["type"] == "success") console.log(result);
			else if (result["type"] === "error") console.error(result.message);
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/AddProduct.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}
