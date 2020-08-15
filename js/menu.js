var player = 'X';
var jogadas = 0;
const winner = document.getElementById('vencedor');
var casas = document.getElementsByClassName('box');
var vitorias = [
    [ casas[0], casas[1], casas[2] ],
    [ casas[3], casas[4], casas[5] ],
    [ casas[6], casas[7], casas[8] ],

    [ casas[0], casas[3], casas[6] ],
    [ casas[1], casas[4], casas[7] ],
    [ casas[2], casas[5], casas[8] ],

    [ casas[2], casas[4], casas[6] ],
    [ casas[0], casas[4], casas[8] ]
];

for(casa of casas){
    casa.innerHTML = "";
}

$(document).on('click', '.selectable', function(e){
    let casaAutal = document.getElementById(e.target.id);
    casaAutal.classList.add('selected');
    casaAutal.classList.remove('selectable');
    jogadas++;
    console.log(jogadas);
    
    if(player === 'X'){
        casaAutal.innerHTML = player;
        verificarVitoria();
        player = 'O';
    }
    else if(player === 'O'){
        casaAutal.innerHTML = player;
        verificarVitoria();
        player = 'X';
    }
    else{
        console.error("Erro no player");
    }
});


function verificarVitoria(){
    for(vitoria of vitorias){
        console.log(vitoria);
        
        let win =
        vitoria[0].innerHTML == vitoria[1].innerHTML
        &&
        vitoria[1].innerHTML == vitoria[2].innerHTML
        &&
        vitoria[0].innerHTML != "";

        console.log(win);
        
        if(win){
            declararVencedor();
            return 0;
        } 
    }
    if(jogadas === 9){
        winner.innerHTML = `Empate!`;
        winner.classList.remove('hidden');
        bloquearJogo();
    }

    
}


function bloquearJogo(){
    for(casa of casas){
        casa.classList.remove('selectable');
    }
}

function declararVencedor(){
    winner.innerHTML = `O jogador ${player} venceu!`;
    winner.classList.remove('hidden');
    bloquearJogo();
}

$(document).on('click', '#resetar', function(e){
    jogadas = 0;
    winner.classList.add('hidden');
    let casas = document.getElementsByClassName('box');
    for(casa of casas){
        casa.innerHTML = "";
        casa.classList.remove('selected');
        casa.classList.add('selectable');
    }
});
