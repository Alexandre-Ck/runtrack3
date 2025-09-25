

$(document).ready(function() {
    // Afficher toutes les images
    $("#button").click(function() {
        $("#images img").fadeIn();
    });

    // Cacher toutes les images
    $("#button1").click(function() {
        $("#images img").fadeOut();
    });

    $("#shuffleBtn").click(function() {
        let $images = $("#images img");

        $images = $images.sort(function() { //merlange les images
            return Math.random() - 0.5;
        });

        $("#images img").fadeOut(300, function() {
            $("#images").empty().append($images);
            $images.fadeIn(500);
        });
    });
});
