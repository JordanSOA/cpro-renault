{
  // Déclaration d'un décorateur pour les personnages (permet de leur faire "enfiler"un costume)
  // Ce type de construction s'appelle fonction usine (factory function)
  const mettreArmureDeIronMan = function(couleur) {
    return function(unPersonnage){
      unPersonnage.couleur = couleur;
      unPersonnage.aDesBrasMetallique = true;
      unPersonnage.aUnPlastronProtecteur = true;
      unPersonnage.leveLaMain =  function(){
        console.log("Vouiissssh (c'est le bruit du rayon d'énérgie), etc...");
      };
    }
  }

  // Déclaration de la "classe" qui permet de créer un personnnage
  class PersonnageMarvel {
    constructor(prenom, nom) {
      this.prenom = prenom;
      this.nom  = nom;
    }

    sePresenter()  {
      console.log(`Je m'appelle ${this.prenom} ${this.nom}`);
    }
  }

  // Crée des personnages
  const p1 = new PersonnageMarvel("Tony", "Stark");
  const p2 = new PersonnageMarvel("Pepper", "Pots");
  const p3 = new PersonnageMarvel("James", "Rhodes");

  // J'utilise le décorateur pour récupéer des décorateurs adapatés pour mes personnages
  const mettreArmureDeIronManNoireA = mettreArmureDeIronMan("noire");
  const mettreArmureDeIronManRougeA = mettreArmureDeIronMan("rouge");
  // J'utilise le décorateur pour ajouter des méta-données aux personnages
  mettreArmureDeIronManRougeA(p2);

  p2.leveLaMain();

  mettreArmureDeIronManNoireA(p3);

  p3.aDesBrasMetallique; // true
}
