

document.addEventListener("DOMContentLoaded", function () //permet de s'assurer que le DOM est entièrement chargé avant d'exécuter le script. le Dom est la structure HTML de la page web, il faut qu'il soit chargé avant d'essayer d'y accéder avec JavaScript.
 {
    function citation() {
        const texte = document.getElementById("citation").innerText;
        console.log(texte);
    }

    document.getElementById("button").addEventListener("click", citation);
});
