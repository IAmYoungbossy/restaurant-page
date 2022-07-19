// import "./style.css";
import "./contact.css";

const createDomElements = (function () {
    const content = document.querySelector("#content");
    const body = content.parentNode;
    const header = document.createElement("header");
    const logoContainer = document.createElement("div");
    const menuContainer = document.createElement("div");
    const logo = document.createElement("h1");
    const menu = document.createElement("ul");
    const menuHome = document.createElement("li");
    const menuMenu = document.createElement("li");
    const menuContact = document.createElement("li");
    body.insertBefore(header, content);
    header.appendChild(logoContainer);
    header.appendChild(menuContainer);
    logoContainer.appendChild(logo);
    menuContainer.appendChild(menu);
    menu.appendChild(menuHome);
    menu.appendChild(menuMenu);
    menu.appendChild(menuContact);
    return {
      logo,
      menuHome,
      menuMenu,
      menuContact,
      content,
    };
  })();
  const headerTexts = (function () {
    createDomElements.logo.textContent = "The Burger Palace";
    createDomElements.menuHome.textContent = "Home";
    createDomElements.menuMenu.textContent = "Menu";
    createDomElements.menuContact.textContent = "Contact";
  })();