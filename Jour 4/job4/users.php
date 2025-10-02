<?php
// users.php

// Connexion à la base de données
$host = 'localhost';
$dbname = 'utilisateurs';
$username = 'root'; // selon ta configuration MAMP
$password = 'root';     // mot de passe MAMP par défaut vide

try {// Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération des utilisateurs
    $stmt = $pdo->query("SELECT * FROM utilisateurs");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retour en JSON
    header('Content-Type: application/json');
    echo json_encode($users);

} catch (PDOException $e) { // Si une erreur survient, on renvoie un message d'erreur
    echo "Erreur : " . $e->getMessage();
}
?>
