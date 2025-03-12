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

  const items = [
    {
      title: "Hamburger",
      description: "Buns, patty, tomato, onions, secret family recipe.",
      price: "4.5$",
      imgSrc: "./images/hamburger.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "Cheeseburger",
      description: "Similar to our hamburger, but with cheese",
      price: "3.5$",
      imgSrc: "./images/cheeseburger.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "Double Cheeseburger",
      description: "Similar to our cheeseburger, but with an extra patty.",
      price: "6.5$",
      imgSrc: "./images/double-cheeseburger.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "Steak",
      description: "A juicy steak made just how you like it.",
      price: "12.5$",
      imgSrc: "./images/steak.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "BBQ Ribs",
      description: "Barbecue ribs with your choice of add-ons.",
      price: "10.5$",
      imgSrc: "./images/ribs.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "Grilled Cheese Sandwich",
      description: "A toasted and grilled cheese sandwich, dipped.",
      price: "6$",
      imgSrc: "./images/grilled-cheese.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "Caesar Salad",
      description: "Your typical caesar salad, choice of dressings.",
      price: "7.5$",
      imgSrc: "./images/caesar-salad.png",
      cartImg: "./public/cart.svg",
    },
    {
      title: "French Fries",
      description: "Sometimes you don't want to eat your burger alone.",
      price: "1.5$",
      imgSrc: "./images/french-fries.png",
      cartImg: "./public/cart.svg",
    },
  ];

  items.forEach((item) => {
    const card = createMenuCard(item);
    menuCards.append(card);
  });

  menuContainer.append(menuTitle);
  menuContainer.append(menuText);
  menuContainer.append(menuCards);

  return menuContainer;
};

const createMenuCard = ({ title, description, price, imgSrc, cartImg }) => {
  const menuCard = document.createElement("div");
  menuCard.className = "menuCard";

  const cardTitle = document.createElement("h1");
  cardTitle.textContent = title;

  const cardText = document.createElement("p");
  cardText.className = "cardText";
  cardText.textContent = description;

  const cardBtn = document.createElement("button");
  cardBtn.textContent = price;
  cardBtn.className = "cardBtn";

  const cardImg = document.createElement("img");
  cardImg.src = imgSrc;
  cardImg.className = "cardImg";

  const cart = document.createElement("img");
  cart.src = cartImg;
  cart.className = "cartImg";

  const cardBottom = document.createElement("div");
  cardBottom.append(cart, cardBtn);
  cardBottom.classList.add("card-bottom");

  menuCard.append(cardImg, cardTitle, cardText, cardBottom);

  return menuCard;
};
