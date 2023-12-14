const $menu_show = document.getElementById('menu_show');
const $menu_mobile = document.querySelector('.menu_mobile');
const $menu_btn = document.querySelectorAll('.menu_btn');
// Desenvolvido por:
// Danilo de Jesus Santos Oliveira
// João Carlos Duca Silva
// Lue Rodrigues do Amaral

const $menu_mobile_btn = document.querySelectorAll('.menu_mobile_btn');

$menu_show.addEventListener('click', () => {
    if ($menu_mobile.style.display == 'block') {
        $menu_mobile.style.setProperty('display', 'none');
        $menu_btn.forEach(btn => btn.src = '/img/menu.svg');
    } else {
        $menu_mobile.style.setProperty('display', 'block');
        $menu_btn.forEach(btn => btn.src = '/img/close.svg');
    }

});

setInterval(function() {
    if ($menu_mobile_btn.style.display == 'none') {
        $menu_mobile.style.setProperty('display', 'flex');
    }
}, 1000); // 1000 milissegundos = 1 segundo