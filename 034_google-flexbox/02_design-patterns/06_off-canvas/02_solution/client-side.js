var button = document.querySelector('#menu');
var menu = document.querySelector('.c5');
button.addEventListener('click', toggleMenu, false);

function toggleMenu() {
    console.log(menu.style);
    //console.log(menu.style.left);
    if (menu.style.left == '-300px' || menu.style.left == '') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-300px';
    }
}

