/**
 * Ejercicio 14 (pg 68). 
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 * contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
 * primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 * propiedad innerHTML)
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

document.addEventListener("DOMContentLoaded", function(){
    //Párrafo 1
    let link1 = document.getElementById("enlace_1");
    let text1 = document.getElementById("contenidos_1");
    
    link1.addEventListener("click", function(event){ 
        
        event.preventDefault();//Bloquea la url que tiene por defecto
        if (text1.className == "visible") {
            link1.innerHTML = "Mostrar texto";
            text1.className = "hidden";
        } else {
            link1.innerHTML = "Ocultar texto";
            text1.className = "visible";
        }
        });

    //Párrafo 2
    let link2 = document.getElementById("enlace_2");
    let text2 = document.getElementById("contenidos_2");
    
    link2.addEventListener("click", function(event){ 
      
        event.preventDefault();
        if (text2.className == "visible") {
            link2.innerHTML = "Mostrar texto";
            text2.className = "hidden";
        } else {
            link2.innerHTML = "Ocultar texto";
            text2.className = "visible";
        }
        });    
    //Párrafo 3
    let link3 = document.getElementById("enlace_3");
    let text3 = document.getElementById("contenidos_3");
    
    link3.addEventListener("click", function(event){ 
      
        event.preventDefault();
        if (text3.className == "visible") {
            link3.innerHTML = "Mostrar texto";
            text3.className = "hidden";
        } else {
            link3.innerHTML = "Ocultar texto";
            text3.className = "visible";
        }
        });   
});