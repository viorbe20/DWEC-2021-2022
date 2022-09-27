/**
 * 6. Primitives
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
// Entendemos por mutabilidad aquella capacidad para cambiar el valor o el estado de los elementos de un lenguaje de programación.
// Los datos primitivos en Javascript son inmutables. Cuando modificamos un dato primitivo, en realidad estamos creando otro nuevo.
// Con la palabra reservada const podemos establecer una variable como inmutable.
// Los objetos, arrays y otras estructuras no primitivas son mutables. Los objetos son de tipo de referencia, 
// lo que significa que a una variable a la que se le asigna un objeto, en realidad se le está definiendo una referencia a ese objeto. 
// Por este el motivo, al comparar dos objetos distintos que contienen los mismos valores, siempre será false

//Primitivos
let $day1 = "monday";
let $day2 = "monday";
console.log($day1 == $day2); //Result true

//Objetos
let $student1 = {name:"Hugo", age:9};
let $student2 = {name:"Hugo", age:9};
console.log($student2 == $student1); //Result  false
}