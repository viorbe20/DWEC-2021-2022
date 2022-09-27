/**
 * @file (OPCIONAL) Crea el sitio que demuestre el uso del SessionStorage. Para ello: 
Usa <label> para indicar clave o valor
<input type="text"> para la entrada de clave y valor
<input type="button"> para las acciones
El sitio debe poder:
Almacenar una cookie (clave/valor)
Recuperar una cookie (clave)
Eliminar una cookie (clave)
Eliminar todas las cookies
Averiguar el número de cookies almacenadas. 

 * @date December 2021
 * @author Virginia Ordoño Bernier
 */

{
  document.addEventListener("DOMContentLoaded", function () {
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
    let lengthItemsSpan = document.getElementById("lengthItemsSpan");

    setItemBtn.addEventListener("click", function () {
      //Comprobamos que no estén vacíos
      if (setItemKey.value == "" || setItemValue.value == "") {
        setItemSpan.innerText = "Introduce los dos valores";
      } else {
        sessionStorage.setItem(
          setItemKey.value.trim(),
          setItemValue.value.trim()
        );
        setItemSpan.innerText = "Ítem creado";
      }
    });

    //Obtiene el ítem dada una clave
    getItemBtn.addEventListener("click", function () {
      sessionStorage.getItem(getItemKey.value) == null
        ? (getItemSpan.innerText = "No existe esa clave")
        : (getItemSpan.innerText = sessionStorage.getItem(getItemKey.value));
    });

    //Elimina un ítem dada una clave
    removeItemBtn.addEventListener("click", function () {
      //Comprobamos si existe o no para mostrar el mensaje
      sessionStorage.getItem(removeItemKey.value) == null
        ? (removeItemSpan.innerText = "No existe esa clave")
        : (removeItemSpan.innerText = "Ítem eliminado");
        sessionStorage.removeItem(removeItemKey.value);
    });

    //Elimina todos los ítems
    clearItemsBtn.addEventListener("click", function () {
      sessionStorage.clear();
      clearItemsSpan = "Item eliminado";
    });

    //Cuenta los ítems
    lengthItemsBtn.addEventListener("click", function () {
      lengthItemsSpan.innerText = sessionStorage.length;
    });
  });
}
