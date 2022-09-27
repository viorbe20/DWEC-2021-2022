/**
 * Ejercicio 13 (pg 59). 
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 * vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la
 * lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma
 * parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se
 * debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Función que añade un nuevo elemento a la lista
 * @param {*} text 
 * @param {*} list 
 */
function addElement(text, list){
    let newElement = document.createElement("li");
    let newContent = document.createTextNode(text.value);
    newElement.appendChild(newContent);
    list.appendChild(newElement);
}

document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("addButton");
    let list = document.getElementById("list");
    let text = document.getElementById("newArticle");
  

    //Invoca a la función de añadir elemento cuando se hace click en el botón
    button.addEventListener("click", function(){
        addElement(text, list);   
    });     
});