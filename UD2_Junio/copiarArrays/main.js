/**
 * La sintaxis extendida o spread syntax permite expandir un elemento iterable 
 * en lugares donde se esperan 0 o más argumentos.
 * No servirá para obtener una lista de parámetros de un array.
 * @author Virginia Ordoño Bernier
 * @date February 2022
 */

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Demo 1: CONCAT == SPREAD OPERATOR
   * Concantena los elementos de dos arrays devolviendo uno nuevo
   * No modifica los arrays originales
   */

  //Concat()
  let demo1a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo1b = ["Saturday", "Sunday"];
  let demo1c = [];
  demo1c = demo1a.concat(demo1b);
  console.log(demo1a); //result ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(demo1b); //result  ['Saturday', 'Sunday']
  console.log(demo1c); //result ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //SO
  let demo1d = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo1e = ["Saturday", "Sunday"];
  let demo1f = [];
  demo1f = [...demo1d, ...demo1e];
  console.log(demo1d); //result ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(demo1e); //result  ['Saturday', 'Sunday']
  console.log(demo1f); //result ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  /**
   * Demo 2: SPLICE VS copy VS SPREAD OPERATOR
   * Concantena los elementos de dos arrays devolviendo uno nuevo
   * splice(): extrae el contenido del array original. Se ha modificado. 
   * (shallow copy)se crea un nuevo objeto que tiene una copia exacta de los valores en el objeto original; 
   * PERO si alguno de los campos del objeto son objetos, solo se van a copiar las referencias a las mismas.
   * copy: copia el contenido del array original. 
   * Se ha modificado y modificará el original con el cambio de la copia.
   * SO: se crea un nuevo array. No modifica el array original
   */

  //Splice()
  let demo2a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo2b = demo2a.splice(0, demo2a.length);
  console.log(demo2a); //result []
  console.log(demo2b); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  demo2b.push("Saturday", "Sunday");
  console.log(demo2a); //result []
  console.log(demo2b); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //COPY
  let demo2c = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo2d = demo2c;
  console.log(demo2c); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(demo2d); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  demo2d.push("Saturday", "Sunday");
  console.log(demo2c); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  console.log(demo2d); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //SO
  let demo2e = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo2f = [...demo2e];
  console.log(demo2e); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(demo2f); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  demo2f.push("Saturday", "Sunday");
  console.log(demo2e); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(demo2f); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  /**
   * Demo 3: EXPAND
   * Expande un array en otro
   */

  //Expand regular method
  let demo3a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo3b = [demo3a, "Saturday", "Sunday"];
  console.log(demo3a); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] (5)
  console.log(demo3b); //result  ['['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']', 'Saturday', 'Sunday'] (3)

  //Expand SO
  let demo3c = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let demo3d = [...demo3c, "Saturday", "Sunday"];
  console.log(demo3c); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] (5)
  console.log(demo3d); //result  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] (7)

  /**
   * Demo 4: Math object
   * Espera una lista por lo que si le pasamos un array no lo procesa.
   * Con SO expande el array en la ista de argumentos y lo recorre.
   */

  //Regular array
  let demo4a = [1, 2, 3, 4, 5];
  console.log(Math.min(demo4a)); //result NaN
  console.log(Math.max(demo4a)); //result NaN

  //SO
  console.log(Math.min(...demo4a)); //result 1
  console.log(Math.max(...demo4a)); //result 5

  /**
   * Demo 5: Objects
   * SO: usado para crear copias de objetos existentes con valores nuevos, valores actualizados 
   * o hacer una copia de un objeto con más propiedades.
   */

  //Copying an object 
  const person1 = {
    name:"Lisa",
    lastName:"Simpson",
    age:12
  }

  const clone1 = {...person1};
  console.log(clone1);  //result {name: 'Lisa', lastName: 'Simpson', age: 12}

  const clone2 = {person1};
  console.log(clone2);  //result {person1: {…}}

  //Merging two objects
  const person2 = {
    name:"Homer",
    lastName:"Simpson",
    age:50
  }

  const person3 = {
    name:"Marge",
    lastName:"Simpson",
    age:45
  }

  //Last object
  const mergedFamily = {...person2, ...person3, ...person1};
  console.log(mergedFamily);  //result {name: 'Lisa', lastName: 'Simpson', age: 12}
});
