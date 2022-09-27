/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: métodos ordenación
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   //array.reverse()
   let numbers = ['one', 'two', 'three'];
   console.log(numbers.reverse()); //(3) ['three', 'two', 'one']
   console.log(numbers); //(3) ['three', 'two', 'one']

   //array.sort() - Ordenación unicode
   let frutas = ['guindas', 'manzanas', 'bananas'];
   console.log(frutas.sort()); // ['bananas', 'guindas', 'manzanas']

   let puntos = [1, 10, 2, 21];
   console.log(puntos.sort()); // [1, 10, 2, 21]

   let cosas = ['word', 'Word', '1 Word', '2 Words'];
   console.log(cosas.sort()); // ['1 Word', '2 Words', 'Word', 'word']

   // En Unicode, los números vienen antes que las letras mayúsculas
   // y estas vienen antes que las letras minúsculas.

}