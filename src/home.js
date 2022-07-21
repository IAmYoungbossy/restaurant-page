import "./home.css";

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

  orderButton.textContent = "Order Food";
  contactUsButton.textContent = "Contact Us!";
  contactUsButton.removeAttribute("class");
  orderButton.removeAttribute("class");
  orderButton.classList.add("order-food");
  contactUsButton.classList.add("contact-us");
}

export { home };
