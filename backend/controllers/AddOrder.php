<?php

// recupera i dati inviati tramite metodo POST
$dati = json_decode(file_get_contents('php://input'), true);

// apre una connessione con il database
include "../../config/connectionDB.php";
$conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB . "; port=" . PORT, USER, PASSWORD);

/**
 * * Inserimento di un nuovo prodotto
 *
 * @param string $name
 * @param string $description
 * @param string $image
 * @param int $price
 * @param int $quantity
 * @return JSON
 */
function newOrder(
    $user_id,
    $products
) {
    global $conn;
    $sql = "INSERT INTO
    orders (user_id, created_at)
        VALUES
            (
                :user_id,
                NOW()
            )";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":user_id", $user_id);

    $red = null;
    try {
        $red = $stmt->execute();
    } catch (PDOException  $th) {
        return json_encode(array("type" => "error", "message" => $th->getMessage()));
    }
    if ($red) {
        $id = $conn->lastInsertId();
        foreach ($products as $p) {
            $sql = "INSERT INTO
            order_items (order_id, product_id, quantity)
                VALUES
                    (
                        :order_id,
                        :product_id,
                        :quantity
                    )";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":order_id", $id);
            $stmt->bindParam(":product_id", $p['id']);
            $stmt->bindParam(":quantity", $p['quantity']);

            $red = null;
            try {
                $red = $stmt->execute();
            } catch (PDOException  $th) {
                return json_encode(array("type" => "error", "message" => $th->getMessage()));
            }
        }
        return json_encode(array("type" => "success", "message" => "Ordine eseguito con successo!"));
    } else {
        return json_encode(array("type" => "error", "message" => "Errore nella creazione dell'ordine."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (newOrder(
    $dati['userId'],
    $dati['products']
));
