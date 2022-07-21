import "./home.css";
import {createDomElements} from "./header";

function home() {
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