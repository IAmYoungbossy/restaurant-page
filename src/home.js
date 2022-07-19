import "./style.css";

function home() {
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
  const createHomeCenterBtn = (function () {
    const buttonContainer = document.createElement("div");
    const orderButton = document.createElement("div");
    const contactUsButton = document.createElement("div");
    createDomElements.content.appendChild(buttonContainer);
    buttonContainer.appendChild(orderButton);
    buttonContainer.appendChild(contactUsButton);
    return {
      orderButton,
      contactUsButton,
    };
  })();
  const homeButtonTexts = (function () {
    createHomeCenterBtn.orderButton.textContent = "Order Food";
    createHomeCenterBtn.contactUsButton.textContent = "Contact Us!";
  })();
}

export {home};