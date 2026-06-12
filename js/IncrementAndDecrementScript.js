const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Initialize the counter
let count = 0;

// Increment the counter and update the display when the button is clicked
incrementButton.addEventListener('click', function () {
    count += 1; // Increment the counter by 1
    counterDisplay.textContent = count; // Update the counter display
});

// Decrement the counter and update the display when the button is clicked
decrementButton.addEventListener('click', function () {
    count -= 1; // Decrement the counter by 1
    counterDisplay.textContent = count; // Update the counter display
});