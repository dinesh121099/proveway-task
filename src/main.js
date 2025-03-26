import data from "./data.js";
import { createCard } from "./components/Prod_card.js"

// Get the container to append product cards
const mainContainer = document.querySelector(".main");

// Get product data
const products = data();

// Track the currently expanded card
let expandedCard = null;

// Function to handle card expansion
const handleExpand = (selectedCard) => {
  if (expandedCard && expandedCard !== selectedCard) {
    expandedCard.collapse(); // Collapse the previously expanded card
  }

  if (expandedCard === selectedCard) {
    expandedCard = null; // Collapse the current card if clicked again
  } else {
    expandedCard = selectedCard;
    expandedCard.expand();
  }
};

// Create and append product cards
products.forEach((product) => {
  const card = createCard(product, handleExpand);
  mainContainer.appendChild(card);
});