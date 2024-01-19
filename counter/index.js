const counterElement = document.getElementById("counter");
let counterValue = 0;

// Function to update the counter value on the DOM
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Increment the counter value when the "Increment" button is clicked
document.getElementById("increment").addEventListener("click", () => {
  counterValue++;
  //   counterElement.textContent = counterValue;
  updateCounter();
});

// Decrement the counter value when the "Decrement" button is clicked
document.getElementById("decrement").addEventListener("click", () => {
  counterValue--;
  updateCounter();
  //   counterElement.textContent = counterValue;
});

document.getElementById("reset1").addEventListener("click", () => {
  counterValue = 0;
  //   counterElement.textContent = counterValue;
  updateCounter();
});
