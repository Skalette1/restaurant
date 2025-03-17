const createHeaderButtons = (text, id, className = "headerButtons") => {
  const button = document.createElement("button");
  button.textContent = text;
  button.id = id;
  button.classList.add(className);
  return button;
};

export const createHeader = () => {
  const nav = document.createElement("nav");
  const about = createHeaderButtons("about", "aboutButton");
  const menu = createHeaderButtons("menu", "menuButton");
  const contact = createHeaderButtons("contact", "contactButton");
  const cart = document.createElement("img");
  cart.src = "public/cart-large-minimalistic-svgrepo-com.svg";
  cart.classList.add("nav-cart");
  nav.append(about, menu, contact, cart);

  const header = document.createElement("header");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = '<img src="public/loro-logo.svg" >';

  const headerTop = document.createElement("div");
  headerTop.append(logo, nav);
  headerTop.classList.add("headerTop");
  const searchHolder = document.createElement("div");
  searchHolder.classList.add("searchHolder");
  const search = document.createElement("input");
  search.classList.add("search");
  search.placeholder = "search";
  const searchIcon = document.createElement("img");
  searchIcon.src = "public/search (1).png";
  searchIcon.classList.add("searchIcon");
  searchHolder.append(search, searchIcon);
  header.append(headerTop, searchHolder);

  search.addEventListener("input", (event) => {
    const data = event.target.value.toLowerCase();
    handleSearch(data);
  });
  return header;
};

const handleSearch = (data) => {
  const menuContainer = document.querySelectorAll(".menuCard");

  menuContainer.forEach((card) => {
    const cardTittle = card.querySelector("h1").textContent.toLowerCase();
    // const cardText = card.querySelector('.cardText').textContent.toLowerCase()

    if (cardTittle.includes(data)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
