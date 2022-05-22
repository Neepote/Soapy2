<?php

// recupera i dati inviati tramite metodo POST
$dati = json_decode(file_get_contents('php://input'), true);

// apre una connessione con il database
include "../../config/connectionDB.php";
$conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB . "; port=" . PORT, USER, PASSWORD);

/**
 * deletes a product
 *
 * @param string $id
 * @return void
 */
function DelProducts(string $id)
{

    global $conn;

    $sql = "DELETE FROM products WHERE id = :id";

    $stmt = $conn->prepare($sql);

    $red = null;
    try {
        $red = $stmt->execute(array(
            ':id' => $id
        ));
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            return json_encode(array("type" => "error", "message" => "Prodotto già presente nel database"));
        }
        return json_encode(array("type" => "error", "message" => $th->getMessage()));
    }
    if ($red) {
        return json_encode(array(
            "type" => "success", "message" => "Eliminazione eseguita con successo!",
            "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)
        ));
    } else {
        return json_encode(array("type" => "error", "message" => "Errore nell'eliminazione."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (DelProducts(
    $dati['id']
));
