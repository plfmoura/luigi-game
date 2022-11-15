//personagens
const luigi = document.querySelector('.luigi');
const enemy = document.querySelector('.enemy');
const bowser = document.querySelector('.enemy-bowser');
const bowserWin = document.querySelector('.enemy-bowser-win');
//modal
const modal = document.querySelector('.die-modal');
const dieText = document.querySelector('.die-alert');
//Hud game
const startBtn = document.querySelector('.start-btn');
const score = document.querySelector('.score');
const textoInicio = document.querySelector('.txt-inicio');

enemy.style.display = 'none';

startBtn.addEventListener('click', () => {
    //tirar o botão quando iniciar o jogo.
    startBtn.style.display = 'none';
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
                }
            } 
            });
        }

    pontuacao();

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
    
            luigi.style.animation = 'none';
            luigi.style.left = `${luigiPosition}px`;
    
            luigi.src = 'assets/die.png';
            luigi.style.width = '70px'
            luigi.style.marginLeft = '12px'

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
});