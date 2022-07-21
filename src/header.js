import "./header.css";

const createHeader = function () {
  const content = document.querySelector("#content");
  const body = content.parentNode;
  const header = document.createElement("header");
  const logoContainer = document.createElement("div");
  const menuContainer = document.createElement("div");
  const logo = document.createElement("h1");
  const menu = document.createElement("ul");
  const menuHome = document.createElement("li");
  menuHome.classList.add('homeLi');
  const menuMenu = document.createElement("li");
  menuMenu.classList.add('menuLi');
  const menuContact = document.createElement("li");
  menuContact.classList.add('contactLi');

  body.insertBefore(header, content);
  header.appendChild(logoContainer);
  header.appendChild(menuContainer);
  logoContainer.appendChild(logo);
  menuContainer.appendChild(menu);
  menu.appendChild(menuHome);
  menu.appendChild(menuMenu);
  menu.appendChild(menuContact);

  logo.textContent = "The Burger Palace";
  menuHome.textContent = "Home";
  menuMenu.textContent = "Menu";
  menuContact.textContent = "Contact";
};

export { createHeader };