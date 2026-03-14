// script.js
// This file contains the JavaScript for the webpage.
// This script handles the Show Fun Fact button in the Fun Fact section.


// This line prints a message in the browser console when the file loads.
// It is useful for checking if the script file is connected correctly.
// To see it, press F12 in your browser and click the Console tab.
console.log("script.js loaded successfully!");


// This is a list that holds all the fun facts.
// Each fun fact is a piece of text inside quotes, separated by commas.
var facts = [
    "I have a mechanical engineering degree but I wanted to learn about CS that's why I joined UPOU.⚙️",
    "My favorite fruit is watermelon. 🍉",
    "My favorite movie is an Indian comedy film titled 3 Idiots. Aal izz well! 🤡",
    "My favorite pokemon is Lapras. 🌊",
    "My dream vacation is eating an unagi donburi at an authenthic Japanese restaurant. 🌸"
];


// This is a function called showFact.
// This function only runs when it is called by onclick="showFact()" on the button in index.html.
function showFact() {

    // This line finds the element on the page with id="fun-fact-box".
    // It stores that element in a variable called factBox so we can change it.
    var factBox = document.getElementById('fun-fact-box');

    // Math.random() generates a random decimal number between 0 and 1.
    // Multiplying it by facts.length scales it to the size of the facts list.
    // Math.floor() rounds it down to a whole number so it can be used as a list position.
    var randomIndex = Math.floor(Math.random() * facts.length);

    // This line shows the fun fact at the randomly chosen position in the facts list.
    // facts[randomIndex] means "get the item at position randomIndex from the facts array".
    factBox.innerHTML = facts[randomIndex];

}
