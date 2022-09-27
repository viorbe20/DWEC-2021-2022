/**
 * Ejercicio 14 (pg 68). 
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 * contenidos
 * 3. Completar el resto de links de la página para que su comportamiento sea idéntico al del
 * primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 * propiedad innerHTML)
 * @author Virginia Ordoño Bernier
 * @date October 2021st
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */


/**
 * Función que oculta o muestra un texto tras el click a un enlace
 * @returns 
 */
function showAndHide() {

    if (this.innerHTML === "Ocultar texto") {
        document.getElementById("contenidos_" + this.id.slice(7)).style.display = "none";
        this.innerHTML = "Mostrar texto";
        return;
    }

    document.getElementById("contenidos_" + this.id.slice(7)).style.display = "";
    this.innerHTML = "Ocultar texto";
}

/**
 * Función que carga el DOM
 */
document.addEventListener("DOMContentLoaded", function () {

    //Recorremos el conjunto de links y asignamos el evento a cada uno de ellos
    let links = document.getElementsByTagName("a")
    for (let i = 0; i < links.length; i++)
        links[i].addEventListener("click", showAndHide);
});