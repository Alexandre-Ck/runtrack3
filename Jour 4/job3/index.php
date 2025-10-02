<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Filtre Pokémon</title>
</head>
<body>
  <div style="background-color: brown; color: antiquewhite; width: 70%; padding: 15px;">
    <h1>Filtrer les Pokémon</h1>

    <form id="formFiltre">
      <label for="id">ID :</label>
      <input type="text" id="id" name="id"><br><br>

      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom"><br><br>

      <label for="type">Type :</label>
      <select id="type" name="type">
        <option value="">-- Tous --</option>
        <option value="Grass">Plante</option>
        <option value="Fire">Feu</option>
        <option value="Water">Eau</option>
        <option value="Electric">Électrik</option>
      </select><br><br>

      <input type="button" id="filtrer" value="Filtrer">
    </form>

    <h2>Résultats :</h2>
    <div id="resultats"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
