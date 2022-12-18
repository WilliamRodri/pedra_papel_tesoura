const game = () => {
    let pontuacaoJogador = 0;
    let pontuacaoComputador = 0;
    let jogadas = 0;

    const playGame = () => {
        const pedraBtn = document.querySelector('.pedra');
        const papelBtn = document.querySelector('.papel');
        const tesouraBtn = document.querySelector('.tesoura');
        const opcaoJogadas = [pedraBtn, papelBtn, tesouraBtn];
        const opcaoComputador = ['pedra', 'papel', 'tesoura'];

        // funcao para start game
        opcaoJogadas.forEach(option => {
            option.addEventListener('click', function () {
                const jogadasEsquerda = document.querySelector('.jogadasEsquerda');
                jogadas++;
                jogadasEsquerda.innerHTML = `Jogadas: ${10-jogadas}`;

                const escolhaNumero = Math.floor(Math.random() * 3);
                const computadorNumero = opcaoComputador[escolhaNumero];

                //funcao para saber qual button computador clicou
                const pedraB = document.querySelector('.pc-pedra');
                const papelB = document.querySelector('.pc-papel');
                const tesouraB = document.querySelector('.pc-tesoura');

                if (computadorNumero == 'pedra') {
                    pedraB.style.opacity = '100';
                    papelB.style.opacity = '0';
                    tesouraB.style.opacity = '0';
                } else if (computadorNumero == 'pc-papel') {
                    pedraB.style.opacity = '0';
                    papelB.style.opacity = '100';
                    tesouraB.style.opacity = '0';
                } else {
                    pedraB.style.opacity = '0';
                    papelB.style.opacity = '0';
                    tesouraB.style.opacity = '100';
                }



                // função de quem ganhou
                ganhador(this.innerHTML, computadorNumero)

                if (jogadas == 10) {
                    gameOver(opcaoJogadas, jogadasEsquerda);
                }

            })
        })
    }

    //função do vencedor
    const ganhador = (jogador, computador) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.j-contador');
        const computerScoreBoard = document.querySelector('.c-contador');
        jogador = jogador.toLowerCase();
        computador = computador.toLowerCase();
        if (jogador == computador) {
            result.textComptent = 'Empate';
        } else if (jogador == 'pedra') {
            if (computador == 'papel') {
                result.textContent = 'Computador Venceu';
                pontuacaoComputador++;
                computerScoreBoard.textContent = pontuacaoComputador;
            } else {
                result.textContent = 'Jogador Venceu';
                pontuacaoJogador++;
                playerScoreBoard.textContent = pontuacaoJogador;
            }


        } else if (jogador == 'tesoura') {
            if (computador == 'pedra') {
                result.textContent = 'Computador Venceu';
                pontuacaoComputador++;
                computerScoreBoard.textContent = pontuacaoComputador;
            } else {
                result.textContent = 'Jogador Venceu';
                pontuacaoJogador++;
                playerScoreBoard.textContent = pontuacaoJogador;
            }


        } else if (jogador == 'papel') {
            if (computador == 'tesoura') {
                result.textContent = 'Computador Venceu';
                pontuacaoComputador++;
                pontuacaoComputador.textContent = pontuacaoComputador;
            } else {
                computerScoreBoard.
                result.textContent = 'Jogador Venceu';
                pontuacaoJogador++;
                playerScoreBoard.textContent = pontuacaoJogador;
            }
        }

    }
    // funcion to run when game is over
    const gameOver = (jogadas, jogadasEsquerda) => {
        const escolhaJogada = document.querySelector('.jogadas');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        escolhaJogada.innerHTML = "Game Over";
        jogadasEsquerda.style.display = 'none';

        if (pontuacaoJogador > pontuacaoComputador) {
            result.style.fontSize = '2rem';
            result.innerHTML = 'Você ganhou o jogo';
            result.style.color = 'pink';

        } else if (pontuacaoJogador < pontuacaoComputador) {
            result.style.fontSize = '2rem';
            result.innerHTML = 'Você perdeu o jogo';
            result.style.color = 'red';

        } else {
            result.style.fontSize = '2rem';
            result.innerHTML = 'Amarre o jogo';
            result.style.color = 'rgb(218, 100, 9)';

        }
        reloadBtn.innerHTML = "Reiniciar";
        reloadBtn.style.display = 'flex';
    }

    playGame();
}

//funcao para saber qual button foi clicado
let img_um = document.getElementById('j-pedra');
let img_dois = document.getElementById('j-papel');
let img_tres = document.getElementById('j-tesoura');

function pedra() {
    img_um.style.opacity = '100';
    img_dois.style.opacity = '0';
    img_tres.style.opacity = '0';
}

function papel() {
    img_um.style.opacity = '0';
    img_dois.style.opacity = '100';
    img_tres.style.opacity = '0';
}

function tesoura(){
    img_um.style.opacity = '0';
    img_dois.style.opacity = '0';
    img_tres.style.opacity = '100';
}



game();