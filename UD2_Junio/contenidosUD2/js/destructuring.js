/**
 * 1. Destructuring
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
//Permite obtener los datos de objetos o arrays de manera directa y múltiple, para extraerlos a variables o constantes.
let [a, b] = [1, 2]; 
console.log(a, b); //Result: 1, 2

//Permite asignar valores por defecto.
console.log(c, d); //Result: 2, 4

//Intercambio de valores entre variables.
let e = 1;
let f = 2;       
[e, f] = [f, e];
console.log(`e = ${e}, f = ${f}`); //Result: e = 2, f = 1

//Destructuring con rest operator.
let [blue, red, ...rest] = ["azul", "rojo", "verde", "gris", "naranja"];
console.log(blue); // azul
console.log(red); // rojo
console.log(rest); // ["verde", "gris", "naranja"]

//Destructuring de objetos (asignación a una variable el contenido de un array)
const object1 = {number:10, boolean:true, string:"Hi"}
const {number, string} = object1;

console.log(`number = ${number}`); //number = 10
console.log(`string = ${string}`); //string = Hi

//Destructuring de objetos asignando a nuevos nombres de variables.</li>
const object2 = {name:"Carlota", lastname:"García"}
const {name: nm, lastname: ln} = object2;

console.log(`nm = ${nm}`); //nm = Carlota
console.log(`ln = ${ln}`); //ln = García

//Destructuring con objetos y rest operator.
({aa, bb, ...rest} = {aa: 11, bb: 22, cc: 33, dd: 44});

console.log(aa); // 11
console.log(bb); // 22
console.log(rest); // {cc: 33, dd: 44}
}