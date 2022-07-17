import './style.css';

const body = document.querySelector('body');
const content = document.querySelector('#content');
const header = document.createElement('hi');

header.textContent = "Welcome To Our Restaurant";

content.appendChild(header);
body.appendChild(content);

body.classList.add('hello');
console.log('Hello Bossman');