// main.js
import { createAbout } from "./about.js";
import { createCartPage } from "./cart.js";
import { createContact } from "./contact.js";
import { createHeader } from "./header.js";
import { createHomePage } fr../menu.jse.js";
import { createMenu } from "./menu.js";

const root = document.querySelector(".root");

const header = createHeader();
const homePage = createHomePage();
root.append(header, homePage);

const pages = {
  home: homePage,
  about: createAbout(),
  contact: createContact(),
  menu: createMenu(),
  cart: createCartPage(),
};

const showPage = (page) => {
  root.innerHTML = "";
  const currentPage = page === "cart" ? createCartPage() : page;
  root.append(header, currentPage);
};

const buttons = {
  about: document.getElementById("aboutButton"),
  contact: document.getElementById("contactButton"),
  menu: document.getElementById("menuButton"),
  home: document.querySelector(".logo"),
  cart: document.querySelector(".nav-cart"),
};

const addEventListeners = () => {
  buttons.about.addEventListener("click", () => showPage(pages.about));
  buttons.menu.addEventListener("click", () => showPage(pages.menu));
  buttons.contact.addEventListener("click", () => showPage(pages.contact));
  buttons.home.addEventListener("click", () => showPage(pages.home));
  buttons.cart.addEventListener("click", () => showPage("cart"));
};

addEventListeners();
