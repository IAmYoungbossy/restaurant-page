import "./home.css";

function home() {
  const createHomeCenterBtn = (function () {
    const content = document.querySelector("#content");
    content.removeAttribute("class");
    const homeFooter = document.querySelector("footer");
    homeFooter.classList.add("homeFooter");
    const buttonContainer = document.createElement("div");
    const orderButton = document.createElement("div");
    const contactUsButton = document.createElement("div");
    content.classList.add("home-class");
    content.appendChild(buttonContainer);
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

export { home };