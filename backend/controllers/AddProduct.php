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
function newProduct($id, $name, $description, $image, $price, $quantity)
{

    $id = $id != null && $id > 0 ? $id : null;
    $quantity = (int) $quantity;
    $status = "";

    if ($quantity > 10) {
        $status = "in_stock";
    } else if ($quantity > 0) {
        $status = "running_low";
    } else {
        $quantity = 0;
        $status = "out_of_stock";
    }

    global $conn;
    $sql = "INSERT INTO
    products (id, name, description, image, price, status, quantity)
            VALUES
                (
                    :id,
                    :name,
                    :description,
                    :image,
                    :price,
                    :status,
                    :quantity
                )";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":description", $description);
    $stmt->bindParam(":image", $image);
    $stmt->bindParam(":price", $price);
    $stmt->bindParam(":status", $status);
    $stmt->bindParam(":quantity", $quantity);

    $red = null;
    try {
        $red = $stmt->execute();
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            $sql = "UPDATE products SET name = :name, description= :description, image= :image, price= :price, status= :status, quantity= :quantity WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":description", $description);
            $stmt->bindParam(":image", $image);
            $stmt->bindParam(":price", $price);
            $stmt->bindParam(":status", $status);
            $stmt->bindParam(":quantity", $quantity);

            $red = null;
            try {
                $red = $stmt->execute();
            } catch (PDOException  $th) {

                return json_encode(array("type" => "error", "message" => $th->getMessage()));
            }
            if ($red) {
                return json_encode(array("type" => "success", "message" => "Aggiornamento eseguito con successo!"));
            } else {
                return json_encode(array("type" => "error", "message" => "Errore nell'aggiornamento'."));
            }
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
    $dati['id'],
    $dati['name'],
    $dati['description'],
    $dati['url'],
    $dati['price'],
    $dati['quantity']
));
