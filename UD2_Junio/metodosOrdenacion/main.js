/**
 * Métodos para ordenar objetos y arrays de strings y números. 
 * @author Virginia Ordoño Bernier
 * @date February 2022
 */

document.addEventListener("DOMContentLoaded", function () {
// Compara con unicode por lo que hay que tener cuidado con mayúsculas y números

//Ejemplo 1.
let colours = ["c", "b", "g", "z", "p" ];
console.log(colours.sort()); // result [ 'b', 'c', 'g', 'p', 'z' ]

//Ejemplo 2.
let colours2 = ["c", "B", "g", "Z", "p"];
console.log(colours2.sort()); // result [ 'B', 'Z', 'c', 'g', 'p' ]

//Ejemplo 3
console.log(colours2.sort((a,b) => a.localeCompare(b))) //result [ 'B', 'c', 'g', 'p', 'Z' ]

//Ejemplo 4
let n = [1,11,2,22,3,33,4,44];
console.log(n.sort()); //result [1, 11, 2, 22, 3, 33, 4, 44]

//Ejemplo 5
console.log(n.sort((a, b) => {return a-b})); //result [1,  2,  3,  4, 11, 22, 33, 44]


//Ejemplo 6
const students = [
    {name:"Luis", age:32},
    {name:"Ana", age:19},
    {name:"Laura", age:22}
];

console.log(students.sort());
//return [{…}, {…}, {…}]
//0: {name: 'Ana', age: 19}
//1: {name: 'Laura', age: 22}
//2: {name: 'Luis', age: 32}

students.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  console.log(students.sort());
//return [{…}, {…}, {…}]
//0: {name: 'Ana', age: 19}
//1: {name: 'Laura', age: 22}
//2: {name: 'Luis', age: 32}
});
