const loginForm = document.querySelector(".login-form");
const formMessage = document.querySelector(".form-message");

if (loginForm && formMessage) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Login form is ready. Authentication can be connected next.";
  });
}
