function showNavbar() {
    document.open();
      document.write(  
      `<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="Home.php">Soapy2</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
					${navbarItem("Home","Home.php")}
					${navbarItem("Prodotti","Prodotti.php")}
				</ul>
            </div>
            <div id="userAccount"></div>
        </nav>`
  );
    document.close();
}

function navbarItem(name, path){
	let currentPage= sessionStorage.getItem("user");
	document.write(`
	<li class="nav-item ', ${currentPage == name ? "active" : ""}, '">
		<a class="nav-link" href="Home.php">Home</a>
	</li>
	`)
}t


function navbarDomUser() {
	let div = document.getElementById("userAccount");
	div.innerHTML = "";
	let user = JSON.parse(sessionStorage.getItem("user"));
	if (user === null) {
		div.innerHTML = `
		<a href="../pages/UserRegistration.php">
			<button type="button" class="btn btn-primary">Registrati</button>
		</a>`;
	} else {
		div.innerHTML = `
		<span class="navbar-text"> 
            ${user["full_name"]}
        </span>
		<a href="">
            <button onclick="logoutUser(event)" class="btn btn-outline-danger">logout</button>
		</a>`;
	}
}

