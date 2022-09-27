/**
 * 13. Rest
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //El parámetro rest representa un conjunto indefinido de argumentos en forma de array .
  //Si no se proporciona ningún valor al elemento cuando se llama, el valor del elemento sería undefined

  function restFunction(param1, param2, ...allParam) {
    console.log("param1", param1);
    console.log("param2", param2);
    console.log("allParam", allParam);
  }

  restFunction(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
  //param1 Monday
  //param2 Tuesday
  //allParam (5) ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
