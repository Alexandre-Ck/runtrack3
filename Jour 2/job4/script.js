document.addEventListener('keydown', function(event) {
      const textarea = document.getElementById('keylogger');
      const key = event.key;

      // Vérifie si la touche est une lettre entre a et z (minuscule ou majuscule)
      if (/^[a-zA-Z]$/.test(key)) {
        const isFocused = document.activeElement === textarea;

        // Si le textarea est focus, on ajoute 2 fois la lettre 

        if (isFocused) {
          textarea.value += key;
        } 
        
      }
    });