//Variables
let maximoNumeroSecreto = 100; //cantidadNumeros();
let numeroSecreto = 0; // generarNumeroSecreto();
let maximosIntentos = 8; // cantidadIntentos();
let listaNumerosYaUsado = [];
let intentos = 1;
function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random() * maximoNumeroSecreto) + 1);

    if (listaNumerosYaUsado.length == maximoNumeroSecreto) {
        listaNumerosYaUsado = [];
    }
    if (listaNumerosYaUsado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }
    else {
        listaNumerosYaUsado.push(numeroGenerado);
        return numeroGenerado;
    }
}

/*function cantidadNumeros()
{
    asignarTextoElemento('p', 'Ingrese la cantidad maxima de numeros a adivinar: ');
    return parseInt(document.getElementById("valorUsuario").value);
}

function cantidadIntentos() {
    asignarTextoElemento('p', 'Ingrese el numero maximo de intentos que desea tener: ');
    return parseInt(document.getElementById("valorUsuario").value);
}*/

function verificarIntento() {
    if (botonPresionado = true) {
        let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        if (numeroSecreto === numeroUsuario) {
            asignarTextoElemento('p', `Acertaste, el numero secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
            document.querySelector('#intentar').setAttribute('disabled', 'true');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', `El numero secreto es menor a ${numeroUsuario}`);
            }
            else {
                asignarTextoElemento('p', `El numero secreto es mayor a ${numeroUsuario}`);
            }
            limpiarIntento();
            comprobarIntentos();
            intentos++;
        }
    }
    return;
}


function condicionesDeInicio() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Introduce un numero entre el 1 al ${maximoNumeroSecreto}: `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}


function limpiarIntento()
{
    let valorCaja = document.querySelector('#valorUsuario').value = "";
    return;
}

function reiniciarJuego()
{
    limpiarIntento();
    condicionesDeInicio();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');

}

function comprobarIntentos() {
    if (intentos > maximosIntentos) {
        asignarTextoElemento('p', `Llegaste al numero maximo de ${maximosIntentos} intentos, El numero secreto era ${numeroSecreto}`);
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

condicionesDeInicio();
