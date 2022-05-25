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

function printAdminAddProduct(data) {
	document
		.getElementById("tabella")
		.replaceChildren(adminCreateProductTable(data));
	//form
	document
		.getElementById("productForm")
		.replaceChildren(createProductForm("", "", "", "", "", ""));
}
