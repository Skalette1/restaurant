export const createAbout = () => {
  const aboutContainer = document.createElement("div");
  aboutContainer.className = "aboutContainer";

  const aboutMenu = document.createElement("div");
  aboutMenu.className = "aboutMenu";

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "Hamburger story";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    'A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. The patties are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis with condiments such as ketchup, mustard, mayonnaise, relish or a "special sauce", often a variation of Thousand Island dressing, and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called a cheeseburger. Under some definitions, and in some cultures, a burger is considered a sandwich.';
  aboutText.className = "aboutText";

  const aboutImage = document.createElement("img");
  aboutImage.src = "./images/hamburger2.png";
  aboutImage.className = "aboutImage";

  aboutMenu.append(aboutTitle, aboutText, aboutImage);
  aboutContainer.append(aboutMenu);

  return aboutContainer;
};