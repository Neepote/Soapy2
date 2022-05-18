<?php
session_start();


function showNavbar()
{
    echo '
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand" href="Home.php">Soapy2</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">';
    echo '
                <li class="nav-item ', $_SESSION['page'] == "home" ? "active" : "", '">
                    <a class="nav-link" href="Home.php">Home</a>
                </li>';
    echo '
                <li class="nav-item ', $_SESSION['page'] == "prodotti" ? "active" : "", '">
                    <a class="nav-link" href="Prodotti.php">Prodotti</a>
                </li>';



    echo '   </ul>
        </div>
        <div id="userAccount"></div>
    </nav>';
}
