// app.ts
const message = "Hello, World!";
const appElement = document.getElementById("app");

if (appElement) {
    appElement.textContent = message;
} else {
    console.error("Element with id 'app' not found.");
}
