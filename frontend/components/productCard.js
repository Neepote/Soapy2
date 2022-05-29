function printProductCard(item) {
	return `
		<div class="card" style="width: 18rem;" onclick="redirectToProduct('${item.name}')">
			<img class="card-img-top" src="${item.image}" alt="${item.name}">
			<div class="card-body">
				<h5 class="card-title">${item.name}</h5>
				<p class="card-text">${item.description}</p>
				<p class="card-text">${item.price}€</p>
			</div>
		</div>
	`;
}

function printProducts(data) {
	let cont = document.getElementById("products");
	let row = document.createElement("div");
	row.classList = "row justify-content-md-center align-items-center";
	data.map(function (item) {
		row.innerHTML += `
		<div class="col-md-auto align-self-start">
			${printProductCard(item)}
		</div>
	`;
	});
	cont.replaceChildren(row);
}

function printProductPage(item) {
	let cont = document.getElementById("productSingle");
	let row = document.createElement("div");
	row.classList = "row justify-content-md-center align-items-center";
	row.innerHTML = `
		<div class="col-md-12 col-lg-6" align-self-start">
			<img class="img-fluid rounded w-100" src="${item.image}" alt="${item.name}"/>
		</div>
		<div class="col-md-12 col-lg-3 text-center align-self-center">
			<h2 class="card-title">${item.name}</h2>
			<p class="card-text">${item.description}</p>
			<p class="card-text">${item.price}€</p>
		</div>
		<div class="col-md-12 col-lg-3 text-center align-self-center">
			<form class="form-inline" onsubmit="handleSubmitBasket(event)">
				<label for="quantity">
					Quantity
				</label>
				<div class="input-group mb-2 mr-sm-2">
					<input
						class="form-control mr-sm-2"
						name="quantity"
						type="number"
						aria-label="Quantity"
						max="${item.quantity}"
						min="1"
						value="1"
					/>
					<input type="hidden" name="id" value="${item.id}" />
					<input type="hidden" name="name" value="${item.name}" />
					<input type="hidden" name="image" value="${item.image}" />
					<input type="hidden" name="price" value="${item.price}" />
					<input type="hidden" name="type" value="addToBasket" />
					${
						sessionStorage["user"] != null
							? '<button type="submit" class="btn btn-success"'
									.concat(
										item.status === "out_of_stock"
											? "disabled"
											: ""
									)
									.concat(">Aggiungi al carrello</button>")
							: '<a href="./UserRegistration.html" class="btn btn-primary">Per poter acquistare devi essere registrato!</a>'
					}
				</div>
			</form>
		</div>
		`;
	cont.replaceChildren(row);
}

function redirectToProduct(name) {
	console.log("fsdf");
	window.location.href = `./ProdottoPage.html?name=${name}`; /* 
	search({ name: name })
		.then(function (data) {
			sessionStorage.setItem("product", JSON.stringify(data[0]));
			
		})
		.catch(function (error) {
			//printAlert(error, "alert-danger");
			console.error(error);
		}); */
}
