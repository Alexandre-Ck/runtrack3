function jourTravaille() {
  const joursemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const joursFeries = ['1 Janvier', '13 Avril', '1 Mai', '8 Mai', '21 Mai', '1 Juin', '14 Juillet', '15 Aout', '11 Novembre', '25 Décembre'];
  const tody = new Date();
  const jourActuelle = tody.getDay(); // 0 (Dimanche) à 6 (Samedi)

  for (let i = 0; i < joursemaine.length; i++) {
    if (joursemaine[i] === 'Samedi' || joursemaine[i] === 'Dimanche') {
      console.log(joursemaine[i] + " : Jour non travaillé/ Weekend");
    } else {
      console.log(joursemaine[i] + " : Jour travaillé");
    }
  }

  console.log("\nJours fériés en France :");
  for (let i = 0; i < joursFeries.length; i++) {
    console.log("- " + joursFeries[i]);
  }

  console.log("\nAujourd'hui, nous sommes le " + joursemaine[jourActuelle === 0 ? 6 : jourActuelle - 1] + "."); // Ajustement pour que Dimanche soit à la fin
  console.log("C'est un " + (jourActuelle === 0 || jourActuelle === 6 ? "jour non travaillé." : "jour travaillé."));  
}


jourTravaille();
