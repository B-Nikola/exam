/*
- **Fonctionnalités** :
    - Gère l'état du jeu, y compris le score et l'indice du pays actuel.
    - Contrôle le déroulement du jeu, comme le passage au pays suivant et la vérification de la fin du jeu.
    - Initialise et affiche le pays courant en utilisant la classe `Country`.
- **Interaction avec d'autres composants** :
    - Instanciée et utilisée dans `app.js`.
    - Crée des instances de la classe `Country` de `Country.js`.
*/

import Country from './country.js';

class Game {
    #score=0;
    constructor(countries) {
        this.countries = countries;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.currentCountry.showFlag();

        console.log(this.currentCountry.name);
    }


    get score() {
        return this.#score;
    }

    addPoint() {
        this.#score++;
    }
    
    isFinished() {
        return this.countryIndex === this.countries.length - 1;
    }

    nextCountry() {
    if (this.isFinished()) {
        return;
    }
    this.countryIndex++;
    this.currentCountry = new Country(this.countries[this.countryIndex]);
    this.currentCountry.showFlag();        
    console.log(this.currentCountry.name);
    }

} 
export default Game;