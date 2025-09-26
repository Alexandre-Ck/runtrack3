$(document).ready(function() {
    // Afficher toutes les images

    $("#button").click(function() {
        console.log("Bouton Afficher cliqué"); // ← ici !

        $("#images img").fadeIn();
    });


    // Cacher toutes les images
    $("#button1").click(function() {
    console.log("Bouton Afficher cliqué"); // ← ici !
     $("#images img").toggle();

    });


    // Mélanger les images
    $("#shuffleBtn").click(function() {
     console.log("Bouton Afficher cliqué"); // ← ici !

        let $images = $("#images img");

        // Mélange aléatoire
        $images = $images.sort(function() {
            return Math.random() - 0.5;
        });

        $("#images img").fadeOut(300).promise().done(function() {
            $("#images").empty().append($images);
            $images.fadeIn(500);
        });
    });

    // Déplacer une image cliquée dans le container blanc
    $("#images").on("click", "img", function() {
        console.log("Bouton Afficher cliqué"); // ← ici !

        let $img = $(this); // image cliquée
        $img.fadeOut(200, function() {
            $("#container").append($img); // on déplace l’image dans #container
            $img.fadeIn(200);
        });
    });



    let expected = 1; // on attend arc1.png en premier

$("#images").on("click", "img", function() {// Au clic sur une image
    let id = $(this).attr("id"); // img1, img2, img3, img4, img5, img6 ca veut dire le numéro de l'image cliquée        
    let num = parseInt(id.replace("img", "")); // 1, 2, 3, 4, 5, 6 ca veut dire le numéro de l'image cliquée dans l'ordre croissant 

    if (num === expected) {// si c’est la bonne image cliquée (=== expected)
        // Bonne image → on la déplace
        let $img = $(this);// image cliquée, le this est l'image cliquée
        $img.fadeOut(200, function() // on déplace l’image dans #container, elle disparait en 200ms
        {
            $("#container").append($img);// on déplace l’image dans #container
            $img.fadeIn(200);// on remet l’image en 200ms
        });
        expected++; // prochaine image attendue
        alert("Brooooooooooh t'as reussi!!!!!!!!" + expected); // on affiche un message pour confirmer la bonne image cliquée
    } else {
        alert("Idiot, c'est pas la bonne image !");
    }
});

});
