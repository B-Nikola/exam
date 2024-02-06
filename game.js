import Country from './country.js';

class Game {
    #score=0;
    constructor(countries) {
        this.countries = countries;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.currentCountry.showFlag();
        //Triche pour voir le nom du pays dans la console car j'ai pas de culture
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
    //Triche pour voir le nom du pays dans la console car j'ai pas de culture    
    console.log(this.currentCountry.name);
    }

} 
export default Game;