import "./home.css";
import { menuTab } from "./menu";
import { creatContactForm } from "./contact";

function home() {
  const content = document.querySelector("#content");
  content.removeAttribute("class");
  const homeFooter = document.querySelector("footer");
  homeFooter.removeAttribute("class");
  homeFooter.classList.add("homeFooter");
  const buttonContainer = document.createElement("div");
  const orderButton = document.createElement("div");
  const contactUsButton = document.createElement("div");
  content.classList.add("home-class");
  content.appendChild(buttonContainer);
  buttonContainer.appendChild(orderButton);
  buttonContainer.appendChild(contactUsButton);

  // For center buttons on homepage
  orderButton.textContent = "Order Food";
  contactUsButton.textContent = "Contact Us!";
  orderButton.classList.add("order-food");
  contactUsButton.classList.add("contact-us");
  
  orderButton.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    menuTab();
  });

  contactUsButton.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    creatContactForm();
  });
}

export { home };