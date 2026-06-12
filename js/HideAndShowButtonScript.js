const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

//Toggle the menu visibility when the menu button is clicked
menuButton.addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }    
});