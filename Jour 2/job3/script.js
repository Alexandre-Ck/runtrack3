var compteur = 0;

function addone() {
  compteur++;
  document.getElementById("compteur").textContent   = compteur;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", addone);
});

