<?php

// recupera i dati inviati tramite metodo POST
$dati = json_decode(file_get_contents('php://input'), true);

// apre una connessione con il database
include "../../config/connectionDB.php";
$conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB . "; port=" . PORT, USER, PASSWORD);

/**
 * Inserimento di un nuovo prodotto
 *
 *
 * @param [type] $name
 * @param [type] $description
 * @param [type] $url
 * @param [type] $price
 * @param [type] $status
 * @return void
 */
function newProduct($name, $description, $image, $price, $status)
{

    global $conn;
    $sql = "INSERT INTO products (name,description,image,price,status) VALUES (:name,:description,:image,:price,:status)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":description", $description);
    $stmt->bindParam(":image", $image);
    $stmt->bindParam(":price", $price);
    $stmt->bindParam(":status", $status);

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
        return json_encode(array("type" => "success", "message" => "Inserimento eseguito con successo!"));
    } else {
        return json_encode(array("type" => "error", "message" => "Errore nell'inserimento'."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (newProduct(
    $dati['name'],
    $dati['description'],
    $dati['url'],
    $dati['price'],
    $dati['status']
));
