<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
        function logoutUser(event) {
            event.preventDefault();
            var request = new XMLHttpRequest();

            // rimane in ascolto di una eventuale risposta con esito positivo della richiesta inviata in precedenza
            request.onreadystatechange = function() {
                window.location.href = "Home.php";
            };

            // prepara la richiesta inserendo i dati da inviare
            // per il login invieremo una richiesta post inserendo i dati nel body della richiesta

            request.open("POST", "../../backend/LogoutUser.php", true);
            request.setRequestHeader("Content-Type", "application/json");
            request.send();
        }
    </script>
</head>

<body>
    <?php
    if (isset($_SESSION['user']) && $_SESSION['user'] != null) {
        echo "<button onclick='logoutUser(event)'>logout</button>";
    } else {
        echo     '<a href="LoginRegistration.php">
					<button>login</button>
				</a>';
    }
    ?>
</body>

</html>