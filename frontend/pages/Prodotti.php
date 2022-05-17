<?php
include '../components/navbar.php';
include '../components/head.php';
include '../components/bottom.php';
$_SESSION['page'] = "prodotti";
?>
<!DOCTYPE html>
<html lang="en">

<?php showHead(); ?>

<body>
    <?php
    showNavbar();
    ?>
    <div class="container">
        <form class="form mt-3" onsubmit="handleSubmit(event)">
            <div class="input-group mb-3">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <input type="hidden" name="type" value="search">
                <div class="input-group-append">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </form>
    </div>
    <div class="container-fluid" id="products">
    </div>
    <?php showBottom(); ?>
</body>

</html>