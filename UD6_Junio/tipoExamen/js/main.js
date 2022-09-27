/**
 * @author Virginia Ordoño Bernier May 2022
 * @description Ejercicio que demuestra el buen uso de varios conceptos javaScript. Ud6.
 */

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.getElementById("uno");
  const section2 = document.getElementById("dos");
  const btnCreaFinalDe1 = document.querySelector("div :nth-child(2)");
  const btnCreaFinalDe2 = document.querySelector("div :nth-child(3)");
  const btnCreaPrincioDe1 = document.querySelector("div div :nth-child(1)");
  const btnCreaPrincioDe2 = document.querySelector("div div :nth-child(2)");
  const btnEliminaFinalDe1 = document.querySelector("div :nth-child(7)");
  const btnEliminaFinalDe2 = document.querySelector("div :nth-child(8)");
  const btnEliminaPrincioDe1 = document.querySelector("div :nth-child(9)");
  const btnEliminaPrincioDe2 = document.querySelector("div :nth-child(10)");
  const pF = document.querySelector("div :nth-child(4)");
  const p1F = "<p class='p1'>".concat(pF.value).concat("</p>");
  const p2F = "<p class='p2'>".concat(pF.value).concat("</p>");
  const pP = document.querySelector("div :nth-child(5) input");
  const p1P = "<p class='p1'>".concat(pP.value).concat("</p>");
  const p2P = "<p class='p2'>".concat(pP.value).concat("</p>");
  const btnDuplicaSeccion1 = document.querySelector("div :nth-child(12)");
  const btnEliminaSeccion1 = document.querySelector("div :nth-child(13)");
  const btnCambiaColor1 = document.querySelector("div :nth-child(15) button");
  const btnCambiaFondo2 = document.querySelector("div :nth-child(16) button");
  const selectedColor = document.getElementById("color");
  const h2Crea = document.querySelector("div :nth-child(1)");
  const h2Elimina = document.querySelector("div :nth-child(6)");
  const btnToggle = document.querySelector("div :nth-child(19) button");
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']");
  const radioButtons = document.querySelectorAll("input[name='fondo']");

  //Añade un párrafo al final de section 1
  btnCreaFinalDe1.addEventListener("click", function () {
    section1.insertAdjacentHTML("beforeend", p1F);
  });

  //Añade un párrafo al final de section 2
  btnCreaFinalDe2.addEventListener("click", function () {
    section2.insertAdjacentHTML("beforeend", p2F);
  });

  //Añade un párrafo al principio de section 1
  btnCreaPrincioDe1.addEventListener("click", function () {
    section1.insertAdjacentHTML("afterbegin", p1P);
  });

  //Añade un párrafo al principio de section 2
  btnCreaPrincioDe2.addEventListener("click", function () {
    section2.insertAdjacentHTML("afterbegin", p2P);
  });

  //Elimina un párrafo al final de section 1
  btnEliminaFinalDe1.addEventListener("click", function () {
    section1.lastChild?.remove()
  });

  //Elimina un párrafo al final de section 2
  btnEliminaFinalDe2.addEventListener("click", function () {
    section2.lastChild?.remove()
  });

  //Elimina un párrafo al principio de section 1
  btnEliminaPrincioDe1.addEventListener("click", function () {
    section1.removeChild(section1.firstElementChild);
  });

  //Elimina un párrafo al principio de section 2
  btnEliminaPrincioDe2.addEventListener("click", function () {
    section2.removeChild(section2.firstElementChild);
  });

  //Duplica sección 1
  btnDuplicaSeccion1.addEventListener("click", function () {
    const cloned = section1.cloneNode(true);
    section1.appendChild(cloned);
  });

  //Elimina sección 1
  btnEliminaSeccion1.addEventListener("click", function () {
    section1.remove();
  });

  //Cambia color y fondo
  btnCambiaColor1.addEventListener("click", function () {
    h2Elimina.style.color = selectedColor.value;
  });

  btnCambiaFondo2.addEventListener("click", function () {
    radioButtons.forEach((e) => {
      if (e.checked) {
        h2Elimina.setAttribute("style", `background-color: ${e.value}`);
      }
    });
  });

  //Toggle
  btnToggle.addEventListener("click", function () {
    h2Crea.classList.toggle(this.nextElementSibling.value);
  });

  //Checked
  checkedBoxes.forEach((e) => {
    e.addEventListener("change", function () {
      if (e.checked) {
        h2Crea.className = this.value;
        //h2Crea.classList.add(this.value); No coge el tercer color
      } else {
        h2Crea.classList.remove(this.value);
      }
    });
  });
});