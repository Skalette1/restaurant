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
  nav.append(about, menu, contact);

  const header = document.createElement("header");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = '<img src="public/loro-logo.svg" >';

  header.append(logo, nav);
  return header;
};
