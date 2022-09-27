/**
 * @file Tarea 3.7.1. Crea la siguiente página Web (lo más dinámica posible)
 * donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0)
 *  y con los tamaños indicados.
 * Métodos a utilizar:
 * => window.open()
 * => document.write()
 * Añade el esqueleto básico: html, head, title, body, ul...
 * @date December 2021st
 * @author Virginia Ordoño Bernier
 */

{
  /**
   *
   * @returns Crea una nueva ventana con un tamaño determinado y un texto indicado.
   */
  function openNewWindow() {
    let windowChild;
    //Param 1: dejamos la url vacía
    //Param2: no debe mantener huecos
    windowChild = window.open("",
      "crearaquiun contador para que numere las ventanas nuevas que va creando",
      "height=200,width=300,top=0,left=0"
    );
    windowChild.document.write(
      `<p>Se han utilizado las propiedades</p>
            <ul>
            <li>height=200</li>
            <li>width=300</li>
            </ul>`
    );
    return windowChild;
    windowChild.document.close; //Para que no sobreescriba si le damos dos veces clic
  }

  document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("submit");

    button.addEventListener("click", function () {
      openNewWindow();
    });
  });
}
