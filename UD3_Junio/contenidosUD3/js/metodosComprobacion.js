/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: métodos de comprobación
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   //array.every()
   let numbers = [1, 2, 3, 4, 5];

   let lowerThan = (currentValue) => currentValue < 6;
   console.log(numbers.every(lowerThan)); //true

   let higherThan = (currentValue) => currentValue > 6;
   console.log(numbers.every(higherThan)); //false

   //array.find()
   let found1 = numbers.find(element => element == 4);
   console.log(found1); //4

   let found2 = numbers.find(element => element > 5);
   console.log(found2); //undefined

   //array.indexOf()
   let ejemploIndice = [2, 9, 9];

   console.log(ejemploIndice.indexOf(2)); // 0
   console.log(ejemploIndice.indexOf(7)); // -1
   //Indicando en segundo lugar el índice por donde se empieza a buscar
   console.log(ejemploIndice.indexOf(9, 2)); // 2
   console.log(ejemploIndice.indexOf(2, -1)); // -1
   console.log(ejemploIndice.indexOf(2, -3)); // 0

   //array.lastIndexOf()
   let array3 = ["casa", "perro", "casa", "lápiz"];
   console.log(array3.lastIndexOf("casa")); // 2
   console.log(array3.lastIndexOf("ratón")); // -1

   //array.join()
   let array2 = ["casa", "perro", "lápiz"];

   console.log(array2.join()); // casa,perro,lápiz
   console.log(array2.join('')); // casaperrolápiz
   console.log(array2.join('-')); // casa-perro-lápiz

   //array.includes()
   let array1 = [1, 2, 3];
   console.log(array1.includes(2)); // true
   console.log(array1.includes(8)); // false
}