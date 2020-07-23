# Angular : Les formulaires - Exercice C3 - formulaire réactif avec FormGroup et FormControl


## Préparation
Créez un nouveau composant nommé "exercice-c3" dans le dossier `src/app/exercices/3-formulaires/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Il existe 2 façons de gérer les formulaires dans Angular :
- [Les formulaires pilotés par le template](https://angular.io/guide/forms).
Les formulaires pilotés par le template sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils ne sont pas aussi évolutifs que les formulaires réactifs. Si vous avez des exigences de base et une logique pouvant être gérées uniquement dans le template, utilisez des formulaires pilotés par le template.
- [Les formulaires "réactifs"](https://angular.io/guide/reactive-forms). Les formulaires réactifs sont plus robustes : ils sont plus évolutifs, réutilisables et testables. Si les formulaires constituent un élément clé de votre application ou si vous utilisez déjà des modèles réactifs pour générer votre application, utilisez des formulaires réactifs.

Dans cet exercice nous allons utiliser un formulaire "réactif "pour approfondir l'utilisation des formulaires dans Angular "classes" (fonctions constructeur) `FormGroup`, `FormControl` et `FormBuilder`.


## Documentation
- [Description de la "classe" `FormGroup`](https://angular.io/api/forms/FormGroup#description).
- [Description de la "classe" `FormControl`](https://angular.io/api/forms/FormControl#description).
  - [Description de la "classe" `AbstractControl` dont héritent `FormGroup` et `FormControl`](https://angular.io/api/forms/AbstractControl#description)
- [Description de la "classe" `FormBuilder`](https://angular.io/api/forms/FormBuilder#description).
- Guide : [Les formulaires réactifs](https://angular.io/guide/reactive-forms).
- Guide : [La validation de formulaire (réactifs et pilotés par le template)](https://angular.io/guide/form-validation)



## Partie 1
A l'extérieur de la classe du composant, créez une interface `Utilisateur` qui
décrit un objet possédant les propriétés suivantes :

- Nom, de type texte,
- Prénom, de type texte,
- Adresse e-mail, de type texte,
- Âge, de type numérique.

## Partie 2
Dans la classe du composant, créez une propriété `formulaire` qui est un __nouvel__ objet de type `FormGroup`. Cet objet prend en argument du constructeur
un objet contenant les propriété suivantes :

- `nom`, qui est un __nouvel__ objet de type `FormControl`,
- `prenom`, qui est un __nouvel__ objet de type `FormControl`,
- `email`, qui est un __nouvel__ objet de type `FormControl`,
- `age`, qui est un __nouvel__ objet de type `FormControl`.

## Partie 3
Dans le template, créez un formulaire comportant 4 champs qui correspondent aux propriétés de votre `FormGroup`, en utilisant le type d'`input` le mieux adapté.

Le formulaire doit contenir la directive `[formGroup]` avec pour valeur le nom de
la propriété correspondant à votre `FormGroup` dans le composant.

N'oubliez pas de spécifier un attribut `name` pour chacun de ces champs. Cet attribut à pour valeur le nom de la propriété contenant le `FormControl` associé dans le `FormGroup` dans le composant.

Pour chaque champ, créez un paragraphe de texte et utilisez une expression pour afficher la valeur correspondant à chaque champ. La propriété `controls` de l'objet `FormGroup` contient chaque `FormControl`. Et chaque `FormControl` contient une propriété `value` contenant la valeur
du champ.

Par exemple :
```
{{ formulaire.controls.nom.value }}
```

- `formulaire` : propriété de composant contenant le `FormGroup`;
- `controls` : propriété du `FormGroup` contenant les `FormControl`;
- `nom` : propriété correspondant à un `FormControl`;
- `value`: propriété correspondant à la valeur saisie.

## Partie 4

Dans la classe du composant, ajoutez à chaque `FormControl`  des validateurs. La "classe"
`FormControl` peut recevoir plusieurs paramètres. Le premier est la valeur initiale
du champ. Le deuxième est un `Array` de validateurs.

La liste des [validateurs fournis avec Angular est disponible ici](https://angular.io/api/forms/Validators). Les validateurs sont des
fonctions qui vont retourner un booléen indiquant si le champ est
valide ou invalide.

Pour chaque `FormControl`, ajoutez les validateurs appropriés (requis, email ?, pattern/*motif*, ...).

## Partie 5

Observez, dans l'inspecteur du navigateur, les différentes classes associées à chaque champ lorsque vous modifiez leur valeur ou lorsque vous sortez du champ. Ces classes sont automatiquement ajoutées par Angular en fonction de l'état du champ (valide, invalide, modifié, etc.) et sont pratiques pour styler votre formulaire en fonction de son état.

Faites en sorte que lorsqu'un champ est valide, sa couleur de fond passe en vert et lorsqu'il est invalide, sa couleur de fond passe en rouge.

## Partie 6

Nous allons procéder à plusieurs simplifications. Plutôt que d'utiliser les classes
`FormGroup` et `FormControl`, nous allons utiliser le service `FormBuilder` pour
créer le nouveau `FormGroup` et les `FormControl`.

Injectez le service `FormBuilder` dans le composant et utilisez la méthode `.group()`
du `FormBuilder` pour créer le `FormGroup` et les `FormControl`.

Autre simplification, plutôt que d'aller chercher la valeur du `FormControl` à partir
du `FormGroup` dans le template en écrivant : `{{ formulaire.controls.nom.value }}`,
nous allons créez des propriétés de composant qui nous servirons de "raccourcis".

Dans la classe du composant, créez un `getter` ([voir le MDN ici à ce sujet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)) pour
chacun des `FormControl`. Chaque `getter` doit retourner le `FormControl`
correspondant.
Par exemple :
```
get nom() {
  // 'formulaire' est la propriété contenant le FormGroup
  // 'nom' est le nom de la propriété correspondant au FormControl
  return this.formulaire.get('nom');
}
```
Dans le template vous pouvez désormais écrire :
```
{{ nom.value }}
```
à la place de :
```
{{ formulaire.controls.nom.value }}
```
puisque la propriété `nom` du composant renvoi le `FormControl` correspondant au nom.

## Partie 7

Chaque `FormControl` contient des propriétés indiquant l'état du champ, comme par exemple `valid`, `pristine` ou `touched`. Ces propriétés permettent de vérifier l'état du champ en code. La liste des propriétés est décrite dans la documentation de [AbstractControl](https://angular.io/api/forms/AbstractControl).

Pour chaque champ soumis à une validation, si le champ est invalide, affichez sous le champ un message d'erreur.

## Partie 8

Ajoutez un input de type `submit`.

Lors de la soumission du formulaire, exécutez une méthode de votre composant.
Dans cette méthode, vous pouvez récupérer les valeurs du formulaire en utilisant
la propriété `value` du `FormGroup`.

Si le formulaire est valide, la fonction doit ajouter les informations du formulaire à une liste d'utilisateurs (créez une nouvelle propriété de classe, nommée `listeUtilisateurs` qui sera
un `Array` de `Utilisateur`, c'est l'interface créé à l'étape 1).

Affichez sous le formulaire la liste des utilisateurs à l'aide de la directive `ngFor`.

Créez trois utilisateurs à l'aide de votre formulaire réactif.

---

VirtuoWorks® - tous droits réservés©