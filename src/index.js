import './style.css';

const content = document.querySelector('#content');
const header = document.createElement('header');
const logoContainer = document.createElement('div');
const menuContainer = document.createElement('div');
const logo = document.createElement('h1');
const menu = document.createElement('ul');
const menuHome = document.createElement('li');
const menuMenu = document.createElement('li');
const menuContact = document.createElement('li');

content.appendChild(header);
header.appendChild(logoContainer);
header.appendChild(menuContainer);
logoContainer.appendChild(logo);
menuContainer.appendChild(menu);
menu.appendChild(menuHome);
menu.appendChild(menuMenu);
menu.appendChild(menuContact);

logo.textContent = 'The Burger Palace';
menuHome.textContent = 'Home';
menuMenu.textContent = 'Menu';
menuContact.textContent = 'Contact';