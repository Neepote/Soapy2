<?php

// recupera i dati inviati tramite metodo POST
$dati = json_decode(file_get_contents('php://input'), true);

// apre una connessione con il database
include "../../config/connectionDB.php";
$conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB . "; port=" . PORT, USER, PASSWORD);

/**
 * Gets all the products
 *
 * @param string|null $name
 * @return JSON
 */
function GetProducts(string $name)
{

    global $conn;

    $sql = "SELECT * FROM products";

    if ($name != "") {
        $sql .= " WHERE name LIKE '%$name%'";
    }

    $stmt = $conn->prepare($sql);

    $red = null;
    try {
        $red = $stmt->execute();
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            return json_encode(array("type" => "error", "message" => "Prodotto già presente nel database"));
        }
        return json_encode(array("type" => "error", "message" => $th->getMessage()));
    }
    if ($red) {
        return json_encode(array(
            "type" => "success", "message" => "Selezione eseguita con successo!",
            "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)
        ));
    } else {
        return json_encode(array("type" => "error", "message" => "Errore nella selezione'."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (GetProducts(
    $dati['name']
));
