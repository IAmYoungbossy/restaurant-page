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

const content = document.querySelector("#content");
const form = document.createElement("form");
form.setAttribute("action", "#");
form.setAttribute("method", "get");
form.setAttribute("accept-charset", "utf-8");
content.appendChild(form);
const contactUs = document.createElement("div");
content.appendChild(contactUs);

const formHeader = document.createElement("h1");
formHeader.textContent = "Feedback";
const formInstruction = document.createElement("p");
formInstruction.textContent = "Fields marked asteriks(*) are required.";
form.appendChild(formHeader);
form.appendChild(formInstruction);

const firstNameDiv = document.createElement("div");
const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "fname");
firstNameLabel.textContent = "First Name";
const inputFirstName = document.createElement("input");
inputFirstName.setAttribute("id", "fname");
inputFirstName.setAttribute("name", "fname");
inputFirstName.setAttribute("type", "text");
inputFirstName.setAttribute("placeholder", "Bobby");
inputFirstName.setAttribute("minlength", "3");
inputFirstName.setAttribute("pattern", "[a-zA-Z0-9]+");
inputFirstName.setAttribute("required", "");
const spanFirstName = document.createElement("span");
firstNameDiv.appendChild(firstNameLabel);
firstNameDiv.appendChild(inputFirstName);
firstNameDiv.appendChild(spanFirstName);
form.appendChild(firstNameDiv);

const lastNameDiv = document.createElement("div");
const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "fname");
lastNameLabel.textContent = "Last Name";
const inputLastName = document.createElement("input");
inputLastName.setAttribute("id", "fname");
inputLastName.setAttribute("name", "fname");
inputLastName.setAttribute("type", "text");
inputLastName.setAttribute("placeholder", "Ray");
inputLastName.setAttribute("minlength", "3");
inputLastName.setAttribute("pattern", "[a-zA-Z0-9]+");
inputLastName.setAttribute("required", "");
const spanLastName = document.createElement("span");
lastNameDiv.appendChild(lastNameLabel);
lastNameDiv.appendChild(inputLastName);
lastNameDiv.appendChild(spanLastName);
form.appendChild(lastNameDiv);

const emailDiv = document.createElement("div");
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email Address";
const inputEmail = document.createElement("input");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "bobbyray@example.com");
inputEmail.setAttribute("minlength", "36");
inputEmail.setAttribute(
  "pattern",
  "^[w]{1,}[w.+-]{0,}@[w-]{2,}([.][a-zA-Z]{2,}|[.][w-]{2,}[.][a-zA-Z]{2,})$"
);
inputEmail.setAttribute("required", "");
const spanEmail = document.createElement("span");
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(inputEmail);
emailDiv.appendChild(spanEmail);
form.appendChild(emailDiv);

const phoneNumberDiv = document.createElement("div");
const phoneNumberLabel = document.createElement("label");
phoneNumberLabel.setAttribute("for", "phone");
phoneNumberLabel.textContent = "Phone Number (Optional)";
const inputPhoneNumber = document.createElement("input");
inputPhoneNumber.setAttribute("id", "phone");
inputPhoneNumber.setAttribute("name", "phone");
inputPhoneNumber.setAttribute("type", "tel");
inputPhoneNumber.setAttribute("placeholder", "+2347234567245");
inputPhoneNumber.setAttribute("pattern", "[+]d{3}d{3}d{7}|0d{10}");
const spanPhone = document.createElement("span");
phoneNumberDiv.appendChild(phoneNumberLabel);
phoneNumberDiv.appendChild(inputPhoneNumber);
phoneNumberDiv.appendChild(spanPhone);
form.appendChild(phoneNumberDiv);

const categoryDiv = document.createElement("div");
const categoryLabel = document.createElement("label");
categoryLabel.setAttribute("for", "category");
categoryLabel.textContent = "Category";
const selectCategory = document.createElement("select");
selectCategory.setAttribute("id", "category");
selectCategory.setAttribute("name", "category");
const categoryOption1 = document.createElement("option");
categoryOption1.setAttribute("value", "food&beverage");
categoryOption1.textContent = "Food And Beverage";
const categoryOption2 = document.createElement("option");
categoryOption2.setAttribute("value", "Services");
categoryOption2.textContent = "Services";
const categoryOption3 = document.createElement("option");
categoryOption3.setAttribute("value", "Others");
categoryOption3.textContent = "Others";
selectCategory.appendChild(categoryOption1);
selectCategory.appendChild(categoryOption2);
selectCategory.appendChild(categoryOption3);
categoryDiv.appendChild(categoryLabel);
categoryDiv.appendChild(selectCategory);
form.appendChild(categoryDiv);

const commentDiv = document.createElement("div");
const commentLabel = document.createElement("label");
commentLabel.setAttribute("for", "fname");
commentLabel.textContent = "Comments";
const textAreaComment = document.createElement("textarea");
textAreaComment.setAttribute("id", "comment");
textAreaComment.setAttribute("name", "comment");
textAreaComment.setAttribute("placeholder", "Enter A Comment...");
textAreaComment.setAttribute("row", "3");
const spanComment = document.createElement("span");
commentDiv.appendChild(commentLabel);
commentDiv.appendChild(textAreaComment);
commentDiv.appendChild(spanComment);
form.appendChild(commentDiv);

const submitButtonDiv = document.createElement("div");
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
submitButtonDiv.appendChild(submitButton);
form.appendChild(submitButtonDiv);
