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
	basket.push(item);
	localStorage.setItem("basket", JSON.stringify(basket));
	window.location.href = "./Prodotti.html";
}
