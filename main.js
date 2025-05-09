/*Menu hamburguesa */
const burguerMenu = document.getElementById('burguer-menu');
const menu = document.getElementById('menu');

burguerMenu.addEventListener('click', function () {
 
    menu.classList.toggle('open');
    burguerMenu.classList.toggle('open');
});




/*color mode*/

const modo = document.getElementById('toggle-color-mode'); /*activar oscuro*/
const restmodo = document.getElementById('reset-color-mode') /* activar claro*/ 

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro') {
  document.body.classList.add('oscuro');
  modo.style.display = 'none';
  restmodo.style.display = 'block';
} else {
  document.body.classList.add('claro');
  restmodo.style.display = 'none';
  modo.style.display = 'block';
} 

modo.addEventListener('click', () => {
  document.body.classList.remove('claro');
  document.body.classList.toggle('oscuro');
  localStorage.setItem('tema', 'oscuro');

  modo.style.display = 'none'
  restmodo.style.display = 'block'
});

restmodo.addEventListener('click', () => {
  document.body.classList.remove('oscuro');
  document.body.classList.toggle('claro');
  localStorage.setItem('tema', 'claro');

  restmodo.style.display = 'none'
  modo.style.display = 'block'
});
