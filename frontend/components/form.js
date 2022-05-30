/**
 * crea il form per l'aggiunta di un prodotto dalla pagina dell'admin
 * @param {*} id
 * @param {*} name
 * @param {*} description
 * @param {*} url
 * @param {*} price
 * @param {*} quantity
 * @returns
 */
function createProductForm(id, name, description, url, price, quantity) {
	id = id || "";
	name = name || "";
	description = description || "";
	url = url || "";
	price = price || "";
	quantity = quantity || "";

	let cont = document.createElement("div");

	cont.innerHTML = `
        <input type="hidden" name="id" value="${id}"/>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" value="${name}">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3">${description}</textarea>
        </div>
        <div class="form-group">
            <label for="url">URL</label>
            <input type="text" class="form-control" id="url" name="url" placeholder="Enter URL" value="${url}">
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" id="price" name="price" placeholder="Enter price" value="${price}" pattern="^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$" >
        </div>
        <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="number" class="form-control" id="quantity" name="quantity" placeholder="Enter quantity" value="${quantity}" pattern="^[1-9][0-9]*$">
        </div>
        <input type="hidden" name="type" value="addProduct" />
    `;

	return cont;
}
