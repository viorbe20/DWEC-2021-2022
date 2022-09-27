/**
 * @file Tarea 3.4. Listado Number.
 * En JavaScript implementa estas funciones.
 * 1. Sistemas numéricos: Crea una página que transforme de un sistema numérico a otro: binario, octal, decimal, hexadecimal.
 * 2. Suma y multiplicación: Crea una página que sume y multiplique independientemente del los sistemas de numeración
 * 3. Calcula el área de una circunferencia. Admitirá números decimales. Asegúrate de que en el resultado nunca se muestren más de 4 dígitos
 * @date November 2021st 
 * @author Virginia Ordoño Bernier
 */

{
  //EJERCICIO 1
  /**
   * Comprueba que el número sea decimal y lo devuelve en formato number
   * @param {*} number
   * @returns
   */
  function checkDec(number) {
    let regExp = new RegExp(/^[0-9]+$/i);
    let result;

    if (!regExp.test(number)) {
      document.getElementById("dec").value =
        "El valor introducido no es válido.";
    } else {
      //El número es un string, lo pasamos a number
      result = parseFloat(number);
    }
    return result;
  }

  /**
   * Comprueba que el número tenga formato binario y lo convierte en decimal
   * @param {*} number
   * @returns
   */
  function checkBin(number) {
    let regExp = new RegExp(/^[0-1]+$/i);
    let result;

    if (!regExp.test(number)) {
      document.getElementById("bin").value =
        "El valor introducido no es válido.";
    } else {
      //El número es binario. Lo pasamos a entero decimal
      result = parseInt(number, 2);
    }
    return result;
  }

  /**
   * Comprueba que el número tenga formato octal y lo convierte en decimal
   * @param {*} number
   * @returns
   */
  function checkOct(number) {
    let regExp = new RegExp(/^[0-7]+$/i);
    let result;

    if (!regExp.test(number)) {
      document.getElementById("oct").value =
        "El valor introducido no es válido.";
    } else {
      //El número es binario. Lo pasamos a entero decimal
      result = parseInt(number, 8);
    }
    return result;
  }

  /**
   * Comprueba que el número tenga formato hexadecimal y lo convierte en decimal
   * @param {*} number
   * @returns
   */
  function checkHex(number) {
    let regExp = new RegExp(/^[0-9A-E]+$/i);
    let result;

    if (!regExp.test(number)) {
      document.getElementById("resultHex").innerText =
        "El valor introducido no es válido.";
    } else {
      //El número es binario. Lo pasamos a entero decimal
      result = parseInt(number, 16);
    }
    return result;
  }

  //EJERCICIO 2
  /**
   * Comprueba el sistema de numeración seleecionado por el usuario y en función de la
   * operación elegida, te devuelve el resultado
   * @param {*} number1
   * @param {*} number2
   * @param {*} operation
   * @param {*} system
   * @returns
   */
  function calculate(number1, number2, operation, system) {
    let result;
    let num1;
    let num2;

    if (system == "binary") {
      num1 = parseInt(number1, 2);
      num2 = parseInt(number2, 2);
      result = operations(operation, num1, num2);
    } else if (system == "octal") {
      num1 = parseInt(number1, 8);
      num2 = parseInt(number2, 8);
      result = operations(operation, num1, num2);
    } else if (system == "hexadecimal") {
      num1 = parseInt(number1, 16);
      num2 = parseInt(number2, 16);
      result = operations(operation, num1, num2);
    } else if (system == "decimal") {
      result = operations(operation, number1, number2);
    } else {
      document.getElementById("result").value =
        "Los datos introducidos no son correctos.";
    }
    return result;
  }

  /**
   * Suma o multiplica en función de la selección del usuario
   * @param {*} operation
   * @param {*} number1
   * @param {*} number2
   * @returns
   */
  function operations(operation, number1, number2) {
    if (operation == "addition") {
      result = parseInt(number1) + parseInt(number2);
      console.log("suma");
    } else {
      result = parseInt(number1) * parseInt(number2);
      console.log("multiplica");
    }
    return result;
  }

  //EJERCICIO 3
  /**
   *Calcula el área de una circunferencia
   * @param {number} radius
   * @returns
   */
  function calculateAreaCircum(radius) {
    let result = Math.pow(radius, 2) * Math.PI;
    return result.toFixed(4);
  }

  document.addEventListener("DOMContentLoaded", function () {
    let radius = document.getElementById("radius");
    let dec = document.getElementById("dec");
    let bin = document.getElementById("bin");
    let oct = document.getElementById("oct");
    let hex = document.getElementById("hex");
    let ope1 = document.getElementById("ope1");
    let ope2 = document.getElementById("ope2");
    let binarySystem = document.getElementById("binary");
    let decimalSystem = document.getElementById("decimal");
    let octalSystem = document.getElementById("octal");
    let hexadecimalSystem = document.getElementById("hexadecimal");
    let addOpe = document.getElementById("addition");
    let multiOpe = document.getElementById("multiplication");
    let chosenSystem;
    let chosenOperation;

    //EJERCICIO 1

    hex.addEventListener("keyup", function () {
      //Mostramos resultado

      document.getElementById("dec").value = checkHex(hex.value);
      document.getElementById("bin").value = checkHex(hex.value).toString(2);
      document.getElementById("oct").value = checkHex(hex.value).toString(8);
    });

    oct.addEventListener("keyup", function () {
      //Mostramos resultado
      document.getElementById("dec").value = checkOct(oct.value);
      document.getElementById("bin").value = checkOct(oct.value).toString(2);
      document.getElementById("hex").value = checkOct(oct.value).toString(16);
    });

    bin.addEventListener("keyup", function () {
      //Mostramos resultado

      document.getElementById("dec").value = checkBin(bin.value);
      document.getElementById("oct").value = checkBin(bin.value).toString(8);
      document.getElementById("hex").value = checkBin(bin.value).toString(16);
    });

    dec.addEventListener("keyup", function () {
      //Mostramos resultado

      document.getElementById("bin").value = checkDec(dec.value).toString(2);
      document.getElementById("oct").value = checkDec(dec.value).toString(8);
      document.getElementById("hex").value = checkDec(dec.value).toString(16);
    });

    binarySystem.addEventListener("click", function () {
      chosenSystem = binarySystem.value;
      console.log(chosenSystem);
    });

    decimalSystem.addEventListener("click", function () {
      chosenSystem = decimalSystem.value;
      console.log(chosenSystem);
    });

    octalSystem.addEventListener("click", function () {
      chosenSystem = octalSystem.value;
      console.log(chosenSystem);
    });

    hexadecimalSystem.addEventListener("click", function () {
      chosenSystem = hexadecimalSystem.value;
      console.log(chosenSystem);
    });

    addOpe.addEventListener("click", function () {
      chosenOperation = addOpe.value;
      console.log(chosenOperation);
    });

    multiOpe.addEventListener("click", function () {
      chosenOperation = multiOpe.value;
      console.log(chosenOperation);
    });

    ope1.addEventListener("blur", function () {});

    ope2.addEventListener("blur", function () {
      document.getElementById("result").value = calculate(
        ope1.value,
        ope2.value,
        chosenOperation,
        chosenSystem
      );
    });

    radius.addEventListener("blur", function () {
      //Mostramos resultado
      document.getElementById("resultAreaCircum").innerText =
        calculateAreaCircum(radius.value);
    });
  });
}
