/**
 * @author Virginia Ordoño Bernier
 * @date May 2022
 * Entrega un ejercicio "tipo examen" donde demuestres el buen uso de los objetos predefinidos javaScript vistos en la unidad:
 */

/**
 * 
 * @returns Devuelve todos los ítems del localstorage
 */
let getLocalStorage = function () {
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
};

/**
 * Comprueba que la dirección de correo sea correcta
 * @param {*} email
 * @param {*} span
 */
let wrongEmail = function (input, span) {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input) == false) {
    span.innerHTML = " La dirección no es correcta.";
    return true;
  }
};

/**
 *
 * @param {*} input
 * @param {*} span
 * @returns
 */
let isEmpty = function (input, span) {
  if (input.trim().length == 0) {
    span.innerHTML = " Este campo debe estar completo.";
    return true;
  }
};

/**
 * Función que detecta solo letras en input
 * @param {*} word
 * @param {*} span
 */
let containsNumbers = function (input, span) {
  if (!/^[a-zA-Z]+$/.test(input.trim())) {
    span.innerHTML = " Solo puede contener letras.";
    return true;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let forms = document.getElementsByTagName("form");
  const marksSpan = document.getElementById("marks");
  const a_marks = [];
  let cont = 0;
  let integerAmount = 0;
  let floatAmount = 0;
  let span_max = document.getElementById("span_max");
  let span_min = document.getElementById("span_min");
  let span_round = document.getElementById("span_round");
  let span_int = document.getElementById("span_int");
  let span_dec = document.getElementById("span_dec");

  /**
   * Ejercicio 1
   */
  //Genera notas aleatorias
  while (cont < 8) {
    a_marks.push((Math.random() * 10.01).toFixed(2));
    cont++;
  }

  //marksSpan.innerHTML = "";
  a_marks.forEach((e) => {
    marksSpan.innerHTML += `${e} / `;
  });

  //Muestra nota máxima
  span_max.innerHTML = Math.max(...a_marks);

  //Muestra nota mínima
  span_min.innerHTML = Math.min(...a_marks);

  //Muestra notas redondeadas
  a_marks.forEach((e) => {
    span_round.innerHTML += `${Math.round(e)} / `;
  });

  //Muestra número de enteros y decimales
  a_marks.forEach((e) => {
    Number.isInteger(e) ? integerAmount++ : floatAmount++;
  });
  span_int.innerHTML = integerAmount;
  span_dec.innerHTML = floatAmount;

  /**
   * Ejercicio 2
   */
  let number = document.getElementById("number_ex2");
  let checkNumber = document.getElementById("btn_ex2");
  let spanEx2 = document.getElementById("span_ex2");
  let spanFinite = document.getElementById("span_finite");
  let spanType = document.getElementById("span_type");
  let spanBigint = document.getElementById("span_bigint");

  checkNumber.addEventListener("click", function () {
    spanEx2.innerHTML = "";

    //Valida inputs vacíos
    if (isEmpty(number.value, spanEx2)) {
      return;
    }

    if (isNaN(number.value)) {
      spanEx2.innerHTML = " Debes introducir un número";
      return;
    }
    //Comprue si es finito
    isFinite(number.value.search())
      ? (spanFinite.innerHTML = " Sí.")
      : (spanFinite.innerHTML = " No.");

    //Entero o decimal
    if (/\d.\d/.test(number.value)) {
      spanType.innerHTML = " Es un decimal.";
    } else if (/\d./.test(number.value)) {
      spanType.innerHTML = " Introduce un valor correcto.";
    } else if (Number.isInteger(parseInt(number.value))) {
      spanType.innerHTML = " Es un entero.";
    }
  });

  /**
   * Ejercicio 3
   */
  let formEx2 = forms[0];
  const check2 = document.getElementById("btn_check2");

  check2.addEventListener("click", function () {
    //Vaciamos todos los spans del formulario
    let allSpans = formEx2.getElementsByTagName("span");
    for (let key in allSpans) {
      allSpans[key].innerHTML = "";
    }

    let name = document.getElementById("input_name");
    let spanName = document.getElementById("span_name");
    let lastname = document.getElementById("input_lastname");
    let spanLastname = document.getElementById("span_lastname");
    let email = document.getElementById("input_email");
    let spanEmail = document.getElementById("span_email");
    let emailLength = email.value.length;
    let emailSliced = email.value.slice(0, 2);
    let spanEncrypt = document.getElementById("span_encrypt");
    let spanMay = document.getElementById("span_may");
    let spanMinu = document.getElementById("span_minu");
    let spanMsgEx3 = document.getElementById("span_msg_ex3");

    //Valida inputs vacíos
    if (
      isEmpty(name.value, spanName) ||
      isEmpty(lastname.value, spanLastname) ||
      isEmpty(email.value, spanEmail)
    ) {
      return;
    }

    //Valida contenido inputs
    if (
      containsNumbers(name.value, spanName) ||
      containsNumbers(lastname.value, spanLastname)
    ) {
      return;
    }

    //Valida email correcto
    if (wrongEmail(email.value, spanEmail)) {
      return;
    }

    //Datos válidos
    spanMsgEx3.innerHTML = " Datos correctos."

    //Muestra email encriptado
    spanEncrypt.innerHTML = String(emailSliced.padEnd(emailLength, "*")).trim();

    //Mayúsculas y minúsculas
    spanMay.innerHTML = `${name.value.toUpperCase()} ${lastname.value.toUpperCase()}`;
    spanMinu.innerHTML = `${name.value.toLowerCase()} ${lastname.value.toLowerCase()}`;
  });

  /**
   * Ejercicio 4. Local storage
   */
  let setItemKey = document.getElementById("setItemKey");
  let setItemValue = document.getElementById("setItemValue");
  let setItemBtn = document.getElementById("setItemBtn");
  let setItemSpan = document.getElementById("setItemSpan");

  let getItemBtn = document.getElementById("getItemBtn");
  let getItemKey = document.getElementById("getItemKey");
  let getItemSpan = document.getElementById("getItemSpan");
  let removeItemBtn = document.getElementById("removeItemBtn");
  let removeItemKey = document.getElementById("removeItemKey");
  let removeItemSpan = document.getElementById("removeItemSpan");
  let clearItemsBtn = document.getElementById("clearItemsBtn");
  let clearItemsSpan = document.getElementById("clearItemsSpan");
  let lengthItemsBtn = document.getElementById("lengthItemsBtn");
  let spanLsAmount = document.getElementById("span_ls_amount");
  let btnGetItems = document.getElementById("btn_getItems");
  let spanGetItems = document.getElementById("span_getItems");

  setItemBtn.addEventListener("click", function () {
    //Comprobamos que no estén vacíos
    if (setItemKey.value == "" || setItemValue.value == "") {
      setItemSpan.innerText = "Introduce los dos valores";
    } else {
      localStorage.setItem(setItemKey.value.trim(), setItemValue.value.trim());
      setItemSpan.innerText = "Ítem creado";
    }
  });

  //Obtiene el ítem dada una clave
  getItemBtn.addEventListener("click", function () {
    localStorage.getItem(getItemKey.value) == null
      ? (getItemSpan.innerText = "No existe esa clave")
      : (getItemSpan.innerText = localStorage.getItem(getItemKey.value));
  });

  //Elimina un ítem dada una clave
  removeItemBtn.addEventListener("click", function () {
    //Comprbamos si existe o no para mostrar el mensaje
    localStorage.getItem(removeItemKey.value) == null
      ? (removeItemSpan.innerText = "No existe esa clave")
      : (removeItemSpan.innerText = "Ítem eliminado");
    localStorage.removeItem(removeItemKey.value);
  });

  //Elimina todos los ítems
  clearItemsBtn.addEventListener("click", function () {
    localStorage.clear();
    clearItemsSpan = "Item eliminado";
  });

  //Cuenta los ítems
  lengthItemsBtn.addEventListener("click", function () {
    spanLsAmount.innerHTML = localStorage.length;
  });

  //Muestra todos los ítems
  btnGetItems.addEventListener("click", function () {
   let a_items = getLocalStorage();
   for (let index in a_items) {
    spanGetItems.innerHTML += a_items[index] + " - ";
   }
    
  });
});