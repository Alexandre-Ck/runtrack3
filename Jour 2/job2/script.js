function afficherMessage() {
      document.getElementById("citation").innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
    }

    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("button").addEventListener("click", afficherMessage);
    });

    function hideMessage() {
      var x = document.getElementById("citation");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }