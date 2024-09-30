// JavaScript Document
console.log("hi");

/************************************/
/* menu openen met de open menu button */
/************************************/

// Selecteer de openButton die zich in de <header> bevindt (de eerste <button> in de header)
var openButton = document.querySelector("header > button");

// Voeg een event toe aan de openButton zodat wanneer erop wordt geklikt, de functie openMenu wordt aangeroepen
openButton.onclick = openMenu; 

// Functie die het menu opent
function openMenu() {  
  // Selecteer de <nav> in de HTML
  var deNav = document.querySelector("nav");

  // Voeg de CSS-class "toonMenu" toe aan het <nav> element, waardoor het menu zichtbaar wordt
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

// Selecteer de sluitButton die zich in de <nav> bevindt (de eerste <button> in de nav)
var sluitButton = document.querySelector("nav button");

// Voeg een event toe aan de sluitButton zodat wanneer erop wordt geklikt, de functie sluitMenu wordt aangeroepen
sluitButton.onclick = sluitMenu;

// Functie die het menu sluit
function sluitMenu() {
  // Selecteer opnieuw de <nav> in de HTML
  var deNav = document.querySelector("nav");

  // Verwijder de CSS-class "toonMenu" van het <nav> element, waardoor het menu verdwijnt
  deNav.classList.remove("toonMenu");
}
















