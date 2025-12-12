console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkbutton = document.querySelector('[data-js="dark-mode-button"]');
darkbutton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log(bodyElement.classList);
});
const lightbutton = document.querySelector('[data-js="light-mode-button"]');
lightbutton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("removed dark");
});
const togglebutton = document.querySelector('[data-js="toggle-button"]');
togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
