// selection du bouton
const btn = document.getElementById('button');

btn.addEventListener('click', async () => {
  try { 
    // on récupère le fichier expression.txt (même dossier que index.html)
    const res = await fetch('expression.txt', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status}`);
    }

    const text = await res.text();

    // création du paragraphe et insertion dans le body
    const p = document.createElement('p'); 
    p.textContent = text;
    // Optionnel : ajouter une classe pour styliser si besoin
    p.className = 'expression';

    // Si on veut remplacer une expression précédente, on peut chercher une balise existante
    const existing = document.querySelector('body > p.expression');
    if (existing) {
      existing.replaceWith(p);
    } else {
      document.body.appendChild(p);
    }

  } catch (err) {
    console.error('Impossible de charger expression.txt :', err);
    alert('Impossible de charger l\'expression. Vérifiez que expression.txt existe et que vous servez la page via un serveur.');
  }
});
