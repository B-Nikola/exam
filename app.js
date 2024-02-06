/*
- **Fonctionnalités** :
    - Récupère et mélange les données des pays à partir d'une API externe.
    - Initialise l'objet `Game` avec les pays mélangés.
    - Gère les interactions utilisateur via un Event Listener pour la soumission du formulaire.
    - Met à jour et affiche les scores et les meilleurs scores.
- **Interaction avec d'autres composants** :
    - Utilise la classe `Game` de `Game.js`.
    - Manipule directement le DOM pour afficher les scores et les meilleurs scores.
    - Lance des appels API pour récupérer les données des pays
*/


import Country from './country.js';
import Game from './game.js';
import { countries } from './data.js';



// Cherche l'élément <form> dans le DOM
const formElement = document.querySelector("form");
let countries = countries.map(country => new Country(country));
countries = countries.sort(() => Math.random() - 0.5);

let gameCountries = new Game(countries);

//create highscore in localstorage if it doesn't exist
if(localStorage.getItem('bestscore') === null) {
    localStorage.setItem('bestscore', 0);
}else {
    document.getElementById('highscore').innerHTML = '<h1>Highscore: '+ localStorage.getItem('bestscore') + '</h1>';
}


const handleForm = (e) => {
    try {
      // Empêche le refresh lors de la soumission du formulaire
      e.preventDefault();
      // Cherche la valeur de l'élément <input>
      const inputValue = e.target.firstElementChild.value;
        console.log(inputValue);
      if(gameCountries.isFinished()) {
        alert(`Game over! Votre score est : ${gameCountries.score}`);
        return;
      }
      else if (gameCountries.currentCountry.isCorrect(inputValue)) {
        console.log('Correct!');
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





