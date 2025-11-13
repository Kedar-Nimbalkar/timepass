// JavaScript to handle button click
const btn = document.getElementById("changeTextBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.textContent = "Thanks for clicking the button!";
  msg.style.color = "#0078d7";
});
