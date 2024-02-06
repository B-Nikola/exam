import { toLower } from "lodash";

/*
- **Rôle** : Ce fichier définit la classe `Country`, représentant le modèle de données et la présentation d'un pays individuel.
- **Fonctionnalités** :
    - Contient des données spécifiques au pays, telles que le drapeau et les réponses valides (dérivées des noms de pays dans différentes langues).
    - Fournit une méthode pour vérifier si une réponse donnée est correcte.
    - Gère l'affichage du drapeau du pays dans l'interface utilisateur.

    ### Propriétés

1. Une propriété contenant les données d’**un** pays. Ces données doivent correspondre à un objet du tableau retourné par l’API. Cet objet sera passé à chaque instance de Country par le `constructor`.
2. Une propriété contenant toutes les réponses possibles pour un pays (ce tableau sera construit dans une méthode décrite plus loin). 
3. Une propriété générée par un retournant uniquement le drapeau du pays.

*/
class Country {

    constructor(data) {
        this.flag = data.flags.png;
        this.name = data.name.common;
        this.answers = this.answers(data.translations);
    
    }

    answers(translations) {
        let answers = new Set();
        for (let key in translations) {
            answers.add(toLower(translations[key].common));
        }
        return answers;
    }
   
    
    

    getFlag() {
        return this.flag;
    }
    
    showFlag() {
        document.getElementById('flag').innerHTML = '';
        let flag = document.createElement('img');
        flag.src = this.flag;
        flag.alt = `Flag of ${this.name}`;
        document.getElementById('flag').appendChild(flag);
    }

    //test if an answer is true
    isCorrect(answer) {
        return this.answers.has(toLower(answer));
    }

    

}

export default Country;