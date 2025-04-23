/*Menu hamburguesa */
const burguerMenu = document.getElementById('burguer-menu');
const menu = document.getElementById('menu');

burguerMenu.addEventListener('click', function () {
 
    menu.classList.toggle('open');
    burguerMenu.classList.toggle('open');
});
