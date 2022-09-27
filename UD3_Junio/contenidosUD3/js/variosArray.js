/**
 * @file Tarea 3.3. Listado de Arrays
 * En JavaScript implementa estas funciones. 
 * @author Virginia Ordoño Bernier
 */

{
  /**
   * 1. Indica los tres argumentos del método forEach a un array.
   * Demuestra su uso mediante un ejemplo.
   * Argumentos: valor del elemento, índice y el propio array
   */
  console.log(`Ejercicio 1: 3 argumentos de foreach.`);
  let numbers = [1, 2, 3, 4];

  function useThreeArguments(element, index, array) {
    console.log(`Posición [${index}] = ${element}`);
  }
  numbers.forEach(useThreeArguments);

  /**
   * 2. Indica la utilidad del operador in con los arrays.
   * Demuestra su uso mediante un ejemplo.
   * El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo.
   */
  console.log(``);
  console.log(`Ejercicio 2: operador in.`);
  //Ejemplo 1
  console.log(2 in numbers); //true

  //Ejemplo 2
  console.log("dos" in numbers); //false

  /**
   * 3. Indica la función que comprueba si un objeto es o no un Array.
   * Demuestra su uso mediante un ejemplo.
   * Array.isArray()
   */
  console.log(``);
  console.log(`Ejercicio 3: uso método isArray.`);
  //Ejemplo 1
  console.log(Array.isArray(numbers)); //true

  //Ejemplo 2
  let num = 8;
  console.log(Array.isArray(num)); //false

  /**
   * 4. Crea  una función que cree un array de la dimensión indicada,
   * cuyo contenido sean los números naturales comenzando desde 0.
   */
  console.log(``);
  console.log(`Ejercicio 4: función crea array con longitus indicada.`);
  function createNumbersArray(param) {
    let naturalNumbers = new Array(param);
    let cont = 0;

    for (let i = 0; i < param; i++) {
      naturalNumbers[i] = cont;
      cont++;
    }
    return naturalNumbers;
  }

  //El valor que le pasamos por parámetro es la longitud
  console.log(createNumbersArray(5));

  /**
   * 5. Crea  una función que devuelva un array con cada uno de los argumentos.
   * */
  console.log(``);
  console.log(`Ejercicio 5: función que devuelve array con argumentos.`);
  function returnArguments(...args) {
    let newArray = [...args];
    return newArray;
  }
  console.log(returnArguments(numbers, 6, "word"));

  /**
   * 6. Crea  una función que devuelva un array con cada uno de los argumentos.
   * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
   * */
  console.log(``);
  console.log(
    `Ejercicio 6: función que devuelve array con elementos introducidos uno a uno.`
  );

  function returnArrayInIdexes(...args) {
    let newArray = [...args];

    newArray.forEach((element) => {
      if (Array.isArray(element)) {
        element.forEach((value) => {
          newArray.push(value);
        });

        //Sustituye la posición inicial del array por un array vacío
        newArray.splice(newArray.indexOf(element), 1, []);
      }
    });
    return newArray;
  }
  console.log(
    returnArrayInIdexes(numbers, 6, "word", ["lunes", "martes", "miércoles"])
  );

  /**
   * 7. Crea una función que elimine todos los undefined de un array.
   */
  console.log(``);
  console.log(`Ejercicio 7: función que elimina undefined de un array.`);
  let undefinedArray = [
    undefined,
    2,
    "word",
    {},
    undefined,
    ["lunes", "martes"],
  ];

  function eliminateUndefined(param) {
    let newArray = param;
    newArray.forEach((element) => {
      //Si es undefined lo cambia por un array vacío
      if (typeof element == "undefined") {
        newArray.splice(newArray.indexOf(element), 1, []);
      }
    });

    return newArray;
  }
  console.log(eliminateUndefined(undefinedArray));

  /**
   * 8. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:
   * Array.prototype.forEach(),
   * Array.prototype.every(),
   * Array.prototype.some() y
   * Array.prototype.filter()
   */
  console.log(``);
  console.log(`Ejercicio 8: diferencia entre métodos.`);
  //Array.prototype.forEach()
  //Recorre un objeto iterable y ejecuta una función a cada uno de los elementos
  console.log(`Ejemplo foreach`);
  function showEvenNumbers(param) {
    let evenNumbers = [];
    param.forEach(function (element) {
      if (element % 2 == 0) {
        evenNumbers.push(element);
      }
    });

    return evenNumbers;
  }

  console.log(showEvenNumbers(numbers)); //(2) [2, 4]

  //Array.prototype.every()
  //Comprueba si todos los elementos de un array cumplen o no una condición, devolviendo true o false
  console.log(`Ejemplo prototype.every`);
  let lowerThan = (currentValue) => currentValue < 6;
  console.log(numbers.every(lowerThan)); //true

  //Array.prototype.some()
  //Comprueba si al menos un elemento cumple con la condición
  console.log(`Ejemplo prototype.some`);
  let lowerThan2 = (currentValue) => currentValue > 3;
  console.log(numbers.some(lowerThan2)); //true

  //Array.prototype.filter()
  // crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  console.log(`Ejemplo prototype.filter`);
  let lowerThan3 = (currentValue) => currentValue > 2;
  console.log(numbers.filter(lowerThan3)); //(2) [3, 4]

  /**
   * 9. Averigua qué método es el más eficiente para manejarse con arrays.
   * Compruébalo mediante performance.now()
   * se puede utilizar para comprobar el rendimiento de su código.
   * Puede verificar el tiempo de ejecución de su código usando este método.
   * Devuelve el valor del tiempo (de tipo double) en milisegundos.
   * El valor devuelto representa el tiempo transcurrido desde que comenzó la ejecución.
   *
   * 1. Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
   * 2. Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
   */
  console.log(``);
  console.log(`Ejercicio 9. Eficiencia en métodos`);
  //push()
  function usePush() {
    let cont = 100;
    let numbersArray = [];
    do {
      cont--;
      numbersArray.push(cont);
    } while (cont > 0);

    return numbersArray;
  }
  console.log(`100 números con push()`);
  console.log(usePush());

  //unshift()
  function useUnshift() {
    let cont = 100;
    let numbersArray = [];
    do {
      cont--;
      numbersArray.unshift(cont);
    } while (cont > 0);

    return numbersArray;
  }
  console.log(`100 números con unshift()`);
  console.log(useUnshift());

  //Inserción directa
  function insertNumbers() {
    let cont = 100;
    let numbersArray = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99,
    ];
    return numbersArray;
  }
  console.log(`100 números con inserción directa`);
  console.log(insertNumbers());

  //Arrayof
  function useArrayOf() {
    let numbersArray = Array.of(
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99
    );

    return numbersArray;
  }
  console.log(`100 números con Arrayof`);
  console.log(useArrayOf());

  //Longitud fija
  function fixLengthPush() {
    let numbersArray = Array(100);
    let cont = 100;

    numbersArray.splice(
      0,
      100,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99
    );

    return numbersArray;
  }
  console.log(`100 números con longitud fija`);
  console.log(fixLengthPush());

  console.log(``);
  console.log(`Comparación de métodos de agregación`);
  console.log(`-----------------------------`);
  console.log(`Rendimiento push() => ${performance.now(usePush())}`);
  console.log(`Rendimiento unshift() => ${performance.now(useUnshift())}`);
  console.log(
    `Rendimiento inserción directa => ${performance.now(insertNumbers())}`
  );
  console.log(`Rendimiento Arrayof => ${performance.now(useArrayOf())}`);
  console.log(
    `Rendimiento longitud fija => ${performance.now(fixLengthPush())}`
  );

  console.log("");
  console.log(`Comparación métodos de eliminación`);
  console.log(`----------------`);

  //Método pop()
  function deleteWithPop() {
    let numbersArray = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99,
    ];

    do {
      numbersArray.pop();
    } while (numbersArray.length > 0);

    return numbersArray;
  }
  console.log(`Eliminamos con pop()`);
  console.log(deleteWithPop());

  //Método shift()
  function deleteWithShift() {
    let numbersArray = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99,
    ];

    do {
      numbersArray.shift();
    } while (numbersArray.length > 0);

    return numbersArray;
  }
  console.log(`Eliminamos con shift()`);
  console.log(deleteWithShift());

  //Eliminamos todos con splice
  function deleteWithSplice() {
    let numbersArray = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95, 96, 97, 98, 99,
    ];

    numbersArray.splice(0, 100);

    return numbersArray;
  }
  console.log(`Eliminamos todos.`);
  console.log(deleteWithSplice());

  console.log(
    `Rendimiento eliminar con pop() => ${performance.now(deleteWithPop)}`
  );
  console.log(
    `Rendimiento eliminar con shift() => ${performance.now(deleteWithShift)}`
  );
  console.log(
    `Rendimiento eliminar con splice() => ${performance.now(deleteWithSplice)}`
  );
}