console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("EventTarget", event.target);
  const formdata = new FormData(event.target);
  const data = Object.fromEntries(formdata);

  console.log("data", data);
  event.target.reset();
  event.target.elements.firstName.focus();
});
