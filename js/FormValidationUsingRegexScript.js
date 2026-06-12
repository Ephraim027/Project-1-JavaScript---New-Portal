const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

// Get references to the form elements

// Function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; //Regular expression to allow only letters and spaces
    return namePattern.test(name);
}

// Add an event listener to the button
greetButton.addEventListener('click', function () {
    // Get the value of the input
    const username = usernameInput.value.trim();

    // Check if the input is not empty and is valid
    if (username === '') {
        greetingMessage.textContent = 'Please enter your name.';
    }   else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters.';
    } else { 
        // Set the greeting message
        greetingMessage.textContent = `How are you today, ${username}?`;
    }
});


