"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    // Déclaration d'un décorateur pour les personnages (permet de leur faire "enfiler"un costume)
    // Ce type de construction s'appelle fonction usine (factory function)
    // Documentation :  https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories
    var mettreArmureDeIronMan = function (couleur) {
        return function (constructeur) {
            constructeur.prototype.couleur = couleur;
            constructeur.prototype.aDesBrasMetallique = true;
            constructeur.prototype.aUnPlastronProtecteur = true;
            constructeur.prototype.leveLaMain = function () {
                console.log("Vouiissssh (c'est le bruit du rayon d'énérgie), etc...");
            };
        };
    };
    var PersonnageMarvel = /** @class */ (function () {
        function PersonnageMarvel(prenom, nom) {
            this.prenom = prenom;
            this.nom = nom;
        }
        PersonnageMarvel.prototype.sePresenter = function () {
            console.log("Je m'appelle " + this.prenom + " " + this.nom);
        };
        PersonnageMarvel = __decorate([
            mettreArmureDeIronMan("rouge")
            // Déclaration de la "classe" qui permet de créer un personnnage
        ], PersonnageMarvel);
        return PersonnageMarvel;
    }());
    // Crée des personnages
    var p1 = new PersonnageMarvel("Tony", "Stark");
    var p2 = new PersonnageMarvel("Pepper", "Pots");
    var p3 = new PersonnageMarvel("James", "Rhodes");
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
