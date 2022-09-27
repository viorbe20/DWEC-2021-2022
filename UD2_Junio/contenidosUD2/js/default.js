/**
 * 12. Default
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //Permite que parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o undefined.
  //Si no se proporciona ningún valor al elemento cuando se llama, el valor del elemento sería undefined

  function multiply(a, b = 2) {
    return a * b;
  }

  console.log(multiply(5, 2)); // 10
  console.log(multiply(5)); // 10
}
