/**
 * Gestisce gli eventi per i prodotti
 * @param {*} event
 */
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
			search(parsed)
				.then(function (data) {
					printProducts(data);
				})
				.catch(function (error) {
					//printAlert(error, "alert-danger");
					console.error(error);
				});
			break;
		case "addProduct":
			insertProduct(parsed);
			break;
	}
}

/**
 * invia una richiesta rest per la ricerca dei prodotti
 * @param {*} params nome del prodotto da cercare
 * @returns
 */
function search(params) {
	params = params || { name: "" };
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				let result = JSON.parse(request.responseText);
				console.log(result);
				if (result["type"] == "success") {
					resolve(result.data);
				} else if (result["type"] === "error") {
					reject(result.message);
				}
			}
		};
		// prepara la richiesta inserendo i dati da inviare
		// per il login invieremo una richiesta post inserendo i dati nel body della richiesta
		var parametri = JSON.stringify(params);
		request.open("POST", "../../backend/controllers/GetProduct.php", true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(parametri);
	});
}

/**
 * invia una richiesta rest per l'inserimento di un prodotto
 * @param {*} params dati del prodotto da inserire
 */
function insertProduct(params) {
	var request = new XMLHttpRequest();

	// rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			if (result["type"] == "success") {
				printAlert(result.message, "alert-primary");
				search()
					.then(function (data) {
						printAdminAddProduct(data);
					})
					.catch(function (error) {
						printAlert(error, "alert-danger");
						console.error(error);
					});
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
				search()
					.then(function (data) {
						printAdminAddProduct(data);
					})
					.catch(function (error) {
						printAlert(error, "alert-danger");
						console.error(error);
					});
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
