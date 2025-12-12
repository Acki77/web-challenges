console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const add = document.querySelector('[data-js="add"]');
const subtract = document.querySelector('[data-js="subtract"]');
const multiply = document.querySelector('[data-js="multiply"]');
const divide = document.querySelector('[data-js="divide"]');
const exponent = document.querySelector('[data-js="exponent"]');
const modulo = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
add.addEventListener("click", () => {
  let summe = operand1 + operand2;
  console.log(
    "Die Summe aus " + operand1 + " + " + operand2 + " ist gleich: " + summe
  );
});
subtract.addEventListener("click", () => {
  let differenz = operand1 - operand2;
  console.log(
    "Die Differenz aus " +
      operand1 +
      " - " +
      operand2 +
      " ist gleich: " +
      differenz
  );
});
multiply.addEventListener("click", () => {
  let produkt = operand1 * operand2;
  console.log(
    "Das Produkt aus " + operand1 + " * " + operand2 + " ist gleich: " + produkt
  );
});
divide.addEventListener("click", () => {
  let quotient = operand1 / operand2;
  console.log(
    "Der Quotient aus " +
      operand1 +
      " / " +
      operand2 +
      " ist gleich: " +
      quotient
  );
});
exponent.addEventListener("click", () => {
  let potenzwert = operand1 ** operand2;
  console.log(
    "Der Potenzwert aus der Basis " +
      operand1 +
      " hoch Exponent " +
      operand2 +
      " ist gleich: " +
      potenzwert
  );
});
modulo.addEventListener("click", () => {
  let rest = operand1 % operand2;
  console.log(
    "Der Restwert aus der Divison " +
      operand1 +
      " / " +
      operand2 +
      " ist gleich: " +
      rest
  );
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseByOne = document.querySelector('[data-js="increase-by-one"]');
const increaseByFive = document.querySelector('[data-js="increase-by-five"]');
const decreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
const decreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
const multiblyByTwo = document.querySelector('[data-js="multiply-by-two"]');
const divideByTwo = document.querySelector('[data-js="divide-by-two"]');

increaseByOne.addEventListener("click", () => {
  operand1++;
  console.log("Neuer Wert Operand1 erhöht um 1: " + operand1);
});
increaseByFive.addEventListener("click", () => {
  operand1 += 5;
  console.log("Neuer Wert Operand1 erhöht um 5: " + operand1);
});
decreaseByOne.addEventListener("click", () => {
  operand1--;
  console.log("Neuer Wert Operand1 reduziert um 1: " + operand1);
});
decreaseByFive.addEventListener("click", () => {
  operand1 -= 5;
  console.log("Neuer Wert Operand1 reduziert um 5: " + operand1);
});
multiblyByTwo.addEventListener("click", () => {
  operand1 *= 2;
  console.log("Neuer Wert Operand1 multipliziert mit 2: " + operand1);
});
divideByTwo.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log("Neuer Wert Operand1 dividiert durch 2: " + operand1);
});
// --^-- write your code here --^--
