/**
 * 7. Nullish values
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
// Valores nullish son undefined y null.
//Representa un valor nulo o sin definir.

//Primitivos
let $day1 = "monday";
let $day2 = "monday";
console.log($day1 == $day2); //Result true

//Objetos
let $student1 = {name:"Hugo", age:9};
let $student2 = {name:"Hugo", age:9};
console.log($student2 == $student1); //Result  false
}