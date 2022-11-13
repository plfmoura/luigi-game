const luigi = document.querySelector('.luigi');
const enemy = document.querySelector('.enemy');
const modal = document.querySelector('.die-modal');
const score = document.querySelector('.score').innerHTML;

const jump = () => {
    luigi.classList.add('jump');

    setTimeout(() => {
        luigi.classList.remove('jump');
    },  600);
}

const loop = setInterval(() => {

    const enemyPosition = enemy.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px','');
    
    if(enemyPosition <= 60 && enemyPosition > 1 && luigiPosition < 50) {
        enemy.style.animation = 'none';
        enemy.style.left = `${enemyPosition}px`;

        luigi.style.animation = 'none';
        luigi.style.left = `${luigiPosition}px`;

        luigi.src = 'assets/die.png';
        luigi.style.width = '70px'
        luigi.style.marginLeft = '12px'

        clearInterval('loop');
        
        modal.classList.add('die-alert-on');
        enemy.style.visibility = 'hidden';
    }

    }, 10);

    document.addEventListener('keypress', jump);