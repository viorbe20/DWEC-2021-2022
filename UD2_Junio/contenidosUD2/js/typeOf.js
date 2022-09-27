/**
 * 5. Type of
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //Indica si un dato es primitivo o no.
  //Detecta: number, biginit, string, undefined, boolean.
  let a = 1;
  console.log(typeof a); //number

  //No sirve para identificar un tipo de objeto. Para ello usamos instanceof.
  today = new Date();
  console.log(
    "OBJETO - " + (today instanceof today.constructor) + " - VALOR: " + today
  ); //Result OBJETO - true - VALOR: Sun May 01 2022 19:14:17 GMT+0200
}