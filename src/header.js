const createHeaderButtons = (text, id, className = "headerButtons") => {
  const button = document.createElement("button");
  button.textContent = text;
  button.id = id;
  button.classList.add(className);
  return button;
};

export const createHeader = () => {
  const nav = document.createElement("nav");
  const about = createHeaderButtons("About", "aboutButton");
  const menu = createHeaderButtons("Menu", "menuButton");
  const contact = createHeaderButtons("Contact", "contactButton");
  const cart = document.createElement("img");
  cart.src = "public/cart-large-minimalistic-svgrepo-com.svg";
  cart.classList.add("nav-cart");
  nav.append(about, menu, contact, cart);

  const header = document.createElement("header");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = '<img src="public/loro-logo.svg" alt="Logo">';

  const headerTop = document.createElement("div");
  headerTop.append(logo, nav);
  headerTop.classList.add("headerTop");

  const searchHolder = document.createElement("div");
  searchHolder.classList.add("searchHolder");
  const search = document.createElement("input");
  search.classList.add("search");
  search.placeholder = "Search...";
  const searchIcon = document.createElement("img");
  searchIcon.src = "public/search (1).png";
  searchIcon.classList.add("searchIcon");
  searchHolder.append(search, searchIcon);

  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;"; 
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  header.append(headerTop, searchHolder, menuToggle);

  search.addEventListener("input", (event) => {
    const data = event.target.value.toLowerCase();
    handleSearch(data);
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove("active");
    }
  });

  return header;
};

const handleSearch = (data) => {
  const menuContainer = document.querySelectorAll(".menuCard");

  menuContainer.forEach((card) => {
    const cardTitle = card.querySelector("h1").textContent.toLowerCase();
    if (cardTitle.includes(data)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};