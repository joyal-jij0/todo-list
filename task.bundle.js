/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ "./src/delete.js");
/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checked.js */ "./src/checked.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, date){
    const tasks = document.querySelector('.tasks');
    const task = document.createElement('div');
    task.classList.add('task-item');
    task.innerHTML =`<div class="task"><div class="checkbox"></div><div class="name"> ${name}</div> <div class="date">${date}</div> <div class="delete"><i>✖</i></div></div>`;
    tasks.appendChild(task);
    (0,_delete_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_checked_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./src/checked.js":
/*!************************!*\
  !*** ./src/checked.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const checkedElements = document.querySelectorAll(".checkbox");
    checkedElements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('checked');
        });
    });
}

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const crosses = document.querySelectorAll('.delete');
    crosses.forEach(cross => {
        cross.addEventListener('click', ()=>{
                const parentElement = cross.parentElement;
                parentElement.remove();
        })
    })
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "textInput";
    textInput.placeholder = "Add Task";

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "dateInput";
    dateInput.placeholder ="Add deadline";

    let submitButton = document.createElement("button");
    submitButton.id = "submit";
    submitButton.innerHTML= `Submit`;

    let cancelButton = document.createElement("button");
    cancelButton.innerHTML = `Cancel`;
    cancelButton.id = "cancel";
    cancelButton.addEventListener('click', cancelForm);

    const addToDo = document.createElement("div");
    addToDo.classList.add("addToDo");

    addToDo.appendChild(textInput);
    addToDo.appendChild(dateInput);
    addToDo.appendChild(submitButton);
    addToDo.appendChild(cancelButton);


    function cancelForm(){
        addToDo.remove();
        submitButton.removeEventListener('click',handleSubmit);
        cancelButton.removeEventListener('click', cancelForm);
    }

    function handleSubmit(){
        const task1 = new Task(document.getElementById("textInput").value, document.getElementById("dateInput").value);
        (0,_addTask__WEBPACK_IMPORTED_MODULE_0__["default"])(task1.name, task1.date);
        submitButton.removeEventListener('click',handleSubmit);
        cancelButton.removeEventListener('click', cancelForm);
        addToDo.remove();
    }

    cancelButton.addEventListener('click',cancelForm);

    submitButton.addEventListener("click", handleSubmit);

    const tasks = document.querySelector(".tasks");
    tasks.appendChild(addToDo);


    function Task(name, date){
        this.name = name;
        this.date = date;
    }



}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNFOztBQUV4Qyw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsS0FBSywyQkFBMkIsS0FBSztBQUM3SDtBQUNBLElBQUksc0RBQVk7QUFDaEIsSUFBSSx1REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsNkJBQWUsc0NBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ1JBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEMsNkJBQWUsc0NBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWxldGVNb2R1bGUgZnJvbSAnLi9kZWxldGUuanMnXG5pbXBvcnQgY2hlY2tlZE1vZHVsZSBmcm9tICcuL2NoZWNrZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGRhdGUpe1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgdGFzay5pbm5lckhUTUwgPWA8ZGl2IGNsYXNzPVwidGFza1wiPjxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJuYW1lXCI+ICR7bmFtZX08L2Rpdj4gPGRpdiBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9kaXY+IDxkaXYgY2xhc3M9XCJkZWxldGVcIj48aT7inJY8L2k+PC9kaXY+PC9kaXY+YDtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICBkZWxldGVNb2R1bGUoKTtcbiAgICBjaGVja2VkTW9kdWxlKCk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBjaGVja2VkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICAgIGNoZWNrZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY3Jvc3NlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcbiAgICBjcm9zc2VzLmZvckVhY2goY3Jvc3MgPT4ge1xuICAgICAgICBjcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGNyb3NzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkVGFzayBmcm9tIFwiLi9hZGRUYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgbGV0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRleHRJbnB1dC5pZCA9IFwidGV4dElucHV0XCI7XG4gICAgdGV4dElucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgVGFza1wiO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZUlucHV0XCI7XG4gICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID1cIkFkZCBkZWFkbGluZVwiO1xuXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MPSBgU3VibWl0YDtcblxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBgQ2FuY2VsYDtcbiAgICBjYW5jZWxCdXR0b24uaWQgPSBcImNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuXG4gICAgY29uc3QgYWRkVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVG9Eby5jbGFzc0xpc3QuYWRkKFwiYWRkVG9Eb1wiKTtcblxuICAgIGFkZFRvRG8uYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICBhZGRUb0RvLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgYWRkVG9Eby5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIGFkZFRvRG8uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXG4gICAgZnVuY3Rpb24gY2FuY2VsRm9ybSgpe1xuICAgICAgICBhZGRUb0RvLnJlbW92ZSgpO1xuICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVN1Ym1pdCk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpe1xuICAgICAgICBjb25zdCB0YXNrMSA9IG5ldyBUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZSk7XG4gICAgICAgIGFkZFRhc2sodGFzazEubmFtZSwgdGFzazEuZGF0ZSk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlU3VibWl0KTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRm9ybSk7XG4gICAgICAgIGFkZFRvRG8ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjYW5jZWxGb3JtKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KTtcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChhZGRUb0RvKTtcblxuXG4gICAgZnVuY3Rpb24gVGFzayhuYW1lLCBkYXRlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cblxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9