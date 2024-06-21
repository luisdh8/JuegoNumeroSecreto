let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    document.getElementById('reiniciar').removeAttribute('disabled');
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el numero secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El numero secreto es mayor');	
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles, reinicia el juego para volver a jugar');
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escribe un numero del 1 al 10 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
