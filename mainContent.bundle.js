/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmergeSort_app"] = self["webpackChunkmergeSort_app"] || []).push([["mainContent"],{

/***/ "./src/fibonacci.js":
/*!**************************!*\
  !*** ./src/fibonacci.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fibonacci\": () => (/* binding */ fibonacci),\n/* harmony export */   \"fibs\": () => (/* binding */ fibs)\n/* harmony export */ });\nfunction fibs(n){\n    let output=[];\n    for (let i=0;i<n;i++){\n        if(i==0)\n            {output.push(0);}\n        if(i==1)\n            {output.push(1);}    \n        if(i>1)    \n            {output.push(output[i-1]+output[i-2])}\n    }\n    return output;\n}\n\nfunction fibonacci(n){    \n    if(n==0)\n        return 0;\n    if(n==1)\n        return 1;\n    else\n        return fibonacci(n-1) + fibonacci(n-2)   \n}\n\n\n//# sourceURL=webpack://mergeSort-app/./src/fibonacci.js?");

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { mergeSort } = __webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\");\nconst { fibs } = __webpack_require__(/*! ./fibonacci.js */ \"./src/fibonacci.js\");\n\n\n\nconst mainContent= function(){\n    let origin=[0,0,0,0,0,0,0,0,0,0];\n    let result=[];\n    let resultString=\"Result=[]\"\n    let fibonacciInput=0;\n\n    function generating(){  \n              \n        let content=document.getElementById(\"innerPlace\")        \n\n        let contentMessageFibo=document.createElement('div')\n        contentMessageFibo.className=\"message\";\n        let messageFibo=document.createElement('p')\n        messageFibo.innerText=\"Please insert Number for get the fibonacci value\"\n        contentMessageFibo.appendChild(messageFibo);\n        content.appendChild(contentMessageFibo);\n\n        let FiboElement=document.createElement('input')\n        FiboElement.className=\"arrayElement\";\n        FiboElement.type=\"text\";\n        FiboElement.id=\"fiboNumber\";\n        FiboElement.value=0;\n        content.appendChild(FiboElement);\n        //executing button\n        let divFiboButton=document.createElement('div')\n        divFiboButton.className=\"divButton\";\n\n        let executeFiboButton=document.createElement('button')\n        executeFiboButton.className=\"executeButton\";\n        executeFiboButton.id=\"executeFiboButton\";\n        executeFiboButton.innerText=\"Fibonacci\"\n        divFiboButton.appendChild(executeFiboButton);\n        content.appendChild(divFiboButton);\n\n        //Fibonacci result content\n\n        let fiboResultbox=document.createElement('div')\n        fiboResultbox.className=\"resultbox\";\n\n        let fiboResultText=document.createElement('textArea')\n        fiboResultText.className=\"resultText\";\n        fiboResultText.rows=50;\n        fiboResultText.id=\"fiboResultText\";\n        fiboResultText.innerText=\"Result = \";\n        fiboResultbox.appendChild(fiboResultText);\n        content.appendChild(fiboResultbox);\n\n\n        let contentMessage=document.createElement('div')\n        contentMessage.className=\"message\";\n        let message=document.createElement('p')\n        message.innerText=\"Please insert elements values of the array, will be sorted automatically\"\n        contentMessage.appendChild(message);\n        content.appendChild(contentMessage);\n\n        //array elements\n        let gridElements=document.createElement('div')\n        gridElements.nameClass=\"gridElements\";\n        gridElements.id=\"gridElements\";\n        for (let i=0;i<10;i++)\n        {\n            let arrayElement=document.createElement('input')\n            arrayElement.className=\"arrayElement\";\n            arrayElement.type=\"text\";\n            arrayElement.id=\"arrayElement_\"+i;\n            arrayElement.value=0;\n            gridElements.appendChild(arrayElement)\n        }\n        content.appendChild(gridElements);\n\n        \n\n        //result content\n\n        let resultbox=document.createElement('div')\n        resultbox.className=\"resultbox\";\n\n        let resultText=document.createElement('div')\n        resultText.className=\"resultText\";\n        resultText.id=\"resultText\";\n        resultText.innerText=resultString;\n        resultbox.appendChild(resultText);\n        content.appendChild(resultbox);\n\n\n\n        /*****adding listeners*/\n\n\n        //fibonacci\n        let executeFiboButtonL=document.getElementById(\"executeFiboButton\")\n        executeFiboButtonL.addEventListener(\"click\",function(){\n            console.log(\"input \"+fibonacciInput)\n            let resultFibo=fibs(fibonacciInput);\n\n            let fiboText=\"\";\n            let i=0;\n            resultFibo.forEach(element => {\n                if(i==0)\n                    fiboText+=element;\n                else\n                    fiboText+=\",\"+element;\n                i++;    \n            });\n            console.log(resultFibo);\n            let resultElement=document.getElementById(\"fiboResultText\");\n            resultElement.innerText=\"Result:\"+fiboText;\n        })\n\n        let inputListenerFibo=document.getElementById(\"fiboNumber\");\n        inputListenerFibo.addEventListener(\"change\",function(){\n            console.log(\"change\");\n            console.log(inputListenerFibo.value)\n            if (isNaN(inputListenerFibo.value)){\n                inputListenerFibo.value=0\n                window.alert(\"only works with numbers!\")\n            }\n            fibonacciInput = parseInt(inputListenerFibo.value)\n            inputListenerFibo.value=parseInt(inputListenerFibo.value);\n        })    \n\n\n        //merge\n        \n\n        for (let d=0;d<10;d++){            \n            let inputListener=document.getElementById(\"arrayElement_\"+d);\n            inputListener.addEventListener(\"change\",async function(){\n                console.log(\"change\");\n                console.log(inputListener.value)\n                if (isNaN(inputListener.value)){\n                    inputListener.value=0\n                    window.alert(\"only works with numbers!\")\n                    return;\n                }\n                console.log(\"position \"+d)\n                origin[d]= parseInt(inputListener.value)\n                inputListener.value=  parseInt(inputListener.value);\n                console.log(\"origin \"+origin)\n                execute();\n            })\n        }\n\n        async function execute(){\n            let originLocal=[];\n            origin.forEach(element => {\n                originLocal.push(element)\n            });\n            console.log(\"origin:\"+origin)\n            result=await mergeSort(originLocal)\n            console.log(result)\n            resultString=\"[\";\n            let index=0;\n            result.forEach(element => {\n                if(index!=9)\n                    resultString+=element+\",\";\n                else    \n                    resultString+=element;\n                \n                index++;    \n            });\n            resultString+=\"]\"\n            let resultElement=document.getElementById(\"resultText\");\n            resultElement.innerText=resultString;\n        }\n        \n        return content;\n    }\n\n    return {\n        generating,\n        result\n    }\n}\n\nmodule.exports={mainContent};\n\n//# sourceURL=webpack://mergeSort-app/./src/mainContent.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mainContent.js"));
/******/ }
]);