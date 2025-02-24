

let numeroSecreto;
let intentosPermitidos = 3;
let intentosUsuario = 0;
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
let listaNumerosSorteados = [];
let numeroMaximo = 10;


condicionesIniciales();


console.log(numeroGenerado);
console.log(listaNumerosSorteados);

function condicionesIniciales(){
    asignarTextoElemento('H1', 'Juego de adivinación');
    asignarTextoElemento('p', `designa un número del 1 al ${numeroMaximo}. Tienes ${intentosPermitidos} intentos permitidos`);
    numeroSecreto = generarNumeroSecreto();
    intentosUsuario = 0;
}

function generarNumeroSecreto() {
    let = numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    

    console.log('Numero generado: ' + numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log('cantidad de la lista: ' + listaNumerosSorteados.length);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Se han sorteado todos los números');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
    console.log('Numero generado: ' + numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log('cantidad de la lista: ' + listaNumerosSorteados.length);
        }
    }
}


function asignarTextoElemento(elemento, texto){
    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function removerAtributo (selector, atributo) {
    document.querySelector(selector).removeAttribute(atributo);
}

function agregarAtributo (selector, atributo, condicion) {
    let button = document.querySelector(selector);
    button.setAttribute(atributo, condicion);
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentosUsuario++;
    if (intentosUsuario <3){ 
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`El número secreto era ${numeroSecreto} y lo acertaste  en ${intentosUsuario} ${intentosUsuario>1 ? 'veces' : 'vez'}`);
            removerAtributo ('#reiniciar','disabled');
            limpiarCaja();
        } else if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', `El número secreto es menor. Este es el intento ${intentosUsuario} de ${intentosPermitidos}`);
            limpiarCaja();
        } else {
            asignarTextoElemento('p',`El número secreto es mayor. Este es el intento ${intentosUsuario} de ${intentosPermitidos}`);
            let limpiar = document.getElementById('valorUsuario').value;
            limpiarCaja();
        };
    } else if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`El número secreto era ${numeroSecreto} y lo acertaste  en ${intentosUsuario} ${intentosUsuario>1 ? 'veces' : 'vez'}`);
        removerAtributo ('#reiniciar','disabled');
        limpiarCaja();}
    else {
        asignarTextoElemento('p', 'Has superado el número de intentos permitido');
        removerAtributo ('#reiniciar','disabled'); 
        limpiarCaja();
        
        
    }
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
};

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    agregarAtributo ('#reiniciar','disabled', 'true');
    if (listaNumerosSorteados.length == numeroMaximo+1) {
        asignarTextoElemento('p','Se han sorteado todos los números');
        agregarAtributo ('#nuevoJuego','disabled', 'true');
    }
}


