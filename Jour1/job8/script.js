


// Vérifie si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false;   // 0, 1 et les négatifs ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true;
}

// Fonction principale
function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}
console.log(estPremier(11)); // true
console.log(estPremier(4));  // false
console.log(estPremier(12348765565353543));  // false


// Exemples d'utilisation :
console.log(sommenombrespremiers(3, 5));  // 8
console.log(sommenombrespremiers(3, 4));  // false
console.log(sommenombrespremiers(7, 11)); // 18

