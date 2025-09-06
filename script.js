// =========================
// Part 2: JavaScript Functions
// =========================

// Example of global scope
let globalMessage = "Hello from Global Scope";

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b; // returns the sum of two numbers
}

// Demonstrating local vs global scope
function demonstrateScope() {
  let localMessage = "Hello from Local Scope"; // local variable
  console.log(globalMessage); // accessible everywhere
  console.log(localMessage);  // only accessible inside this function
}
demonstrateScope();

// Event listener for sum calculation
const sumBtn = document.getElementById("sumBtn");
sumBtn.addEventListener("click", () => {
  // Get values from inputs
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultSpan = document.getElementById("sumResult");

  // Use our reusable function with parameters and return value
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = addNumbers(num1, num2);
    resultSpan.textContent = result;
  } else {
    resultSpan.textContent = "Please enter valid numbers!";
  }
});

// =========================
// Part 3: Combining CSS + JS
// =========================

// Select button and box elements
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

// Toggle the 'animate' CSS class on the box
animateBtn.addEventListener("click", () => {
  animateBox.classList.toggle("animate");
});
