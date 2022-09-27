/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/09
 * @description Crear una función que permita agrupar un array, que puede ser de valores u objetos,
 * a través de una función o de una propiedad.
 * La función groupBy recibe una colección (array) y una función o una propiedad,
 * y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento.
 * Luego los valores son un array de los valores que tengan la misma llave.
 */
{
  let groupBy = function (collection, it) {
    const newObject = {};

    collection.forEach((e) => {
      
      let result = typeof it == "function" ? it(e) : e[it];

      newObject[result] ??= [];
      newObject[result].push(e);
    });
    console.log(newObject);
  };

  document.addEventListener("DOMContentLoaded", function () {
    groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
    groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
    groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

    groupBy([1397639141184, 1363223700000], (timestamp) =>
    new Date(timestamp).getFullYear()
    ); // { 2013: [1363223700000], 2014: [1397639141184] }

    groupBy(
     [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    "rating"
    );
    // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    //   9: [{ title: 'Clean Code', rating: 9 }],
    //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
  });
}