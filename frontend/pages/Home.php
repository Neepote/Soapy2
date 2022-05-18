<?php
include '../components/navbar.php';
include '../components/head.php';
include '../components/bottom.php';
$_SESSION['page'] = "home";

?>
<!DOCTYPE html>
<html lang="en">
<?php showHead(); ?>

<body>
    <?php
    showNavbar();
    ?>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" style="overflow: hidden; height: 500px">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class=".img-fluid w-100" src="https://image.shutterstock.com/z/stock-vector-soap-making-ingredients-banner-in-color-hand-sketched-aromatic-materials-for-cosmetics-perfumery-2055212831.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class=".img-fluid w-100" src="https://image.shutterstock.com/z/stock-vector-cosmetic-banner-template-merging-realistic-botanical-soaps-with-cute-hand-drawn-floral-background-1682166739.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class=".img-fluid w-100" src="https://image.shutterstock.com/image-photo/beautiful-natural-soap-bars-ingredients-600w-2091027505.jpg" alt="Third slide">
            </div>
        </div>
    </div>

    <?php showBottom(); ?>
</body>

</html>