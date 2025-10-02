function jsonValueKey(jsonString, key) {
    try {
        // Transformer la chaîne JSON en objet
        const obj = JSON.parse(jsonString);
        // Retourner la valeur associée à la clé
        return obj[key];
    } catch (error) {
        console.error("JSON invalide :", error);
        return null;
    }
}
const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city")); // ca va affiche : Marseille
console.log(jsonValueKey(jsonStr, "name")); // ca va affiche : La Plateforme_
console.log(jsonValueKey(jsonStr, "creation")); // ca va affiche : 2019
console.log(jsonValueKey(jsonStr, "nb_staff")); // ca va affiche : 11
