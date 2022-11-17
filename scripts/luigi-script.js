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
const textoInicio = document.querySelector('.txt-inicio');
const jumpBtn = document.querySelector('.jump-btn');

enemy.style.display = 'none';

//pontuação
var pulos = 1;
function pontuacao() {
    var jump = addEventListener('keyup', function(e) {
        var codigoTecla = e.which || e.keyCode || 0;
        var space = codigoTecla == 32;
        if(space){
            score.innerHTML = pulos++;
            if (pulos > 0){
                let pulosTotais = pulos -1;
                dieText.innerHTML = `Você Perdeu! <br>pontuanção: ${pulosTotais}`;
            };
        };
    });
    jumpBtn.addEventListener('click', () => {
        score.innerHTML = pulos++;
        if (pulos > 0){
            let pulosTotais = pulos -1;
            dieText.innerHTML = `Você Perdeu! <br>pontuanção: ${pulosTotais}`;
        };
    });
};

pontuacao()

// function trocarAnimacao() {
//     const gerador = (min, max) => {
//         min = Math.ceil(0);
//         max = Math.floor(3);
//         return Math.floor(Math.random() * (max - min) + min)
//     }
    
//     setInterval(gerador(), 100);
//     setInterval(console.log(gerador()), 102);
    
//     if(gerador() === 1){
//         console.log('primeiro')
//         bowser.classList.toggle('bowser-animate')
//         bowserAnimate.style.animation = 'bowser-attack 3s normal';
//     } else if (gerador() === 2){
//         console.log('segundo')
//         bowser.classList.toggle('bowser-animate')
//         bowserAnimate.style.animation = 'bowser-retreat 20s normal';
//     } else {
//         console.log('padrão')
//         bowser.classList.toggle('bowser-animate')
//         bowserAnimate.style.animation = 'bowser 4s infinite';
//     }
// }

// setInterval(trocarAnimacao(), 100);

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
        },  600);
    }

    //jogo em si
    const loop = setInterval(() => {
        
        const enemyPosition = enemy.offsetLeft;
        const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px','');
        
        if(enemyPosition <= 60 && enemyPosition > 1 && luigiPosition < 50) {

            enemy.style.animation = 'none';
            enemy.style.left = `${enemyPosition}px`;
    
            luigi.style.visibility = 'hidden';
    
            luigiDie.style.visibility = 'visible'
            luigiDie.style.animation = 'luigi-die 2s ease-out'

            bowser.style.visibility = 'hidden';
            bowserWin.classList.add('bowser-visible');
            bowserWin.style.animation = 'bowser-win 3s normal'
    
            clearInterval('loop');
            
            modal.classList.add('die-alert-on');
            enemy.style.visibility = 'hidden';

            if(modal.classList.contains('die-alert-on')){
                startBtn.style.pointerEvents = 'none';
            } 
        }

        }, 10);

        addEventListener('keyup', (e) => {
            var codigoTecla = e.which || e.keyCode || 0;
            var space = codigoTecla == 32;
            if(space){
                jump();
            }
        });

        jumpBtn.addEventListener('click', () => {
            jump();
        })

});