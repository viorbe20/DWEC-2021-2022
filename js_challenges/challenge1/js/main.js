/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/01
 * @description Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
 * y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
 */

{
  let contarOvejas = function (param) {
    const ovejas = [];
    param.forEach((e) => {
      if (e.color.match(/rojo/i) && e.name.match(/n/i) && e.name.match(/a/i)) {
        ovejas.push(e);
      }
    });
    console.log(ovejas);
  };

  document.addEventListener("DOMContentLoaded", function () {
    const ovejas = [
      { name: "Noa", color: "azul" },
      { name: "Euge", color: "rojo" },
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
      { name: "AAAAAaaaaa", color: "rojo" },
      { name: "Nnnnnnnn", color: "rojo" },
    ];

    const ovejasFiltradas = contarOvejas(ovejas);
    // [{ name: 'Navidad', color: 'rojo' },
    //  { name: 'Ki Na Ma', color: 'rojo' }]
  });
}