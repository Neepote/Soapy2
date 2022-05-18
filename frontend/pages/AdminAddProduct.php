<?php
include '../components/navbar.php';
include '../components/head.php';
include '../components/bottom.php';
$_SESSION['page'] = "adminAddProduct";

if ($_SESSION['user'])

?>
<!DOCTYPE html>
<html lang="en">

<?php showHead(); ?>

<body>
	<?php
	showNavbar();
	?>

	<!-- form tha takes the name of a product, the description of the product, a url, the price and status of the product -->
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>Add a new product</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<form action="handleSubmit(event)" method="post">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" name="name" placeholder="Enter name">
					</div>
					<div class="form-group">
						<label for="description">Description</label>
						<textarea class="form-control" id="description" name="description" rows="3"></textarea>
					</div>
					<div class="form-group">
						<label for="url">URL</label>
						<input type="text" class="form-control" id="url" name="url" placeholder="Enter URL">
					</div>
					<div class="form-group">
						<label for="price">Price</label>
						<input type="number" class="form-control" id="price" name="price" placeholder="Enter price">
					</div>
					<div class="form-group">
						<label for="status">Status</label>
						<select class="form-control" id="status" name="status">
							<option>out_of_stock</option>
							<option>in_stock</option>
							<option>running_low</option>
						</select>
					</div>
					<input type="hidden" name="type" value="addProduct" />
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>




		<?php showBottom(); ?>
</body>

</html>