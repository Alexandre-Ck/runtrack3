document.getElementById("filtrer").addEventListener("click", function () {
  const id = document.getElementById("id").value.trim();
  const nom = document.getElementById("nom").value.trim().toLowerCase();
  const type = document.getElementById("type").value;

  fetch("pokemon.json")
    .then((response) => response.json()) // ca veut dire que nous voulons convertir la réponse en JSON
    .then((pokemons) => { // ca veut dire que nous voulons utiliser la variable pokemons
      let resultats = pokemons.filter(pokemon => {
        let matchId = id === "" || pokemon.id == id;// si l'id est vide ou égal au id du pokemon
        let matchNom = nom === "" || pokemon.name.french.toLowerCase().includes(nom); // si le nom est vide ou contient le nom du pokemon
        let matchType = type === "" || pokemon.type.includes(type); // si le type est vide ou contient le type du pokemon

        return matchId && matchNom && matchType;
      });

      afficherResultats(resultats);
    })
    .catch((error) => console.error("Erreur JSON :", error));
});

function afficherResultats(resultats) {
  const container = document.getElementById("resultats");
  container.innerHTML = "";

  if (resultats.length === 0) {
    container.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
    return;
  }

  resultats.forEach(pokemon => {
    let div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.margin = "10px 0";
    div.style.padding = "10px";
    div.style.backgroundColor = "#222";
    div.style.color = "white";

    div.innerHTML = `
      <strong>ID:</strong> ${pokemon.id}<br>
      <strong>Nom:</strong> ${pokemon.name.french}<br>
      <strong>Type:</strong> ${pokemon.type.join(", ")}<br>
      <strong>Stats:</strong> HP ${pokemon.base.HP}, Atk ${pokemon.base.Attack}, Def ${pokemon.base.Defense}
    `;
    container.appendChild(div);
  });
}
