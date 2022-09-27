/**
 * @file Tarea 3.6.  Realiza los siguientes ejercicios sobre los objetos predefinidos de JavaScrip window y screen. 
 * Recuerda evitar consola, prompt  y alert para la comunicación con el usuario.
 * @date November 2021st 
 * @author Virginia Ordoño Bernier
 */
{
/**
 * Ejercicio 1.
 * Con altura. Muestra en  una lista la siguiente información. 
 * Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás.
 * window.outerHeight 
 * window.innerHeight 
 * window.screen.availHeight
 * window.screen.height
 */

 let statement = "Métodos para la altura: window y screen."

 //Variables ejercicio 1
 let concept1 = "window.outerHeight";
 let definition1 = `Devuelve la altura en pixeles de toda la ventana del navegador.`;
 let concept2 = "window.innerHeight";
 let definition2 = `Representa la altura en pixeles de la ventana.`;
 let concept3 = "window.screen.availHeight";
 let definition3 = `Devuelve la altura en píxeles 
                     del espacio disponible para el contenido web en la pantalla.`;
 let concept4 = "window.screen.height";
 let definition4 = `Devuelve la altura de la pantalla en píxeles.`;
                     
 
 /**
  * Añade un elemento
  * @param {*} text 
  * @param {*} list 
  */
 function addElement(text, list, listType, id){
     let newElement = document.createElement(listType);
     newElement.setAttribute("id", id);
     let newContent = document.createTextNode(text);
     newElement.appendChild(newContent);
     list.appendChild(newElement);
 }
 
 document.addEventListener("DOMContentLoaded", function(){
   
     let container = document.getElementById("container");
     
     addElement(statement, container, "ol", "li_1");
     //Definición 1
     addElement(concept1, document.getElementById("li_1"), "li", "li_1_1");
     addElement(definition1, document.getElementById("li_1_1"), "p", "p1");
     addElement("Ejemplo:", document.getElementById('p1'), "p", "example1" );
     addElement(`window.outerHeight = ${window.outerHeight}px.`, document.getElementById('p1'), "code", "code1" );
     
     //Definición 2
     addElement(concept2, document.getElementById("li_1"), "li", "li_2_1");
     addElement(definition2, document.getElementById("li_2_1"), "p", "p2");
     addElement("Ejemplo:", document.getElementById('p2'), "p", "example2" );
     addElement(`window.innerHeight = ${window.innerHeight}px.`, document.getElementById('p2'), "code", "code2" );    
     

     //Definición 3
     addElement(concept3, document.getElementById("li_1"), "li", "li_3_1");
     addElement(definition3, document.getElementById('li_3_1'), "p", "p3" );
     addElement("Ejemplo:", document.getElementById('p3'), "p", "example3" );
     addElement(`window.screen.availHeight = ${window.screen.availHeight}px.`, document.getElementById('p3'), "code", "code3" );


     //Definición 4
     addElement(concept4, document.getElementById("li_1"), "li", "li_4_1");
     addElement(definition4, document.getElementById('li_4_1'), "p", "p4" );
     addElement("Ejemplo:", document.getElementById('p4'), "p", "example4" );
     addElement(`window.screen.height = ${window.screen.height}px.`, document.getElementById('p4'), "code", "code4" );
     
});

}