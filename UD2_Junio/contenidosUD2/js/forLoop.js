/**
 * 15. for Loop
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  let colores = ["azul", "rojo", "verde"];

  //forEach(): llama a la función proporcionada una vez e itera sobre cada elemento del array.
  colores.forEach((color) => console.log("for each=>" + color));
  // 'azul'
  // 'rojo'
  // 'verde'

  //for in():recorre todas las propiedades enumerables de un objeto.
  for (let color in colores) {
    console.log("for in=>" + colores[color]);
  }
  // 'azul'
  // 'rojo'
  // 'verde'

  //for of():recorre todas estructuras de datos que son iterables, como arrays, cadenas, mapas, listas de nodos y más..
  for (let color of colores) {
    console.log("for of=>" + color);
  }
  // 'azul'
  // 'rojo'
  // 'verde'
}
