<?php
session_start();


// recupera i dati inviati tramite metodo POST
$dati = json_decode(file_get_contents('php://input'), true);


// apre una connessione con il database
include "../config/connectionDB.php";
$conn = new PDO("mysql:host=" . HOST . "; dbname=" . DB . "; port=" . PORT, USER, PASSWORD);

/**
 * lancia una query per inserire un utente nel database
 *
 * @param [string] $email
 * @param [string] $password
 * @return [string] risultato della query
 */
function newUser($email, $password)
{
    // non vengono fatti controlli ma la logica è la stessa di quella usa
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return json_encode(array("error" => "Email non valida"));
    }
    //filter password
    if (!isset($password)) {
        return json_encode(array("error" => "Password non valida"));
    }

    global $conn;
    $sql = "SELECT * FROM user WHERE email= ?;";
    $red = null;
    try {
        $red = $conn->prepare($sql);
        $red->execute([$email]);
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            return json_encode(array("type" => "error", "message" => "Email già presente nel database"));
        }
        throw $th;
    }

    if ($red) {
        $row = $red->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $row['password'])) {
            $_SESSION["user"] = $row['email'];

            return json_encode(array("success" => "Login eseguito con successo!"));
        } else {
            return json_encode(array("error" => "Password non valida."));
        }
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (newUser(
    $dati['email'],
    $dati['password']
));
