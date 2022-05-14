<?php
session_start();
if (isset($_SESSION['user']) && $_SESSION['user'] != null) {
	header("Location: ../../LoginRegistration.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Title</title>
	<!-- Required meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
</head>

<body>
	<div class="container">
		<form class="needs-validation" novalidate>
			<div class="form-group">
				<label for="nameInput">Full name</label>
				<input type="text" class="form-control needs-validation" id="nameInput" name="name" placeholder="Enter full name" required validate />
			</div>
			<div class="form-group">
				<label for="emailInput">Email address</label>
				<input type="email" class="form-control needs-validation" id="emailInput" name="email" placeholder="Enter email" required validate />
			</div>
			<div class="form-group">
				<label for="password Input">Password</label>
				<input type="password" class="form-control needs-validation" id="password Input" pattern="^(?=\S)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" name="password" placeholder="Password" required validate />
				<small id="emailHelp" class="form-text text-muted">Must contain at least one number and one uppercase and
					lowercase letter, and at least 8 or more
					character</small>
			</div>
			<input type="hidden" name="type" value="userRegistration" />
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div class="container">
		<a href="LoginRegistration.php">
			<button type="button" class="btn btn-primary">Login</button>
		</a>
	</div>
	<!-- Optional JavaScript -->
	<script>
		// Example starter JavaScript for disabling form submissions if there are invalid fields
		(function() {
			"use strict";
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.querySelectorAll(".needs-validation");
			// Loop over them and prevent submission
			Array.prototype.slice.call(forms).forEach(function(form) {
				form.addEventListener(
					"submit",
					function(event) {
						if (!form.checkValidity()) {
							event.preventDefault();
							event.stopPropagation();
						} else {
							handleSubmit(event);
						}
						form.classList.add("was-validated");
					},
					false
				);
			});
		})();
	</script>
	<script src="../scripts/Login.js"></script>
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>