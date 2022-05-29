function handleSubmitBasket(event) {
	event.preventDefault();
	//takes form data and converts it into an object
	let fromData = new FormData(event.target);
	let parsed = Object.fromEntries(fromData);
	console.log(parsed);

	let form = parsed.type;
	delete parsed.type;
	//document.getElementsByClassName("form").reset();

	switch (form) {
		case "addToBasket":
			addItemToBasket(parsed);
			break;
	}
}

function addItemToBasket(item) {
	let basket = JSON.parse(localStorage.getItem("basket"));
	if (basket == null) {
		basket = [];
	}
	let index = basket.findIndex((x) => x.name == item.name);
	if (index == -1) {
		basket.push(item);
	} else {
		basket[index].quantity =
			parseInt(basket[index].quantity) + parseInt(item.quantity);
	}
	localStorage.setItem("basket", JSON.stringify(basket));
	window.location.href = "./Prodotti.html";
}

function showBasket() {
	let basket = JSON.parse(localStorage.getItem("basket"));
	if (basket == null) {
		basket = [];
	}
	let total = 0;
	for (let i = 0; i < basket.length; i++) {
		total += basket[i].price * basket[i].quantity;
	}

	main = document.getElementById("basketList");
	main.innerHTML = "";
	let h3 = document.createElement("h3");
	h3.innerHTML = "Carrello";
	main.appendChild(h3);
	main.appendChild(createBasketTable(basket));
	let h4 = document.createElement("h4");
	h4.innerHTML = `Totale: ${total}`;
	main.appendChild(h4);
}

function handleRemoveProduct(name) {
	let basket = JSON.parse(localStorage.getItem("basket"));
	let index = basket.findIndex((x) => x.name == name);
	if (basket[index].quantity > 1) {
		basket[index].quantity--;
	} else {
		basket.splice(index, 1);
	}
	localStorage.setItem("basket", JSON.stringify(basket));
	showBasket();
}
