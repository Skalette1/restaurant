const cartItem = [];

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelectorAll(".menuCard");
  
    const cartImg = document.querySelector(".cartImg");
    if (cartImg) {
      cartImg.addEventListener("click", () => {
        menuContainer.forEach((card) => {
          cartItem.push(card);
        });
      });
    }
  });
  
export const createCartPage = () => {
    const cartContainer = document.createElement('div'); 
    cartContainer.className = 'cart-container'; 
  
  cartItem.forEach((cartCard) => {
    cartContainer.append(cartCard)
    cartCard.style.display = "block";
  });
  if(cartItem.length === 0) {
    const nullCart = document.createElement('h1')
    nullCart.textContent = 'К сожалению корзина пуста :('
    nullCart.classList.add('null-cart')
    cartContainer.append(nullCart)
  }

  return cartContainer;
};
