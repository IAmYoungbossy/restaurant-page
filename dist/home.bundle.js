/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

eval("function defaultPage() {\n  const createDomElement = function () {\n    const content = document.querySelector(\"#content\");\n    const header = document.createElement(\"header\");\n    const logoContainer = document.createElement(\"div\");\n    const menuContainer = document.createElement(\"div\");\n    const logo = document.createElement(\"h1\");\n    const menu = document.createElement(\"ul\");\n    const menuHome = document.createElement(\"li\");\n    const menuMenu = document.createElement(\"li\");\n    const menuContact = document.createElement(\"li\");\n    const body = content.parentNode;\n    return {\n      content,\n      header,\n      logoContainer,\n      logo,\n      menu,\n      menuContainer,\n      menuHome,\n      menuMenu,\n      menuContact,\n      body,\n    };\n  };\n  const appendElements = function () {\n    createDomElement.body.insertBefore(header, content);\n    createDomElement.header.appendChild(logoContainer);\n    createDomElement.header.appendChild(menuContainer);\n    createDomElement.logoContainer.appendChild(logo);\n    createDomElement.menuContainer.appendChild(menu);\n    createDomElement.menu.appendChild(menuHome);\n    createDomElement.menu.appendChild(menuMenu);\n    createDomElement.menu.appendChild(menuContact);\n  };\n  const headerTextContent = function () {\n    createDomElement.logo.textContent = \"The Burger Palace\";\n    createDomElement.menuHome.textContent = \"Home\";\n    createDomElement.menuMenu.textContent = \"Menu\";\n    createDomElement.menuContact.textContent = \"Contact\";\n  };\n  const centerButtons = function () {\n    const buttonContainer = document.createElement(\"div\");\n    const orderButton = document.createElement(\"div\");\n    const contactUsButton = document.createElement(\"div\");\n    createDomElement.content.appendChild(buttonContainer);\n    buttonContainer.appendChild(orderButton);\n    buttonContainer.appendChild(contactUsButton);\n  };\n  const centerButtonsTextContent = function () {\n    orderButton.textContent = \"Order Food\";\n    contactUsButton.textContent = \"Contact Us!\";\n  };\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"]();
/******/ 	
/******/ })()
;