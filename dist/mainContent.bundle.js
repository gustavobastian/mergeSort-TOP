/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmergeSort_app"] = self["webpackChunkmergeSort_app"] || []).push([["mainContent"],{

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\")\n\nconst mainContent= function(){\n    let data;\n\n    function generating(){\n        console.log(\"here\")\n        let content=document.getElementById(\"innerPlace\")        \n        let contentMessage=document.createElement('div')\n        contentMessage.className=\"message\";\n        let message=document.createElement('p')\n        message.innerText=\"Please insert elements of the array, then press execute\"\n        contentMessage.appendChild(message);\n        content.appendChild(contentMessage);\n\n        //array elements\n        let gridElements=document.createElement('div')\n        gridElements.nameClass=\"gridElements\";\n        gridElements.id=\"gridElements\";\n        for (let i=0;i<10;i++)\n        {\n            let arrayElement=document.createElement('input')\n            arrayElement.className=\"arrayElement\";\n            arrayElement.type=\"text\";\n            arrayElement.id=\"arrayElement_\"+i;\n            gridElements.appendChild(arrayElement)\n        }\n        content.appendChild(gridElements);\n\n        //executing button\n        let divButton=document.createElement('div')\n        divButton.className=\"divButton\";\n\n        let executeButton=document.createElement('button')\n        executeButton.className=\"executeButton\";\n        executeButton.id=\"executeButton\";\n        executeButton.innerText=\"Execute\"\n        divButton.appendChild(executeButton);\n        content.appendChild(divButton);\n\n\n\n\n\n        \n        return content;\n    }\n\n    return {\n        generating,\n        data\n    }\n}\n\nmodule.exports={mainContent};\n\n//# sourceURL=webpack://mergeSort-app/./src/mainContent.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mainContent.js"));
/******/ }
]);