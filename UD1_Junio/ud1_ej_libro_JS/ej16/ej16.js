/**
 * Ejercicio 16 (pg 77). 
 * 'Crear un script que mouseTrackrme al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
 * definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
 * determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
 * proporcionada.
 * @author Virginia Ordoño Bernier
 * @date October 2021st
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Función que detecta el clic del ratón y muestra la información por pantalla
 * @param {*} e 
 */
function showMouseTrack(e) {
    let event = e;
    let xCoord = event.clientX;
    let yCoord = event.clientY;

    if (xCoord > 500 && yCoord < 250) {
        mouseTrack.innerHTML = ("Click arriba a la derecha.");
    } else if (xCoord > 500 && yCoord > 250) {
        mouseTrack.innerHTML = ("Click abajo a la derecha.");
    } else if (xCoord < 500 && yCoord < 250) {
        mouseTrack.innerHTML = ("Click arriba a la izquierda.");
    } else {
        mouseTrack.innerHTML = ("Click abajo a la izquierda.");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.onclick = showMouseTrack;

});