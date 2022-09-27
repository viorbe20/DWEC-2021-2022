/**
 * @file Tarea 3.6.  Realiza los siguientes ejercicios sobre los objetos predefinidos de JavaScrip window y screen.
 * Recuerda evitar consola, prompt  y alert para la comunicación con el usuario.
 * @date November 2021st
 * @author Virginia Ordoño Bernier
 */
{
  /**
   * Ejercicio 2.
   * Scrolleando. El objeto window dispone de las propiedades scrollX, scrollY y scrollbars.
   * Muéstralos reaccionando al evento scroll sobre window.
   * Además, crea botones que demuestren el uso de los métodos de scroll en window.
   * Explica en cada botón el método que usas.
   * Un botón "bajar línea" para bajar una línea.
   * Un botón "subir línea" para subir una línea
   * Un botón "bajar" para bajar una página.
   * Un botón "subir" para subir una página.
   * Un botón "inicio" para ir al inicio del documento
   * Un botón "fin" para ir al final del documento.
   */

  let statement = "Métodos de scroll: window.";

  //Variables ejercicio 1
  let concept1 = "window.scrollX";
  let definition1 = `Retorna el número de pixels que el documento ha sido desplazado horizontalmente.`;
  let concept2 = "window.scrollY";
  let definition2 = `Retorna el número de pixels que el documento ha sido desplazado verticalmente.`;
  let concept3 = "window.scrollbars";
  let definition3 = `Cuando se produce un evento de desplazamiento en la barra de desplazamiento horizontal estándar de la ventana.`;

  /**
   * Añade un elemento
   * @param {*} text
   * @param {*} list
   */
  function addElement(text, list, listType, id) {
    let newElement = document.createElement(listType);
    newElement.setAttribute("id", id);
    let newContent = document.createTextNode(text);
    newElement.appendChild(newContent);
    list.appendChild(newElement);
  }

  function clearLineButtons() {
    resultLineDown.innerText = ` `;
    resultLineUp.innerText = ` `;
  }

  function clearPageButtons() {
    resultPageBack.innerText = ` `;
    resultPageNext.innerText = ` `;
  }

  document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let endDoc = document.getElementById("endDocument");
    let startDoc = document.getElementById("startDocument");
    let lineUp = document.getElementById("lineUp");
    let resultLineUp = document.getElementById("resultLineUp");
    let lineDown = document.getElementById("lineDown");
    let resultLineDown = document.getElementById("resultLineDown");
    let pageBack = document.getElementById("pageBack");
    let resultPageBack = document.getElementById("resultPageBack");
    let pageNext = document.getElementById("pageNext");
    let resultPageNext = document.getElementById("resultPageNext");

    addElement(statement, container, "ol", "li_1");
    //Definición 1
    addElement(concept1, document.getElementById("li_1"), "li", "li_1_1");
    addElement(definition1, document.getElementById("li_1_1"), "p", "p1");
    addElement("Ejemplo:", document.getElementById("p1"), "p", "example1");
    addElement(
      `window.scrollX = ${window.scrollX}px.`,
      document.getElementById("p1"),
      "code",
      "code1"
    );

    //Definición 2
    addElement(concept2, document.getElementById("li_1"), "li", "li_2_1");
    addElement(definition2, document.getElementById("li_2_1"), "p", "p2");
    addElement("Ejemplo:", document.getElementById("p2"), "p", "example2");
    addElement(
      `window.scrollY = ${window.scrollY}px.`,
      document.getElementById("p2"),
      "code",
      "code2"
    );

    //Definición 3
    addElement(concept3, document.getElementById("li_1"), "li", "li_3_1");
    addElement(definition3, document.getElementById("li_3_1"), "p", "p3");
    addElement("Ejemplo:", document.getElementById("p3"), "p", "example3");
    addElement(
      `window.scrollbars = ${window.scrollbars}px.`,
      document.getElementById("p3"),
      "code",
      "code3"
    );

    endDoc.addEventListener("click", function () {
      window.scrollTo(0, document.documentElement.scrollHeight);
      clearLineButtons();
      clearPageButtons();
    });

    startDoc.addEventListener("click", function () {
      window.scrollTo(0, 0);
      clearLineButtons();
      clearPageButtons();
    });

    lineUp.addEventListener("click", function () {
      let px = 400;
      window.scrollTo(0, document.documentElement.scrollTop - px);
      resultLineUp.innerText = `${px}px`;
      resultLineDown.innerText = ` `;
      clearPageButtons();
    });

    lineDown.addEventListener("click", function () {
      let px = 400;
      window.scrollTo(0, document.documentElement.scrollTop + px);
      resultLineDown.innerText = `${px}px`;
      resultLineUp.innerText = ` `;
      clearPageButtons();
    });

    pageBack.addEventListener("click", function () {
      window.history.go(-1);
      resultPageBack.innerText = console.log(window.history.go(-1));
      resultPageNext.innerText = " ";
      clearLineButtons();
    });

    pageNext.addEventListener("click", function () {
      window.history.go(1);
      resultPageNext.innerText = console.log(window.history.go(1));
      resultPageBack.innerText = " ";
      clearLineButtons();
    });
  });
}
