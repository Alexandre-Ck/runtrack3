$(document).ready(function(){ // Au chargement de la page
  $("button").click(function(){ // Au clic sur le bouton 
    $("#div1").fadeIn();// Fade in de la div1
    $("#div2").fadeIn("slow");// Fade in de la div2 en lentement
    $("#div3").fadeIn(3000);// Fade in de la div3 en 3 secondes
  });
});


$(document).ready(function() {
    // Au clic sur "Afficher la citation"
    $("#btnAfficher").click(function() {
        $("#citation").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.").fadeIn();
    });

    // Au clic sur "Cacher la citation"
    $("#btnCacher").click(function() {
        $("#citation").fadeOut();
    });
});