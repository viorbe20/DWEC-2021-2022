/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: métodos estáticos
 * @author Carlos Chaves y Virginia Ordoño
 */


//Métodos estáticos: no necesitan instanciar un objeto

{
   //Array.of 

   //Un número entero
   let ejemplo1 = Array.of(3);
   console.log(ejemplo1); //[3]

   //Varios números enteros
   let ejemplo2 = Array.of(1, 2, 3);
   console.log(ejemplo2); //(3) [1, 2, 3]
   
   //Array.from

   //Un número entero
   let ejemplo3 = Array.from(3);
   console.log(ejemplo3); //[]

   //Una cadena de caracteres
   let ejemplo5 = Array.from("Ejercicios");
   console.log(ejemplo5); //(10) ['E', 'j', 'e', 'r', 'c', 'i', 'c', 'i', 'o', 's']

   //Una arrow function
   let ejemplo6 = Array.from([1, 2, 3], x => x + x); // (3) [2, 4, 6]
   console.log(ejemplo6);

   //Arrays.isArray() devuelve true
   let ejemplo7 = Array.isArray([]); 
   console.log(ejemplo7); 

   let ejemplo8 = Array.isArray([1, 2, 3]); 
   console.log(ejemplo8); 

   let ejemplo9 = Array.isArray(new Array()); 
   console.log(ejemplo9); 
   
   let ejemplo10 = Array.isArray(new Array('a', 'b', 'c', 'd'));   
   console.log(ejemplo10); 
   
   let ejemplo11 = Array.isArray(new Array(3));  
   console.log(ejemplo11); 

   let ejemplo12 = Array.isArray(Array.prototype);  
   console.log(ejemplo12); 

   //Arrays.isArray() devuelve false
   let ejemplo13 = Array.isArray();  
   console.log(ejemplo13); 

   let ejemplo14 = Array.isArray({});  
   console.log(ejemplo14);

   let ejemplo15 = Array.isArray(null);  
   console.log(ejemplo15);

   let ejemplo16 = Array.isArray(undefined);  
   console.log(ejemplo16);

   let ejemplo17 = Array.isArray(17);  
   console.log(ejemplo17);

   let ejemplo18 = Array.isArray('Array');  
   console.log(ejemplo18);

   let ejemplo19 = Array.isArray(true);  
   console.log(ejemplo19);

   let ejemplo20 = Array.isArray(false);  
   console.log(ejemplo20);

   let ejemplo21 = Array.isArray({ __proto__: Array.prototype });  
   console.log(ejemplo21);
}