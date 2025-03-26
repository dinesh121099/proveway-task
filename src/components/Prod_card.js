export function createCard(prod, onExpand) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `<div class = "card-container">
            <button type = "button" class = "toggle-btn"></button>
            <div class = "name-off">
                <span class = "name">${prod.name}</span>
                <span class = "off">${prod.offer}</span>
            </div>
            <div class = "price">
            <span class = "off-price">$${
              (prod.offer / 100) * prod.price
            } USD</span>
            <span class = "actual-price">$${prod.price} USD</span>
            </div>
            <div class = "product-details" style="display: none;">
                <span>${prod.size}</span>
                <span></span>
            </div>
        </div>`;

  const toggleBtn = card.querySelector(".card-container");
  const detailsDiv = card.querySelector(".product-details");

  // Click event to expand/collapse
  toggleBtn.addEventListener("click", () => {
    onExpand(card); // Notify main.js that this card is expanded
  });

  // Function to expand the current card
  card.expand = () => {
    detailsDiv.style.display = "block";
    toggleBtn.textContent = "Show Less";
  };

  // Function to collapse the current card
  card.collapse = () => {
    detailsDiv.style.display = "none";
    toggleBtn.textContent = "Show More";
  };

  return card;
}
