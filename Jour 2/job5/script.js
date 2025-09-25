const footer = document.querySelector("footer"); // Selectionne le footer

    window.addEventListener("scroll", () => { // Ajoute un écouteur d'événement sur le scroll de la page
      const scrolled = window.scrollY; // Position du scroll sur la page en pixels
      const height = document.documentElement.scrollHeight - window.innerHeight; // Hauteur de la page 
      const percent = (scrolled / height) * 100;// Pourcentage du scroll sur la page 100% dans la page

      footer.style.width = percent + "%"; // Change la largeur du footer en pourcentage

      // couleur évolue du rouge (0) au vert (120) en HSL
      footer.style.background = `hsl(${percent * 1.2}, 100%, 50%)`;
    });

