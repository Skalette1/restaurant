export const createMenu = () => {
  const menuContainer = document.createElement("div");

  menuContainer.className = "menuContainer";

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  const menuText = document.createElement("p");
  menuText.textContent = "В этом меню вы можете выбрать себе бургер";
  menuText.className = "menuText";

  const menuCards = document.createElement("div");
  menuCards.className = "menuCards";

  const menuCard1 = document.createElement("div");
  const cardTItle1 = document.createElement("h1");
  cardTItle1.textContent = "Hamburger";
  const cardText1 = document.createElement("p");
  cardText1.className = "cardText";
  cardText1.textContent = "Buns, patty, tomato, onions, secret family recipe.";
  const cardBtn1 = document.createElement("button");
  cardBtn1.textContent = "4.5$";
  cardBtn1.className = "cardBtn";
  menuCard1.className = "menuCard";
  const cardImg1 = document.createElement("img");
  cardImg1.src = "./images/hamburger.png";
  cardImg1.className = "cardImg";

  menuCard1.append(cardImg1, cardTItle1, cardText1, cardBtn1);
  menuCards.append(menuCard1);

  const menuCard2 = document.createElement("div");
  const cardTItle2 = document.createElement("h1");
  cardTItle2.textContent = "Cheeseburger";
  const cardText2 = document.createElement("p");
  cardText2.className = "cardText";
  cardText2.textContent = "Similar to our hamburger, but with cheese";
  const cardBtn2 = document.createElement("button");
  cardBtn2.textContent = "3.5$";
  cardBtn2.className = "cardBtn";
  menuCard2.className = "menuCard";
  const cardImg2 = document.createElement("img");
  cardImg2.src = "./images/cheeseburger.png";
  cardImg2.className = "cardImg";

  menuCard2.append(cardImg2, cardTItle2, cardText2, cardBtn2);
  menuCards.append(menuCard2);

  const menuCard3 = document.createElement("div");
  const cardTItle3 = document.createElement("h1");
  cardTItle3.textContent = "Double Cheeseburger";
  const cardText3 = document.createElement("p");
  cardText3.className = "cardText";
  cardText3.textContent =
    "Similar to our cheeseburger, but with an extra patty.";
  const cardBtn3 = document.createElement("button");
  cardBtn3.textContent = "6.5$";
  cardBtn3.className = "cardBtn";
  menuCard3.className = "menuCard";
  const cardImg3 = document.createElement("img");
  cardImg3.src = "./images/double-cheeseburger.png";
  cardImg3.className = "cardImg";

  menuCard3.append(cardImg3, cardTItle3, cardText3, cardBtn3);
  menuCards.append(menuCard3);

  const menuCard4 = document.createElement("div");
  const cardTItle4 = document.createElement("h1");
  cardTItle4.textContent = "Steak";
  const cardText4 = document.createElement("p");
  cardText4.className = "cardText";
  cardText4.textContent = "A juicy steak made just how you like it.";
  const cardBtn4 = document.createElement("button");
  cardBtn4.textContent = "12.5$";
  cardBtn4.className = "cardBtn";
  menuCard4.className = "menuCard";
  const cardImg4 = document.createElement("img");
  cardImg4.src = "./images/steak.png";
  cardImg4.className = "cardImg";

  menuCard4.append(cardImg4, cardTItle4, cardText4, cardBtn4);
  menuCards.append(menuCard4);

  const menuCard5 = document.createElement("div");
  const cardTItle5 = document.createElement("h1");
  cardTItle5.textContent = "BBQ Ribs";
  const cardText5 = document.createElement("p");
  cardText5.className = "cardText";
  cardText5.textContent = "Barbecue ribs with your choice of a add-ons.";
  const cardBtn5 = document.createElement("button");
  cardBtn5.textContent = "10.5$";
  cardBtn5.className = "cardBtn";
  menuCard5.className = "menuCard";
  const cardImg5 = document.createElement("img");
  cardImg5.src = "./images/ribs.png";
  cardImg5.className = "cardImg";

  menuCard5.append(cardImg5, cardTItle5, cardText5, cardBtn5);
  menuCards.append(menuCard5);

  const menuCard6 = document.createElement("div");
  const cardTItle6 = document.createElement("h1");
  cardTItle6.textContent = "Grilled Cheese Sandwich";
  const cardText6 = document.createElement("p");
  cardText6.className = "cardText";
  cardText6.textContent = "A toasted and grilled cheese sandwich, dipped.";
  const cardBtn6 = document.createElement("button");
  cardBtn6.textContent = "6$";
  cardBtn6.className = "cardBtn";
  menuCard6.className = "menuCard";
  const cardImg6 = document.createElement("img");
  cardImg6.src = "./images/grilled-cheese.png";
  cardImg6.className = "cardImg";

  menuCard6.append(cardImg6, cardTItle6, cardText6, cardBtn6);
  menuCards.append(menuCard6);

  const menuCard7 = document.createElement("div");
  const cardTItle7 = document.createElement("h1");
  cardTItle7.textContent = "Caesar Salad";
  const cardText7 = document.createElement("p");
  cardText7.className = "cardText";
  cardText7.textContent = "Your typical caesar salad choice of dressings.";
  const cardBtn7 = document.createElement("button");
  cardBtn7.textContent = "7.5$";
  cardBtn7.className = "cardBtn";
  menuCard7.className = "menuCard";
  const cardImg7 = document.createElement("img");
  cardImg7.src = "./images/caesar-salad.png";
  cardImg7.className = "cardImg";

  menuCard7.append(cardImg7, cardTItle7, cardText7, cardBtn7);
  menuCards.append(menuCard7);

  const menuCard8 = document.createElement("div");
  const cardTItle8 = document.createElement("h1");
  cardTItle8.textContent = "French Fries";
  const cardText8 = document.createElement("p");
  cardText8.className = "cardText";
  cardText8.textContent = "Sometimes you don't want to eat your burger alone.";
  const cardBtn8 = document.createElement("button");
  cardBtn8.textContent = "1.5$";
  cardBtn8.className = "cardBtn";
  menuCard8.className = "menuCard";
  const cardImg8 = document.createElement("img");
  cardImg8.src = "./images/french-fries.png";
  cardImg8.className = "cardImg";

  menuCard8.append(cardImg8, cardTItle8, cardText8, cardBtn8);
  menuCards.append(menuCard8);

  menuContainer.append(menuTitle);
  menuContainer.append(menuText);
  menuContainer.append(menuCards);

  return menuContainer;
};