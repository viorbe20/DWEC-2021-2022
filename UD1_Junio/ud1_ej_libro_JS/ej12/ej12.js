/**
 * Ejercicio 12 (pg 59). 
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace se muestre
 * completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por
 * primera vez. La acción de pinchar sobre un enlace forma parte de los "Eventos" de JavaScript que se
 * ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se
 * ejecuta la función llamada muestra().
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Función que muestra el texto indicado
 * @param {*} hiddenText 
 * @param {*} link 
 * @param {*} hiddenLink 
 */
function showText (hiddenText, link, hiddenLink){
    hiddenText.className = "visible"; 
    link.className = "hidden"; 
    hiddenLink.className = "visible";
}
/**
 * Función que esconde el texto indicado
 * @param {*} hiddenText 
 * @param {*} link 
 * @param {*} hiddenLink 
 */
function hideText (hiddenText, link, hiddenLink){
    hiddenText.className = "hidden"; 
    link.className = "visible"; 
    hiddenLink.className = "hidden";
}

document.addEventListener("DOMContentLoaded", function () {
    let hiddenText = document.getElementById("hiddenText");
    let link = document.getElementById("link");
    let hiddenLink = document.getElementById("hiddenLink");
    //Muestra texto con click en el link
    link.addEventListener("click", function(){
     showText(hiddenText, link, hiddenLink);            
    })
    //Devuelve texto a su estado original con click en el link
    hiddenLink.addEventListener("click", function(){
         hideText(hiddenText, link, hiddenLink);        
    })
});