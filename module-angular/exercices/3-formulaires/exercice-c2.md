# Angular : les formulaires - Exercice 1 - la directive `NgModel` et les références de template


## Préparation
Créez un nouveau composant nommé "exercice-c2" dans le dossier `src/app/exercices/3-formulaires/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Il existe 2 façons de gérer les formulaires dans Angular :
- [Les formulaires pilotés par le template](https://angular.io/guide/forms).
Les formulaires pilotés par le template sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils ne sont pas aussi évolutifs que les formulaires réactifs. Si vous avez des exigences de base et une logique pouvant être gérées uniquement dans le template, utilisez des formulaires pilotés par le template.
- [Les formulaires "réactifs"](https://angular.io/guide/reactive-forms). Les formulaires réactifs sont plus robustes : ils sont plus évolutifs, réutilisables et testables. Si les formulaires constituent un élément clé de votre application ou si vous utilisez déjà des modèles réactifs pour générer votre application, utilisez des formulaires réactifs.

Dans cet exercice nous allons utiliser un formulaire piloté par le template pour découvrir l'utilisation des formulaire dans Angular avec la directive `NgModel`.


## Documentation
- [Description de `NgForm`](https://angular.io/api/forms/NgForm#description).
  - [l'événement `ngSubmit`](https://angular.io/api/forms/NgForm#listening-for-form-submission).
- [`NgModel`](https://angular.io/api/forms/NgModel).
- Guide : [Les formulaires piloté par le template](https://angular.io/guide/forms).
- Guide : [Introduction aux formulaires dans Angular](https://angular.io/guide/forms-overview).
- Guide : [Liaison de données dans les 2 sens](https://angular.io/guide/template-syntax#two-way-binding-)
- Guide : [La validation de formulaire](https://angular.io/guide/form-validation)
- [AbstractControl](https://angular.io/api/forms/AbstractControl#pending)


## Partie 1
Dans la classe du composant Créez une propriété `utilisateur` qui est un objet possédant les propriétés suivantes :

- Nom, de type texte,
- Prénom, de type texte,
- Adresse e-mail, de type texte,
- Âge, de type numérique.


## Partie 2
Dans le template, créez un formulaire comportant 4 champs qui correspondent aux propriétés de votre utilisateur, en utilisant le type d'input le mieux adapté et avec les critères de validation suivants :
- Le champ nom doit comporter au moins 2 caractères
- Le champ prénom doit comporter au moins 2 caractères
- Le champ e-mail est obligatoire

N'oubliez pas de spécifier un attribut `name` pour chacun de ces champs : Angular utilise cet attribnut gérer la validation du champ.

Utilisez la directive `NgModel` pour lier chaque champ à une propriété de votre objet `utilisateur`.

Pour chaque champ créez un paragraphe de texte et utilisez une expression pour afficher la propriété de l'objet `utilisateur` correspondant au champ.


## Partie 3
Observez, dans l'inspecteur du navigateur, les différentes classes associées à chaque champ lorsque vous modifiez leur valeur ou lorsque vous sortez du champ. Ces classes sont automatiquement ajoutées par Angular en fonction de l'état du champ (valide, invalide, modifé, etc.) et sont pratiques pour styler votre formulaire en fonction de son état.

Faites en sorte que lorsqu'un champ est valide, sa couleur de fond passe en vert et lorsqu'il est invalide, sa couleur de fond passe en rouge.


## Partie 4
Créez une référence de template ([_`template reference variable`_](https://angular.io/guide/template-syntax#template-reference-variables-var)) sur chaque champ. Pour exploiter la gestion des champs, associez à cette référence la valeur `ngModel`.

### Exemple
``` html
#monChampTexte="ngModel"
```

La référence créée n'est pas une référence à l'élément HTML en question mais contient des propriétés concernant l'état du contrôleur, comme par exemple `valid`, `pristine` ou `touched`. Ces propriété permettent de vérifier l'état du champ en code. La liste des propriétés est décrite dans la documentation de [AbstractControl](https://angular.io/api/forms/AbstractControl#pending).

Pour chaque champ soumis à une validation, si le champ est invalide, affichez sous le champ un message d'erreur.

## Partie 5
La directive `ngForm` est automatiquement associée à chaque formulaire par Angular. Vous pouvez exploiter cette directive en créant une référence de template sur l'élément `form`.
### Exemple
``` html
<form #formRef="ngForm">
```
La référence créée n'est pas une référence à l'élément `form` mais contient des propriétés concernant l'état du formulaire, comme par exemple `valid` ou `submitted`.

Manipulez votre formulaire et observez ces propriétés en les affichant via une expression. La liste des propriétés est décrite dans la documentation de [NgForm](https://angular.io/api/forms/NgForm#properties).


## Partie 6

Ajoutez un input de type `submit`.

Lors de la soumission du formulaire, exécutez une fonction qui recevra l'état du fomulaire.

Si le formulaire est la valide, la fonction doit ajouter les informations du formulaire à une liste d'utilisateurs (créez une nouvelle propriété de classe, nommée `listeUtilisateurs`).

Affichez sous le formulaire la liste des utilisateurs à l'aide de la directive `ngFor`.

Créez trois utilisateurs à l'aide de votre formulaire.

---

VirtuoWorks® - tous droits réservés©