"use strict";
// app.ts
var message = "Hello, World!";
var appElement = document.getElementById("app");
if (appElement) {
    appElement.textContent = message;
}
else {
    console.error("Element with id 'app' not found.");
}
