export function createCard(prod, handleExpand) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <div class="card-container">
      <div class="flex-container">
        <div class="btn-name-off">
          <div class = "rad-btn-div">
            <input type="checkbox" class = "rad-btn" name="product-selection">
          </div>
          <div class = "name-off">
            <span class="name">${prod.name}</span>
            <span class="off">${prod.offer}% Off</span>
          </div>
        </div>
        <div class="price">
          <span class="off-price">$${(prod.price - (prod.offer / 100) * prod.price)} USD</span>
          <span class="actual-price">$${prod.price} USD</span>
        </div>
      </div>
      <div class="product-details" style="display: none;">
      <div class = "grid-container">
        <span class = "grid-item"></span>
        <span class = "grid-item">Size</span>
        <span class = "grid-item">Colour</span>
        <span class = "grid-item">#1</span>
        <span class = "grid-item">
          <select class = "grid-item">
            ${prod.size1.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
        </span>
        <span class = "grid-item">
          <select class = "grid-item">
            ${prod.colour1.map(colour => `<option value="${colour}">${colour}</option>`).join('')}
          </select>
        </span>
        <span class = "grid-item">#2</span>
        <span class = "grid-item">
          <select class = "grid-item">
            ${prod.size2.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
        </span>
        <span class = "grid-item">
          <select class = "grid-item">
            ${prod.colour2.map(colour => `<option value="${colour}">${colour}</option>`).join('')}
          </select>
        </span>
      <div>
      </div>
    </div>`;

  const toggle = card.querySelector(".card-container");
  const detailsDiv = card.querySelector(".product-details");
  const radioButton = card.querySelector(".rad-btn");

  toggle.addEventListener("click", () => {
    handleExpand(card);
    radioButton.checked = true;
  });

  card.expand = () => {
    toggle.style.height = "170px";
    detailsDiv.style.display = "flex";
    toggle.style.border = "2px solid #ff6B82";
    toggle.style.backgroundColor = "#fff9fa";
  };
  
  card.collapse = () => {
    toggle.style.height = "90px";
    radioButton.checked = false;
    detailsDiv.style.display = "none";
    toggle.style.border = "2px solid rgb(178, 178, 178)"
    toggle.style.backgroundColor = "#ffffff";
  };

  return card;
}
