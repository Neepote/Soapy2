/**
 * genera i segmenti della barra di navigazione
 */
function showNavbar() {
	document.open();
	document.write(
		`<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="Home.html">Soapy2</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
					${navbarItem("Home", "Home.html")}
					${navbarItem("Prodotti", "Prodotti.html")}
				</ul>
            </div>
			<div id="basket">
				${basket()}
			</div>
            <div id="userAccount">
				${navbarDomUser()}
			</div>
        </nav>`
	);
	document.close();
}

/**
 * Crea un segmento link per la barra di navigazione
 * @param {*} name 
 * @param {*} path 
 * @returns 
 */
function navbarItem(name, path) {
	return `
	<li class=" nav-item, ${
		window.location.pathname.includes(path) ? "active" : ""
	}">
		<a class="nav-link" href="${path}">${name}</a>
	</li>
	`;
}

/**
 * Aggiunge il segmento dell'utente alla barra di navigazione
 * @returns 
 */
function navbarDomUser() {
	let user = JSON.parse(sessionStorage.getItem("user"));
	if (user === null) {
		return `
		<a href="../pages/UserRegistration.html">
			<button type="button" class="btn btn-primary">Registrati</button>
		</a>`;
	} else {
		return `
		<span class="navbar-text"> 
            ${user["full_name"]}
        </span>
		<a href="">
            <button onclick="logoutUser(event)" class="btn btn-outline-danger">logout</button>
		</a>`;
	}
}

/**
 * aggiunge il segmento del carrello alla barra di navigazione
 * @returns 
 */
function basket() {
	let basket = JSON.parse(localStorage.getItem("basket"));
	console.log(basket);
	if (basket == null) {
		basket = [];
	}
	let user = JSON.parse(sessionStorage.getItem("user"));
	if (user !== null) {
		return `
		<a href="CheckOutPage.html" class="btn btn-link btn-lg">
			<i class="fa fa-cart-plus" style="color:gray"> ${basket.length}</i>	
        </a>
	`;
	} else {
		return ``;
	}
}

