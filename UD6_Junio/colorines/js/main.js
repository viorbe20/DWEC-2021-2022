/**
 * @author Virginia Ordoño Bernier
 * @date Marzo 2022
 * @summary Reentrega Examen UD4-5-6. Febrero de 2022
 * @description Colorines.
 */
document.addEventListener("DOMContentLoaded", function () {
  let p = document.getElementsByTagName("p");
  let divsArray = Array.from(document.querySelectorAll("div div"));

  /**
   * Selecciona un color de manera aleatoria
   * @returns
   */
  const addRandomColor = function () {
    // let randomColor;
    // const colors = ["rojo", "amarillo", "verde"];
    // randomColor = colors[Math.floor(Math.random() * 3)];
    // return randomColor;
    let randomColor;
    const colors = ["rojo", "amarillo", "verde"];
    randomColor = colors[Math.floor(Math.random() * 3)];
    return randomColor;
  };

  /**
   * Se le añade un comportamiento "cliquea" al hacer click que:
   * - Se sustituye el contenido "item" por la clase/color del div
   * - Se elimina la clase/color del div
   * - Se chequean las clases de los cuatro divs. Si las cuatro clases han desaparecido
   * - Se elimina e comportamiento de cada div
   * - Se duplica el grid tras el párrafo apellidos
   */
  const cliquea = function () {
    this.textContent = this.classList[0];
    this.classList.remove(this.classList[0]);

    if (
      divsArray.every((e) => e.classList.length === 0 && e.textContent === "")
    ) {
      divsArray.forEach((e) => {
        e.removeEventListener("click", cliquea);
      });

      document
        .querySelector("body") //no es necesario el queryselector porque el body es palabra reservada  y está accesible
        .insertAdjacentElement(
          "beforeend",
          document.querySelector(".grid").cloneNode(true)
        );
    }
  };

  //Añade nombre y cambia color de fondo
  p[0].textContent = "Virginia";
  p[1].textContent = "Ordoño Bernier";
  p[0].style.backgroundColor = "lightblue";
  p[1].style.backgroundColor = "lightblue";

  //Añade clases a los divs y comportamiento
  divsArray.forEach((e) => {
    e.classList.add(addRandomColor());
    e.addEventListener("click", cliquea);
  });
});
