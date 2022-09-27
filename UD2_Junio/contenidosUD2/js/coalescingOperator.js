/**
 * 10. Nullish Coalescing Operator
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  // Valores nullish son undefined y null.
  // Para comprobar si un valor es nullish, usamos el operador nullish coalescing . Éste se escribe con un doble signo de cierre de interrogación ??.
  // El operador devuelve la parte derecha de la operación cuando en la parte izquierda hay un valor nullish. En caso contrario devuelve la parte izquierda.

  const a = null ?? "second";
  console.log(a); // second;

  const b = "first" ?? "second";
  console.log(b); // first;
}
