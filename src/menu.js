import "./menu.css";
import { createDomElements } from "./header";

const menuTab = function () {
  for (let i = 0; i < 6; i++) {
    const menuCard = document.createElement("div");
    const menuName = document.createElement("h2");
    const menuDescription = document.createElement("p");
    menuCard.appendChild(menuName);
    menuCard.appendChild(menuDescription);
    menuCard.classList.add("menu-items");
    menuName.classList.add("menu-name");
    menuDescription.classList.add("menu-description");
    createDomElements.content.appendChild(menuCard);
  }

  const menuList = (function () {
    const menuNames = document.querySelectorAll("h2");
    const menuDescription = document.querySelectorAll("p");
    menuNames[0].textContent = "The Classic";
    menuDescription[0].textContent =
      "Our Classic burger never changing always Delicious!";
    menuNames[1].textContent = "Cheese Burger";
    menuDescription[1].textContent =
      "Our Classic burger but with some Extra Cheese on it!";
    menuNames[2].textContent = "Chicken Burger";
    menuDescription[2].textContent =
      "Same concept just replacing the beef with Chicken!";
    menuNames[3].textContent = "Jalapeno Special";
    menuDescription[3].textContent =
      "Our Classic burger with some extra Spice!";
    menuNames[4].textContent = "The 10k Cal Burger";
    menuDescription[4].textContent =
      "For that one hungry person still bulking!";
    menuNames[5].textContent = "The Vegan";
    menuDescription[5].textContent =
      "I can not believe this is not meat! Same Taste different meat!";
  })();
};

export {menuTab};