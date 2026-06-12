const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    // Set its text content
    newParagraph.textContent = 'Congratulations on learning Practical JavaScript!';
    // Append the paragraph to the container
    paragraphContainer.appendChild(newParagraph);
});