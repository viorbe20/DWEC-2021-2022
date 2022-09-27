/**
 * @file Tarea 3.7.2. Múltiples ventanas
 * Crea la siguiente página Web (lo más dinámica posible)
 * donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write()
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * A la página anterior añade a la ventana principal el botón Cierra. Cerrará TODAS las ventanas abiertas con anterioridad.
 * Confirma que no se produzcan errores.
 * @date December 2021st
 * @author Virginia Ordoño Bernier
 */

{
  {
    const windowsList = [];
    let NUMBER = 5,
      top = 100,
      left = screen.width / 2,
      cont = 0;

    /**
     * Crea una ventana con las medidas indicada
     * @returns la ventana creada
     */
    const createWindow = function () {
      moveWindows();
      let windowSize = `width=20,heigh=200,top=${top},left${left}`;

      const w = window.open("", `Ventana ${++cont}`, windowSize);
      w.document.write(
        `<html>
             <head>
             <script src="closeWindow.js"></script>
             <title>Ventana ${cont}</title>
             </head>
             <body>
             <p>Ventana ${cont}</p><input type="button" id="mainBtn" value="Cerrar"
             </body>
             </html>`
      );

      w.document.close();
      return w;
    };

    /**
     * Abre tantas ventanas como indiquemos y la añade al array
     */
    const openWindows = function () {
      for (let i = 0; i < NUMBER; i++) {
        windowsList.push(createWindow());
      }
    };

    /**
     * Mueve la ventana
     */
    const moveWindows = function () {
      top = +10;
      left = +10;
    };

    /**
     * Cierra todas las ventanas
     */
    const closeWindows = function () {
      windowsList.forEach((w) => {
        w.close();
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      openBtn = document.getElementById("openBtn");
      closeBtn = document.getElementById("closeBtn");

      openBtn.addEventListener("click", function () {
        openWindows();
      });

      closeBtn.addEventListener("click", function () {
        closeWindows();
      });
    });
  }
}
