import { createHeader } from "./header";
import { creatContactForm } from "./contact";
import { menuTab } from "./menu";
import { home } from "./home";

createHeader();
home();

const listenForEvents = (function () {
  const content = document.querySelector("#content");
  const homeBtn = document.querySelector(".homeLi");
  const menuBtn = document.querySelector(".menuLi");
  const contactBtn = document.querySelector(".contactLi");
  const orderFood = document.querySelector(".food");
  const contactUs = document.querySelector(".us");

  homeBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    home();
  });

  menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    menuTab();
  });

  orderFood.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    menuTab();
  });

  contactBtn.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    creatContactForm();
  });

  contactUs.addEventListener("click", () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    creatContactForm();
  });
})();