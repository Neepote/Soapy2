/**
 * crea un elemento per mostrare degli "alert" response message
 * @param {*} message
 * @param {*} type
 */
function printAlert(message, type) {
	let divContainer = document.createElement("div");
	divContainer.innerHTML = `
					<div class="alert ${type}" role="alert">
					${message}
					</div>
				`;
	divContainer.onclick = function () {
		this.innerHTML = "";
	};
	document.getElementById("alert").append(divContainer);
}

/**
 * gestisce la stampa per la pagina admin per il CRUD (create, read, update, delete) dei prodotti
 * @param {*} data
 */
function printAdminAddProduct(data) {
	document
		.getElementById("tabella")
		.replaceChildren(adminCreateProductTable(data));
	//form
	document
		.getElementById("productForm")
		.replaceChildren(createProductForm("", "", "", "", "", ""));
}
