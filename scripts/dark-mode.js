//body background
const bg = document.querySelector('body');
//céu
const ceu = document.querySelector('.game-board');
//textos
const contadorDiv = document.querySelector('.contador');

const modoEscuroBtn = document.querySelector('.dark-mode-btn');

modoEscuroBtn.addEventListener('click', () => {
    bg.classList.toggle('body-dm');
    contadorDiv.classList.toggle('contador-escuro');
    ceu.classList.toggle('ceu-dm');

    //trocar nome no botão
    if(ceu.classList.contains('ceu-dm')){
        modoEscuroBtn.innerHTML = 'Modo Claro'
        modoEscuroBtn.style.background = '#c1c1c1'
        modoEscuroBtn.style.color = '#000'
    } else {
        modoEscuroBtn.innerHTML = 'Modo Escuro'
        modoEscuroBtn.style.background = '#081c24'
        modoEscuroBtn.style.color = '#fff'
    }
});