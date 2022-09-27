/**
 * Ejercicio 17 (pg 85). 
 * 'Mejorar el ejemplo anterior indicando en todo momento al usuario el número de 
 * caracteres que aún
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. 
 * y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
 * @author Virginia Ordoño Bernier
 * @date October 2021st
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

{
  document.addEventListener('DOMContentLoaded', function () {

    let message = document.getElementById("mensaje");
    let maxLength = 6;
    document.getElementById('para1').innerHTML += maxLength;
    let setCharact = document.getElementById("para2");
    let restCharact = document.getElementById("para3");

    //Captura evento y actualiza valores de caracteres escritos y faltantes 
    message.addEventListener("keypress", function (eve) {
      if (message.value.length < maxLength) {
        message.value += eve.key;
        setCharact.innerHTML = `Caracteres introducidos: ${message.value.length}`;
        restCharact.innerHTML = `Caracteres restantes: ${maxLength - message.value.length}`;
      }

      //Evitamos comportamiento del objeto eve
      eve.preventDefault();
    });

    //Permite que actualice valores de caracteres escritos y faltantes cuando se suelta la tecla
    message.addEventListener("keyup", function () {
      setCharact.innerHTML = `Caracteres introducidos: ${message.value.length}`;
      restCharact.innerHTML = `Caracteres restantes: ${maxLength - message.value.length}`;
    });

    //Evita hacer corta y pega
    message.onpaste = function (eve) {
      eve.preventDefault();
    };
  });
}