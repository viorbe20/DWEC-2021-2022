/**
 * Ejercicio 15 (pg 76). 
 * Completar el código JavaScript proporcionado para que:
 * 1. Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición
 * del puntero respecto del navegador y respecto de la página:
 * Para mostrar los messages, utilizar la función showInfo() deduciendo su
 * funcionamiento a partir de su código fuente.
 * 2. Al pulsar cualquier tecla, el message mostrado debe cambiar para indicar el nuevo evento y
 * su información asociada:Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de
 * fondo del cuadro de message debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, elcolor de fondo debe ser azul (#CCE6FF). 
 * Al volver a mover el ratón, el color de fondo vuelve
 * a ser blanco.
 * @author Virginia Ordoño Bernier
 * @date October 2021st
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Función que captura las coordenadas del ratón y las muestra por pantalla
 * @param {*} e 
 */
 function mouseCoords(e) {
  let event = e;
  let xCoord = event.clientX;
  let yCoord = event.clientY;

  document.getElementById("mouseTrack").style.backgroundColor = ("#CCE6FF");
  document.getElementById("mouseTrack").style.textAlign = "left";
  mouseTrack.innerHTML = ("<h1> Ratón </h1> <br>Coordenada x: " + xCoord + "<br><br>Coordenada y: " + yCoord);

}

/**
* Función que captura el evento de teclado y muestra la información por pantalla
* @param {*} e 
*/
function showInfo(e) {
  let event = e;
  let message = "<h1> Teclado </h1> <br>" +
      "Código: " + event.keyCode + "<br><br>" +
      "Tecla: " + String.fromCharCode(event.charCode);

  document.getElementById("mouseTrack").style.backgroundColor = ("#FFFFCC");
  mouseTrack.innerHTML = message
}

/**
* Función que carga el DOM
* @param {DOM}
*  @param {function()}
*/
document.addEventListener("DOMContentLoaded", function () {

  //Muestra coordenadas del ratón
  document.onmousemove = mouseCoords;
  //Muestra info de tecla presionada
  document.onkeypress = showInfo;
});