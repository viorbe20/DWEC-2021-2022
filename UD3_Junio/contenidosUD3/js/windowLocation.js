/**
 * @file Tarea 3.6.  Realiza los siguientes ejercicios sobre los objetos predefinidos de JavaScrip window y screen.
 * Recuerda evitar consola, prompt  y alert para la comunicación con el usuario.
 * @date November 2021st
 * @author Virginia Ordoño Bernier
 */
{
  /**
   * Ejercicio 3.
   * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
   */

   document.addEventListener("DOMContentLoaded", function () {
    let href = document.getElementById("resultHref");
    let path = document.getElementById("resultPath");
    let host = document.getElementById("resultHost");
    let hash = document.getElementById("resultHash");
    let hostname = document.getElementById("resultHostname");
    let protocol = document.getElementById("resultProtocol");
  
    href.innerHTML = ` ${window.location.href}<br>`;
    path.innerHTML = ` ${window.location.pathname}<br>`;
    host.innerHTML = ` ${window.location.host}<br>`;
    hash.innerHTML = ` ${window.location.hash}<br>`;
    hostname.innerHTML = ` ${window.location.hostname}<br>`;
    protocol.innerHTML = ` ${window.location.protocol}<br>`;
});
}
