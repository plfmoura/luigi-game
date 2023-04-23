//personagens
const luigi = document.querySelector('.luigi');
const luigiDie = document.querySelector('.luigi-die');
const enemy = document.querySelector('.enemy');
const bowser = document.querySelector('.enemy-bowser');
const bowserAnimate = document.querySelector('.bowser-animate');
const bowserWin = document.querySelector('.enemy-bowser-win');
//modal
const modal = document.querySelector('.die-modal');
const dieText = document.querySelector('.die-alert');
//Hud game
const startBtn = document.querySelector('.start-btn');
const score = document.querySelector('.score');
const contador = document.querySelector('.contador');
const highScore = document.querySelector('.high-score')
const textoInicio = document.querySelector('.txt-inicio');
const jumpBtn = document.querySelector('.jump-btn');


let getScore = localStorage.getItem('your-score')
highScore.innerHTML = getScore

enemy.style.display = 'none';

const highScores = (score) => {
    localStorage.setItem('your-score', score);
}

let count = 0
startBtn.addEventListener('click', () => {
    //tirar o botão e colocando contador quando iniciar o jogo.
    contador.style.visibility = 'visible';
    startBtn.style.display = 'none';

    //tirar o texto quando começar a jogar
    textoInicio.classList.add('txt-none');
    //voltar visibilidade do inimigo quando começar jogo
    enemy.style.display = 'block';
    //pulo
    const jump = () => {
        luigi.classList.add('jump');

        setTimeout(() => {
            luigi.classList.remove('jump');
        }, 600);

        //update score
        if (luigiDie.style.visibility != 'visible') {
            count++
            score.innerHTML = count
            count != 0 ? dieText.innerHTML = `Você perdeu! <br>Pontuação: ${count}` : "" 
        } else {
            return
        }
        return count
    }

    //jogo em si
    const loop = setInterval(() => {
        const enemyPosition = enemy.offsetLeft;
        const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px', '');

        // enemy touch - lost game
        if (enemyPosition <= 60 && enemyPosition > 1 && luigiPosition < 50) {
            enemy.style.animation = 'none';
            enemy.style.left = `${enemyPosition}px`;

            let getScore = localStorage.getItem('your-score')

            if(getScore < count) {
                highScores(count)
                dieText.innerHTML = `NOVO RECORDE! <br>Pontuação: ${count}`
            }

            luigi.style.visibility = 'hidden';

            luigiDie.style.visibility = 'visible'
            luigiDie.style.animation = 'luigi-die 2s ease-out'

            bowser.style.visibility = 'hidden';
            bowserWin.classList.add('bowser-visible');
            bowserWin.style.animation = 'bowser-win 3s normal'

            clearInterval('loop');

            modal.classList.add('die-alert-on');
            enemy.style.visibility = 'hidden';

            if (modal.classList.contains('die-alert-on')) {
                startBtn.style.pointerEvents = 'none';
            }
        }

    }, 10);

    addEventListener('keyup', (e) => {
        var codigoTecla = e.which || e.keyCode || 0;
        var space = codigoTecla == 32;
        if (space) {
            jump();
        }
    });

    jumpBtn.addEventListener('click', () => {
        jump();
    })

});