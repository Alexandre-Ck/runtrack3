// fonction bissextile
function bissextile(annee) {
    // ca veut dire que l'année est divisible par 4 mais pas par 100, ou divisible par 400  (annee % 400 === 0)
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) { 
        return true;
    } else {
        return false;
    }
}

console.log(bissextile(2020)); // true
console.log(bissextile(1900)); // false
console.log(bissextile(2000)); // true
console.log(bissextile(2021)); // false 
console.log(bissextile(2024)); // true
console.log(bissextile(2025)); // false
console.log(bissextile(2100)); // false
console.log(bissextile(2400)); // true  
console.log(bissextile(1604)); // true