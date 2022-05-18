<?php
include '../components/head.php';
include '../components/bottom.php';
?>
<!DOCTYPE html>
<script type="text/javascript">
	if (JSON.parse(sessionStorage.user) != null) {
		window.location.href = "../pages/Home.php";
	}
</script>
<html lang="en">

<?php showHead(); ?>

<body>
	<div class="container">
		<form class="needs-validation" novalidate>
			<div class="form-group">
				<label for="nameInput">Full name</label>
				<input type="text" class="form-control needs-validation" id="nameInput" pattern="([A-Za-z])+(( ){1}([A-Za-z])+)*" name="full_name" placeholder="Enter full name" required validate />
			</div>
			<div class="form-group">
				<label for="emailInput">Email address</label>
				<input type="email" class="form-control needs-validation" id="emailInput" name="email" placeholder="Enter email" required validate />
			</div>
			<div class="form-group">
				<label for="password Input">Password</label>
				<input type="password" class="form-control needs-validation" id="password Input" pattern="^(?=\S)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" name="password" placeholder="Password" required validate />
				<small id="emailHelp" class="form-text text-muted"> La password deve contenere almeno un numero, una lettera maiuscola e deve essere lunga almeno 8 caratteri</small>
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
							handleSubmitLogin(event);
						}
						form.classList.add("was-validated");
					},
					false
				);
			});
		})();
	</script>
	<?php showBottom(); ?>
</body>

</html>