document.getElementById("filtrer").addEventListener("click", function () {
  const id = document.getElementById("id").value.trim();
  const nom = document.getElementById("nom").value.trim().toLowerCase();
  const type = document.getElementById("type").value;

  fetch("pokemon.json")
    .then((response) => response.json()) // ca veut dire que nous voulons convertir la réponse en JSON
    .then((pokemons) => { 
      let resultats = pokemons.filter(pokemon => {
        let matchId = id === "" || pokemon.id == id;
        let matchNom = nom === "" || pokemon.name.french.toLowerCase().includes(nom);
        let matchType = type === "" || pokemon.type.includes(type);

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
