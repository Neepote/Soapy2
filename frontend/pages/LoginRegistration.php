<?php
include '../components/head.php';
include '../components/bottom.php';
?>
<!DOCTYPE html>
<html lang="en">
<script type="text/javascript">
	if (JSON.parse(sessionStorage.user) != null) {
		window.location.href = "../pages/Home.php";
	}
</script>

<?php showHead(); ?>

<body>
	<div class="container">
		<form onsubmit="handleSubmitLogin(event)">
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" required />
			</div>
			<input type="hidden" name="type" value="userLogin" />
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div class="container">
		<a href="UserRegistration.php">
			<button type="button" class="btn btn-primary">Registrati</button>
		</a>
	</div>
	<?php showBottom(); ?>
</body>

</html>