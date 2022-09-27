/**
 * @file Tarea 3.5.  Listado Set, Map, WeakSet, WeakMap
 * Entrega en este repositorio las siguientes actividades. Utiliza tanto html como su demostración en consola.
 * @date November 2021st 
 * @author Virginia Ordoño Bernier
 */

{
/**
 * Ejercicio 1. Indica qué es un Set y crea uno partiendo del array [1, 2, 3, 4, 4]. Justifica su tamaño.
 * Respuesta. Set no permite que sus valores se repitan. Puesto que los dos últimos valores son iguales, 
 * solo coge uno de ellos.  
 */

let aNumbers = [1,2,3,4,4];

/**
 * Crea un set a partir de un array
 * @param {*} array 
 * @returns set
 */
function createSet(array) {
  let mySet = new Set(array);
    return mySet;
}


/**
 * Calcula la longitud de un array
 * @param {*} param 
 * @returns 
 */
function getSetSize(param){
  return param.size;
}

/**
 * Ejercicio 2. Justifica por qué funciona el encadenamiento en los métodos de set "new Set().add(11).add(22)".
 * Respuesta. Porque es un método que agrega un nuevo elemento al final del Set.
 * */
 let setConcat = new Set().add(11).add(22);

 /**
 * Ejercicio 3. Indica cómo se devuelve un valor de un set.
 * */
  let setValues = new Set([1,2,3,4,5,6]);
  setValues.entries()
  setValues.valueOf()
  setValues.values()
  setValues.keys()

   
   /**
 * Ejercicio 4. Comparativa entre un array y un set: 
 * búsqueda de elementos, eliminación de elementos, búsqueda del elemento NaN, control de duplicados
 * */

   //Búsqueda de elementos
   //Devuelve todos los elementos que cumplan
   //Array.filter() 
   
   //Devuelve el primer elemento que cumpla
   //Array.find()
   
   //Devuelve true o false si incluye el elemento especificado
   //Array.includes()
   
   //Array.at() - devuelve elementos empezando por delante o detrás con índices negativos

  //ELiminación de elementos
  //Array.pop()-último elemento
  //myArray.pop();

  //Array.shift()-primer elemento
  //myArray.shift();

  //Array.splice()
  //myArray.splice(0,2);

  //Array slice
  //array1.slice(0,1)

  //Encontrar NaN
  //Array
  //array1.isNaN();

  //SET
  //set1 = ([1,2,3,4,5]);
  //set1.delete(5)
 

  


document.addEventListener("DOMContentLoaded", function () {
  let buttonEx1a = document.getElementById("buttonEx1a");
  let resultEx1a = document.getElementById("resultEx1a");
  let resetEx1a = document.getElementById("resetEx1a");
  let buttonEx1b = document.getElementById("buttonEx1b");
  let resultEx1b = document.getElementById("resultEx1b");
  let resetEx1b = document.getElementById("resetEx1b");
  let buttonEx2 = document.getElementById("buttonEx2");
  let resultEx2 = document.getElementById("resultEx2");
  let resetEx2 = document.getElementById("resetEx2");
  let buttonEx3a = document.getElementById("buttonEx3a");
  let resultEx3a = document.getElementById("resultEx3a");
  let resetEx3a = document.getElementById("resetEx3a");
  let buttonEx3b = document.getElementById("buttonEx3b");
  let resultEx3b = document.getElementById("resultEx3b");
  let resetEx3b = document.getElementById("resetEx3b");
  let buttonEx3c = document.getElementById("buttonEx3c");
  let resultEx3c = document.getElementById("resultEx3c");
  let resetEx3c = document.getElementById("resetEx3c");
  let buttonEx3d = document.getElementById("buttonEx3d");
  let resultEx3d = document.getElementById("resultEx3d");
  let resetEx3d = document.getElementById("resetEx3d");
  let buttonEx4a = document.getElementById("buttonEx4a");
  let resultEx4a = document.getElementById("resultEx4a");
  let resetEx4a = document.getElementById("resetEx4a");
  let buttonEx4b = document.getElementById("buttonEx4b");
  let resultEx4b = document.getElementById("resultEx4b");
  let resetEx4b = document.getElementById("resetEx4b");
  let buttonEx4c = document.getElementById("buttonEx4c");
  let resultEx4c = document.getElementById("resultEx4c");
  let resetEx4c = document.getElementById("resetEx4c");
  let buttonEx4d = document.getElementById("buttonEx4d");
  let resultEx4d = document.getElementById("resultEx4d");
  let resetEx4d = document.getElementById("resetEx4d");
  let buttonEx4e = document.getElementById("buttonEx4e");
  let resultEx4e = document.getElementById("resultEx4e");
  let resetEx4e = document.getElementById("resetEx4e");
  let buttonEx4f = document.getElementById("buttonEx4f");
  let resultEx4f = document.getElementById("resultEx4f");
  let resetEx4f = document.getElementById("resetEx4f");
  let buttonEx4g = document.getElementById("buttonEx4g");
  let resultEx4g = document.getElementById("resultEx4g");
  let resetEx4g = document.getElementById("resetEx4g");
  let buttonEx4h = document.getElementById("buttonEx4h");
  let resultEx4h = document.getElementById("resultEx4h");
  let resetEx4h = document.getElementById("resetEx4h");
  let buttonEx4i = document.getElementById("buttonEx4i");
  let resultEx4i = document.getElementById("resultEx4i");
  let resetEx4i = document.getElementById("resetEx4i");
  let buttonEx4j = document.getElementById("buttonEx4j");
  let resultEx4j = document.getElementById("resultEx4j");
  let resetEx4j = document.getElementById("resetEx4j");
  let buttonEx4k = document.getElementById("buttonEx4k");
  let resultEx4k = document.getElementById("resultEx4k");
  let resetEx4k = document.getElementById("resetEx4k");
  let buttonEx7a = document.getElementById("buttonEx7a");
  let resultEx7a = document.getElementById("resultEx7a");
  let resetEx7a = document.getElementById("resetEx7a");
  let buttonEx7b = document.getElementById("buttonEx7b");
  let resultEx7b = document.getElementById("resultEx7b");
  let resetEx7b = document.getElementById("resetEx7b");
  let buttonEx7c = document.getElementById("buttonEx7c");
  let resultEx7c = document.getElementById("resultEx7c");
  let resetEx7c = document.getElementById("resetEx7c");
  let buttonEx7d = document.getElementById("buttonEx7d");
  let resultEx7d = document.getElementById("resultEx7d");
  let resetEx7d = document.getElementById("resetEx7d");
  let buttonEx9 = document.getElementById("buttonEx9");
  let resultEx9 = document.getElementById("resultEx9");
  let resetEx9 = document.getElementById("resetEx9");
  let buttonEx10 = document.getElementById("buttonEx10");
  let resultEx10 = document.getElementById("resultEx10");
  let resetEx10 = document.getElementById("resetEx10");
  let buttonEx11a = document.getElementById("buttonEx11a");
  let resultEx11a = document.getElementById("resultEx11a");
  let resetEx11a = document.getElementById("resetEx11a");
  let buttonEx11b = document.getElementById("buttonEx11b");
  let resultEx11b = document.getElementById("resultEx11b");
  let resetEx11b = document.getElementById("resetEx11b");

  //Muestra botón ejecutar ex1a
  buttonEx1a.addEventListener("click", function () {
    document.getElementById("resultEx1a").innerText = " " + createSet(aNumbers);
    console.log(createSet(aNumbers));
  });

  //Limpia resultado ex1a
  resetEx1a.addEventListener("click", function(){
   resultEx1a.innerText = " ";           
  });

  //Muestra botón ejecutar ex1b
  buttonEx1b.addEventListener( "click" , function (){ 
      document.getElementById("resultEx1b").innerText = " " + getSetSize(createSet(aNumbers));
      console.log(getSetSize(createSet(aNumbers)));
  }); 

  //Limpia resultado ex1b
  resetEx1b.addEventListener("click", function(){
    resultEx1b.innerText = " ";           
   });

  //Muestra botón ejecutar ex2
  buttonEx2.addEventListener( "click" , function (){ 
    document.getElementById("resultEx2").innerText = " " +  console.log(setConcat);
    console.log(setConcat);
  }); 

  //Limpia resultado ex2
  resetEx2.addEventListener("click", function(){
    resultEx2.innerText = " ";           
   });

  //Muestra botón ejecutar ex3a
  buttonEx3a.addEventListener( "click" , function (){ 
    document.getElementById("resultEx3a").innerText = " " + setValues.entries();
    console.log(setValues.entries());
  }); 

  //Limpia resultado ex3a
  resetEx3a.addEventListener("click", function(){
    resultEx3a.innerText = " ";           
   });

  //Muestra botón ejecutar ex3b
  buttonEx3b.addEventListener( "click" , function (){ 
    document.getElementById("resultEx3b").innerText = " " + setValues.valueOf();
    console.log(setValues.valueOf());
  }); 

  //Limpia resultado ex3b
  resetEx3b.addEventListener("click", function(){
    resultEx3b.innerText = " ";           
   });

  //Muestra botón ejecutar ex3c
  buttonEx3c.addEventListener( "click" , function (){ 
    document.getElementById("resultEx3c").innerText = " " + setValues.values();
    console.log(setValues.values());
  }); 

  //Limpia resultado ex3c
  resetEx3c.addEventListener("click", function(){
    resultEx3c.innerText = " ";           
   });

  //Muestra botón ejecutar ex3d
  buttonEx3d.addEventListener( "click" , function (){ 
    document.getElementById("resultEx3d").innerText = " " + setValues.keys();
    console.log(setValues.keys());
  }); 

  //Limpia resultado ex3d
  resetEx3d.addEventListener("click", function(){
    resultEx3d.innerText = " ";           
   });

//Muestra botón ejecutar ex4a
buttonEx4a.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4a").innerText = " " +   myArray.filter(element => element > 2);
  console.log(myArray.filter(element => element > 2));
}); 

//Limpia resultado ex4a
resetEx4a.addEventListener("click", function(){
  resultEx4a.innerText = " ";           
 });

//Muestra botón ejecutar ex4b
buttonEx4b.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4b").innerText = " " +   myArray.find(element => element > 2);
  console.log(myArray.find(element => element > 2));
}); 

//Limpia resultado ex4b
resetEx4b.addEventListener("click", function(){
  resultEx4b.innerText = " ";           
 });

//Muestra botón ejecutar ex4c
buttonEx4c.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4c").innerText = " " +   myArray.includes(5);
  console.log(myArray.includes(5));
}); 

//Limpia resultado ex4c
resetEx4c.addEventListener("click", function(){
  resultEx4c.innerText = " ";           
 });
  
//Muestra botón ejecutar ex4d
buttonEx4d.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4d").innerText = " " +   myArray.at(-1);
  console.log(myArray.at(-1));
}); 

//Limpia resultado ex4d
resetEx4d.addEventListener("click", function(){
  resultEx4d.innerText = " ";           
 });

 //Muestra botón ejecutar ex4e
buttonEx4e.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4e").innerText = " " +   myArray.pop();
  console.log(myArray.pop());
}); 

//Limpia resultado ex4e
resetEx4e.addEventListener("click", function(){
  resultEx4e.innerText = " ";           
 });

  //Muestra botón ejecutar ex4e
buttonEx4e.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4e").innerText = " " +   myArray.pop();
  console.log(myArray.pop());
}); 

//Limpia resultado ex4e
resetEx4e.addEventListener("click", function(){
  resultEx4e.innerText = " ";           
 });

  //Muestra botón ejecutar ex4f
buttonEx4f.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4f").innerText = " " +   myArray.shift();
  console.log(myArray.shift());
}); 

//Limpia resultado ex4f
resetEx4f.addEventListener("click", function(){
  resultEx4f.innerText = " ";           
 });

  //Muestra botón ejecutar ex4g
buttonEx4g.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4g").innerText = " " +   myArray.splice(0,2);
  console.log(myArray.splice(0,2));
}); 

//Limpia resultado ex4g
resetEx4g.addEventListener("click", function(){
  resultEx4g.innerText = " ";           
 });

//Muestra botón ejecutar ex4h
buttonEx4h.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,5,6];
  document.getElementById("resultEx4h").innerText = " " +   myArray.slice(0,1);
  console.log(myArray.spice(0,1));
}); 

//Limpia resultado ex4h
resetEx4h.addEventListener("click", function(){
  resultEx4h.innerText = " ";           
 });

//Muestra botón ejecutar ex4i
buttonEx4i.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,NaN,5,6];
  document.getElementById("resultEx4i").innerText = " " +   isNaN(myArray[3]);
  console.log(isNaN(myArray[3]));
}); 

//Limpia resultado ex4i
resetEx4i.addEventListener("click", function(){
  resultEx4i.innerText = " ";           
 });

//Muestra botón ejecutar ex4j
buttonEx4j.addEventListener( "click" , function (){ 
  let mySet = new Set ([1,2,3,4,5,6]);
  document.getElementById("resultEx4j").innerText = " " +   mySet.delete(1);
  console.log(mySet.delete(1));
}); 

//Limpia resultado ex4i
resetEx4j.addEventListener("click", function(){
  resultEx4j.innerText = " ";           
 });

//Muestra botón ejecutar ex4k
buttonEx4k.addEventListener( "click" , function (){ 
  let mySet = new Set ([1,2,3,4,5,NaN]);
  document.getElementById("resultEx4k").innerText = " " +   mySet.has(NaN);
  console.log(mySet.has(NaN));
}); 

//Limpia resultado ex4i
resetEx4k.addEventListener("click", function(){
  resultEx4k.innerText = " ";           
 });

//Muestra botón ejecutar ex7a
buttonEx7a.addEventListener( "click" , function (){ 
  let stringsMap = new Map();
  stringsMap.set('a', 1);
  stringsMap.set('b', 2);
  stringsMap.set('c', 3);
  document.getElementById("resultEx7a").innerText = " " +   console.log(stringsMap);
}); 

//Limpia resultado ex4i
resetEx7a.addEventListener("click", function(){
  resultEx7a.innerText = " ";           
 });

//Muestra botón ejecutar ex7b
buttonEx7b.addEventListener( "click" , function (){ 
  let nullMap = new Map();
  nullMap.set(null, 'a');
  nullMap.set(null, 'b');
  nullMap.set(null, 'c');
  document.getElementById("resultEx7b").innerText = " " +   console.log(nullMap);
}); 

//Limpia resultado ex4i
resetEx7b.addEventListener("click", function(){
  resultEx7b.innerText = " ";           
 });

//Muestra botón ejecutar ex7c
buttonEx7c.addEventListener( "click" , function (){ 
  let nanMap = new Map();
    nanMap.set(NaN, 'a');
    nanMap.set(NaN, 'b');
    nanMap.set(NaN, 'c');
  document.getElementById("resultEx7c").innerText = " " +   console.log(nanMap);
}); 

//Limpia resultado ex7c
resetEx7c.addEventListener("click", function(){
  resultEx7c.innerText = " ";           
 });

//Muestra botón ejecutar ex7d
buttonEx7d.addEventListener( "click" , function (){ 
  let functionMap = new Map();
    
    let fun0 = function (a){
        return a + 2;
    }
    
    let fun1 = function (a){
     return a + 2;
    }
    
    let fun2 = function (a){
     return a + 2;
    }
    
    functionMap.set(fun0 , 'a');
    functionMap.set(fun1, 'b');
    functionMap.set(fun2, 'c');
  document.getElementById("resultEx7d").innerText = " " +   console.log(functionMap);
}); 

//Limpia resultado ex7d
resetEx7d.addEventListener("click", function(){
  resultEx7d.innerText = " ";           
 });

//Muestra botón ejecutar ex9
buttonEx9.addEventListener( "click" , function (){ 
  let myArray = [1,2,3,4,1,2];

    function quitaLosRepes(param){
        let array1 = new Set(param);
        return array1;
     }
  document.getElementById("resultEx9").innerText = " " +   console.log(quitaLosRepes(myArray));
}); 

//Limpia resultado ex9
resetEx9.addEventListener("click", function(){
  resultEx9.innerText = " ";           
 });


 //Muestra botón ejecutar ex10
buttonEx10.addEventListener( "click" , function (){ 
  
  function worksWithPrimitive(param1, param2){
    try {
      let weakMapEx10 = new WeakMap(param1, param2);
    return weakMapEx10;
    } catch (e) {
      console.error("No admite valores primitivos.", e.message);
    }
    
  }
  document.getElementById("resultEx10").innerText = console.log(" " + worksWithPrimitive("primitive1", "primitive2"));
}); 

//Muestra botón ejecutar ex10
resetEx10.addEventListener("click", function(){
  resultEx10.innerText = " ";           
 });

 //Muestra botón ejecutar ex11a
 buttonEx11a.addEventListener( "click" , function (){ 
  let student1 = {name: 'Ana'};
  let student2 = {name: 'Laura'};
  let student3 = {name: 'Carlota'};
  
  let wsStudents = new Set();
  wsStudents.add(student1).add(student2).add(student3);

  function interateWeakSet(param){
    try {
      let wsEx11 = param;
      for (const element of wsEx11) {
        console.log(element);
      }
      return wsEx11; 
    } catch (e) {
      console.error("No es iterable.", e.message);
    }
       
  }

  document.getElementById("resultEx11a").innerText = console.log(" " + console.log(interateWeakSet(wsStudents)));
}); 

//Muestra botón ejecutar ex11a
resetEx11a.addEventListener("click", function(){
  resultEx11a.innerText = " ";           
 });

 //Muestra botón ejecutar ex11b
 buttonEx11b.addEventListener( "click" , function (){ 
  
  let student1 = {name: 'Ana'};
  let student2 = {name: 'Laura'};
  let student3 = {name: 'Carlota'};
  
  let msStudents = new Map();
  msStudents.set(student1).set(student2).set(student3);

  function interateMapSet(param){
    try {
      let msEx11 = param;
      for (const element of msEx11) {
        console.log(element);
      }
      return msEx11; 
    } catch (e) {
      console.error("No es iterable.", e.message);
    }
       
  }
  document.getElementById("resultEx11b").innerText = console.log(" " +   
  console.log(interateMapSet(msStudents)));
}); 

//Muestra botón ejecutar ex11a
resetEx11b.addEventListener("click", function(){
  resultEx11b.innerText = " ";           
 });

});
}
