let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `acerstaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // el usuario no acerto
    if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p', 'El número secreto es menor');
    }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja(){
  let valorCaja = document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listNumerosSorteados);
  //si ya sorteamos todos los números
  if (listNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
    //si el numero generado esta incluido en la lista 
    if (listNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    } else {
      listNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', `Indicame un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //mensaje de intervalo de números
  //generar número aleatorio
  //inicializar el número intentos
  condicionesIniciales();
  //deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();