import data from "./data.js";
import { createCard } from "./components/Prod_card.js";

const mainContainer = document.querySelector(".main");
const products = data();

let expandedCard = null;

const handleExpand = (selectedCard) => {
  if (expandedCard && expandedCard !== selectedCard) {
    expandedCard.collapse();
  }

  if (expandedCard === selectedCard) {
    expandedCard = null;
  } else {
    expandedCard = selectedCard;
    expandedCard.expand();
  }
};

products.forEach((ele) => {
  const card = createCard(ele, handleExpand);
  mainContainer.appendChild(card);
});