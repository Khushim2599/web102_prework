/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        // create a new div element for the game card
        const gameCard = document.createElement("div");

        // add the class 'game-card'
        gameCard.classList.add("game-card");

        // set the inner HTML of the game card using template literals
        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" alt="${game.name}" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p><strong>Backers:</strong> ${game.backers.toLocaleString()}</p>
            <p><strong>Pledged:</strong> $${game.pledged.toLocaleString()}</p>
        `;

        // append the game card to the games container
        gamesContainer.appendChild(gameCard);
    }
}

// call the function to display all games on page load
addGamesToPage(GAMES_JSON);

/*************************************************************************************
 * Challenge 4–7 are coming in the next steps
 * Leave the rest of the starter code as-is for now!
*/

// You’ll come back and use the rest of this file in future challenges.
