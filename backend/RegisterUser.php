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

    $password = password_hash($password, PASSWORD_DEFAULT);

    global $conn;
    $sql = "INSERT INTO `soapy2`.`users`
                (
                `full_name`,
                `email`,
                `password`,
                `role`)
            VALUES
                ?,
                ?,
                ?,
                ?
                );";
    $red = null;
    try {
        $red = $conn->prepare($sql)->execute([$email, $password]);
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            return json_encode(array("error" => "Email già presente nel database"));
        }
        throw $th;
    }

    if ($red) {

        return json_encode(array("success" => "Registrazione eseguita con successo!"));
    } else {
        return json_encode(array("error" => "Errore nella registrazione."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (newUser(
    $dati['email'],
    $dati['password']
));
