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
 * @param [string] $full_name
 * @return [string] risultato della query
 */
function newUser($email, $password, $full_name)
{
    $password = password_hash($password, PASSWORD_DEFAULT);
    $role = "user";

    global $conn;
    $sql = "INSERT INTO users (email, password, full_name, role) VALUES (:email, :password, :full_name, :role)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $password);
    $stmt->bindParam(":full_name", $full_name);
    $stmt->bindParam(":role", $role);
    $red = null;
    try {
        $red = $stmt->execute();
    } catch (PDOException  $th) {
        if ($th->getCode() == 23000) {
            return json_encode(array("type" => "error", "message" => "Email già presente nel database"));
        }
        return json_encode(array("type" => "error", "message" => $th->getMessage()));
    }

    if ($red) {
        $_SESSION["user"] = $full_name;
        return json_encode(array("type" => "success", "message" => "Registrazione eseguita con successo!"));
    } else {
        return json_encode(array("type" => "error", "message" => "Errore nella registrazione."));
    }
}


// risponde alla chiamata http con il risultato dell'inserimento dell'utente
echo (newUser(
    $dati['email'],
    $dati['password'],
    $dati['full_name']
));
