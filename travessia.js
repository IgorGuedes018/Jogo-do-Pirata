let contador = 0;

let botao = document.querySelector(".button__start");       // botao

let telaVitoria = document.querySelector(".win");                    // vitoria
let botaoVitoria = document.querySelector(".restart__vit");         // botao restart de vitoria
let telaDerrota = document.querySelector(".lose");                   // derrota
let botaoDerrota = document.querySelector(".restart__derr");         // botao restart de derrota

let leftSide = document.querySelector(".left");         //esque
let rightSide = document.querySelector(".right");        //dir


let divShip = document.querySelector(".divShip");       // div do bot
let ship = document.querySelector(".ship");             // varievel do bote

let sheep = document.querySelector("#ovelha");           // ovelha    por id
let wolf = document.querySelector("#lobo");             // lobo         por id  
let turnip = document.querySelector("#nabo");           // nabo         por id

divShip.style.justifyContent = "flex-start";        // ficar na esquerda


botao.addEventListener("click", () => {
    let cube = document.querySelector(".start");     // iniciando jogo
    cube.style.display = "none";
});


sheep.addEventListener("click", () => {      // eventos q chamam a funcao de mover e tirar para o bote
    move(sheep.id, sheep);
});
wolf.addEventListener("click", () => {
    move(wolf.id, wolf);
});
turnip.addEventListener("click", () => {
    move(turnip.id, turnip);
});

function move(id, object)                                                     // funcao pra mover e tirar do abrco
{
    if (divShip.style.justifyContent == "flex-start")                       // verifica se o bot esta na esquerda
    {
        if (leftSide.querySelector(`#${id}`) != null && contador == 0)      // objeto se mover para o barco, verifica se tem assnimals no barco
        {
            leftSide.removeChild(object);
            object.style.position = "absolute";                                 //  remove objeto da esquerda
            divShip.appendChild(object);                                       // coloca objeto ela na div do barco
            contador++;                                                       // contador de objetos do bote
        } else if (divShip.querySelector(`#${id}`) != null) {
            divShip.removeChild(object);
            object.style.position = "static";                                   // remove o objeto da div do bot
            leftSide.appendChild(object);                                      // objeto vai do bote pro lado esquerdo
            contador--;                                                       // tira o contador de animais do bote
        }
    }
    else {
        if (rightSide.querySelector(`#${id}`) != null && contador == 0) // verifica se o bot esta na direita
        {
            rightSide.removeChild(object);
            object.style.position = "absolute";
            divShip.appendChild(object);
            contador++;
        }
        else if (divShip.querySelector(`#${id}`) != null) {
            divShip.removeChild(object);
            object.style.position = "static";
            rightSide.appendChild(object);
            contador--;
        }
    }
    victory();
}
function victory() {                                        // condicao de vitoria
    if (rightSide.querySelector("#ovelha") != null && rightSide.querySelector("#lobo") != null && rightSide.querySelector("#nabo") != null) {
        telaVitoria.style.display = "initial";
    }

}


function lose() { // condicoes de derrota
    if (divShip.style.justifyContent == "flex-start") {
        if (rightSide.querySelector("#lobo") != null && rightSide.querySelector("#ovelha") != null) {           //  derrota lobo e ovelha  
            divShip.style.justifyContent = 'center';
            wolf.style.position = "absolute";
            setTimeout(mostraDerrota, 100 * 2);

        }
        else if (rightSide.querySelector("#ovelha") != null && rightSide.querySelector("#nabo") != null) {      //  derrota ovelha e nabo
            divShip.style.justifyContent = 'center';
            sheep.style.position = "absolute";
            setTimeout(mostraDerrota, 100 * 3);
        }
    }
    else {
        if (leftSide.querySelector("#lobo") != null && leftSide.querySelector("#ovelha") != null) {               //  derrota lobo e ovelha
            divShip.style.justifyContent = 'center';
            wolf.style.position = "absolute";
            setTimeout(mostraDerrota, 100 * 2);

        }
        else if (leftSide.querySelector("#ovelha") != null && leftSide.querySelector("#nabo") != null) {        //  derrota ovelha e nabo
            divShip.style.justifyContent = 'center';
            sheep.style.position = "absolute";
            setTimeout(mostraDerrota, 100 * 2);
        }
    }


}
function mostraDerrota() {                              // mostrar derrota
    telaDerrota.style.display = "initial";
}

//botoes
botaoVitoria.addEventListener("click", () => {                              // button para reiniciar caso ganhe
    location.reload();
})

botaoDerrota.addEventListener("click", () => {                                  // button para reiniciar caso perca
    location.reload();
})


//movimentos do barco
ship.addEventListener('click', () => {                                              // movimentar o barco
    if (divShip.style.justifyContent == 'flex-start') {
        divShip.style.justifyContent = 'flex-end';
    } else {
        divShip.style.justifyContent = 'flex-start';
    }
    lose();
})