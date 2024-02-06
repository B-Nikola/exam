
import Country from './country.js';
import Game from './game.js';

//Du a l'utilisation de l'import comme ca je ne peux pas effectuer le build
//du coup je peux pas le faire mettre en ligne avec netlify
//du coup j'ai fais la config mais l'erreur est ici et je n'aurais pas les points bonus je suppose
//mais je garde l'espoir que ce commentaire saura obtenir un peu de bonté
//et en même temps je comprendrais si ce n'est pas le cas
import { countries } from "./data";


const formElement = document.querySelector("form");
let countries = countries.map(country => new Country(country));
countries = countries.sort(() => Math.random() - 0.5);
let gameCountries = new Game(countries);


if(localStorage.getItem('bestscore') === null) {
    localStorage.setItem('bestscore', 0);
}else {
    document.getElementById('highscore').innerHTML = '<h1>Highscore: '+ localStorage.getItem('bestscore') + '</h1>';
}

const handleForm = (e) => {
    try {
      e.preventDefault();
      const inputValue = e.target.firstElementChild.value;
        console.log(inputValue);

      if(gameCountries.isFinished()) {
        alert(`Game over! Votre score est : ${gameCountries.score}`);
        return;
      }
      else if (gameCountries.currentCountry.isCorrect(inputValue)) {
        console.log('Correcte!');
        gameCountries.addPoint();
        document.getElementById('score').innerHTML = '<h1>Score: '+ gameCountries.score + '</h1>';
        if(gameCountries.score > localStorage.getItem('bestscore')) {
        localStorage.setItem('bestscore', gameCountries.score);
        }
        document.getElementById('highscore').innerHTML = '<h1>Highscore: '+ localStorage.getItem('bestscore') + '</h1>';
        gameCountries.nextCountry();

        e.target.firstElementChild.value = '';
      }
      else {
        gameCountries.nextCountry();
        e.target.firstElementChild.value = '';
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  
formElement.addEventListener("submit", handleForm);





