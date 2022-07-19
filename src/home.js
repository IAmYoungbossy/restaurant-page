function defaultPage() {
  const createDomElement = function () {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const logoContainer = document.createElement("div");
    const menuContainer = document.createElement("div");
    const logo = document.createElement("h1");
    const menu = document.createElement("ul");
    const menuHome = document.createElement("li");
    const menuMenu = document.createElement("li");
    const menuContact = document.createElement("li");
    const body = content.parentNode;
    return {
      content,
      header,
      logoContainer,
      logo,
      menu,
      menuContainer,
      menuHome,
      menuMenu,
      menuContact,
      body,
    };
  };
  const appendElements = function () {
    createDomElement.body.insertBefore(header, content);
    createDomElement.header.appendChild(logoContainer);
    createDomElement.header.appendChild(menuContainer);
    createDomElement.logoContainer.appendChild(logo);
    createDomElement.menuContainer.appendChild(menu);
    createDomElement.menu.appendChild(menuHome);
    createDomElement.menu.appendChild(menuMenu);
    createDomElement.menu.appendChild(menuContact);
  };
  const headerTextContent = function () {
    createDomElement.logo.textContent = "The Burger Palace";
    createDomElement.menuHome.textContent = "Home";
    createDomElement.menuMenu.textContent = "Menu";
    createDomElement.menuContact.textContent = "Contact";
  };
  const centerButtons = function () {
    const buttonContainer = document.createElement("div");
    const orderButton = document.createElement("div");
    const contactUsButton = document.createElement("div");
    createDomElement.content.appendChild(buttonContainer);
    buttonContainer.appendChild(orderButton);
    buttonContainer.appendChild(contactUsButton);
  };
  const centerButtonsTextContent = function () {
    orderButton.textContent = "Order Food";
    contactUsButton.textContent = "Contact Us!";
  };
}
