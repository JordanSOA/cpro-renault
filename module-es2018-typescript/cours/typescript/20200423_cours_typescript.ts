{
  // Déclaration d'un décorateur pour les personnages (permet de leur faire "enfiler"un costume)
  // Ce type de construction s'appelle fonction usine (factory function)
  // Documentation :  https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories
  const mettreArmureDeIronMan = function(couleur: string) {
    return function(constructeur: any){
      constructeur.prototype.couleur = couleur;
      constructeur.prototype.aDesBrasMetallique = true;
      constructeur.prototype.aUnPlastronProtecteur = true;
      constructeur.prototype.leveLaMain =  function(){
        console.log("Vouiissssh (c'est le bruit du rayon d'énérgie), etc...");
      };
    }
  }

  @mettreArmureDeIronMan("rouge")
  // Déclaration de la "classe" qui permet de créer un personnnage
  class PersonnageMarvel {
    public prenom: string;
    public nom: string;
    constructor(prenom: string, nom: string) {
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

  console.log(p2);

  /**
  PersonnageMarvel
    nom: "Pots"
    prenom: "Pepper"
    __proto__:
      aDesBrasMetallique: true
      aUnPlastronProtecteur: true
      couleur: "rouge"
      leveLaMain: ƒ ()
      sePresenter: ƒ ()
    constructor: ƒ PersonnageMarvel(prenom, nom)
    __proto__: Object
  */
}