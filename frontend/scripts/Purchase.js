/**
 * Gestisce gli eventi per gli acquisti
 * @param {*} event
 */
function handleAcquisto(event) {
	//event.preventDefault();
	let user = JSON.parse(sessionStorage.getItem("user"));
	let products = JSON.parse(localStorage.getItem("basket"));
	console.log(products);
	let params = {};
	params["userId"] = user["id"];
	params["products"] = [];
	products.forEach(function (product) {
		params["products"].push({ id: product.id, quantity: product.quantity });
	});
	console.log(params);
	insertProduct(params);
}

/**
 * Invia una chiamata rest per inserire gli acquisti
 * @param {*} params
 */
function insertProduct(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			if (result["type"] == "success") {
				console.log(result);
				localStorage.setItem("basket", JSON.stringify([]));
				alert("Acquisto effettuato con successo!");
				window.location.href = "Home.html";
			} else if (result["type"] === "error") {
				console.error(result.message);
			}
		}
	};

	// prepara la richiesta inserendo i dati da inviare
	// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
	var parametri = JSON.stringify(params);
	request.open("POST", "../../backend/controllers/AddOrder.php", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(parametri);
}
