/**
 * 4. Comments
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //El primero de ellos se caracteriza porque comienza con // y sólo comenta la linea actual desde donde se escribe.
  // Comentarios cortos de una sola línea. Suelen explicar la línea siguiente.
  let a = 1;
  let x = 45; // También se utilizan al final de una línea.

  //Comentarios múltiples de varias líneas consecutivas.
  /*Suelen utilizarse para explicaciones largas que requieren bastante*/

  //Comentarios JSDoc. Se utilizan para indicar a la función de autocompletado cómo debe utilizarse la función y rellenarse en el editor de scripts.
  //De esta forma se muestran los argumentos requeridos de una manera específica en el editor de código.
  /**
   * Devuelve x elevado a la potencia de n.
   *
   * @param {number} x El número a elevar.
   * @param {number} n La potencia, debe ser un número natural.
   * @return {number} x elevado a la potencia de n.
   */
  function pow(x, n) {}
}