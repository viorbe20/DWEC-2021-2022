/**
 * 11. Assigment Operator
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  // Valores nullish son undefined y null.
  // El operador solo asigna cuando en la parte izquierda hay un valor nullish.

  let x = 12;
  let y = null;
  let z = 13;

  x ??= z;
  console.log(x); // 12

  y ??= z;
  console.log(y); // 13
}
