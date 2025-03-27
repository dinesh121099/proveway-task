import data from "./data.js";
import { createCard } from "./components/Prod_card.js";

const mainContainer = document.querySelector(".main");
const products = data();

let expandedCard = null;

const handleExpand = (selectedCard) => {
  if (expandedCard === selectedCard) {
    expandedCard.collapse();
    expandedCard = null;
    return;
  }
  if (expandedCard) {
    expandedCard.collapse();
  }
  
  expandedCard = selectedCard;
  expandedCard.expand();
};

products.forEach((ele) => {
  const card = createCard(ele, handleExpand);
  mainContainer.appendChild(card);
});