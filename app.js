// let numeroSecreto = generarNumeroSecreto();
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;

// function asignarTextoElemento(elemento,texto){
//     let titulo = document.querySelector(elemento);
//     titulo.innerHTML = texto;
//     return;

// }
// function verificarIntento(){
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//     // console.log(typeof(numeroDeUsuario));
//     // console.log(numeroDeUsuario);
//     console.log(numeroSecreto);
//     // console.log(typeof(numeroSecreto));
//     //verificacion del intento
//     console.log(intentos);
//     if(numeroDeUsuario === numeroSecreto){
//         // uso del valor ternario
//         asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ==1)? 'vez': 'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');

    
//     } else {
//         //el usuario no acerto
//           if(numeroDeUsuario > numeroSecreto){
//             asignarTextoElemento('p','El numero secreto es menor')
        
//     } else {
//         if (numeroDeUsuario < numeroSecreto){
//             asignarTextoElemento('p','El numero secreto es mayor')
//         }
//         intentos++;
//         limpiarCaja();
//     }
//     return;
// }
// }
//    //funcion para limpiar la caja cunado no se acerta
// function limpiarCaja(){
//     valorCaja= document.querySelector('#valorUsuario').value = '';
    
// }
// // console.log(de la lista[el tamaño de la lista .length-1])

// function generarNumeroSecreto() {
//     let numeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
// // si el numero generado esta incluido en la lista hacemos una condicion sino hacemos otra
// if (listaNumerosSorteados.includes(numeroGenerado)){
//     return generarNumeroSecreto();
//     // se llama la misma funcion hasta que salga un numero diferente presente en la lista
// }
//     else {
//         listaNumerosSorteados.push(numeroGenerado);
//     }
// }
// function condicionesIniciales() {
    
// asignarTextoElemento('h1','Juego del numero secreto!');
// asignarTextoElemento('p','Indica un numero del 1 al 10');
// numeroSecreto = generarNumeroSecreto();
// intentos=1;
// console.log(numeroSecreto);
    
// }
// function reiniciarJuego() {
//     //limpiar la caja 
//     limpiarCaja();
//     //indicar mensaje de intervalo de numeros
//     //generar el numero aleatorio
//     //inicializar el numero de intentos
//     condicionesIniciales();
//     //deshabilitar de nuevo juego otra vez
//     //utilizamos # porque es ID
//     document.querySelector('#reiniciar').setAttribute('disabled',true);

    
    
// }

// condicionesIniciales();



let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();