export let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

export const addToCart = (item) => {
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const clearCart = () => {
  cartItems = [];
  localStorage.removeItem("cart");
};

export const createCartPage = () => {
  const cartContainer = document.createElement("div");
  cartContainer.className = "cart-container";

  const clearButton = document.createElement("button");
  clearButton.textContent = "Очистить корзину";
  clearButton.className = "clear-cart-btn";
  clearButton.addEventListener("click", () => {
    clearCart();
    window.location.reload();
  });

  cartContainer.append(clearButton);

  if (cartItems.length === 0) {
    const nullCart = document.createElement("h1");
    nullCart.textContent = "К сожалению корзина пуста :(";
    nullCart.classList.add("null-cart");
    cartContainer.append(nullCart);
  } else {
    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "cart-item";

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.title;
      img.className = "cart-item-img";

      const info = document.createElement("div");
      info.className = "cart-item-info";
      info.innerHTML = `
        <h3 class="cart-item-title">${item.title}</h3>
        <p class="cart-item-description">${item.description}</p>
        <div class="cart-item-bottom">
          <p class="cart-item-price">${item.price}</p>
        </div>
      `;

      cartItemElement.append(img, info);
      cartContainer.append(cartItemElement);
    });
  }

  return cartContainer;
};
