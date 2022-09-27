/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/04
 * @description Para ello vamos a crear una función que recibe la altura del árbol,
 * que será un entero positivo del 1 a, como máximo, 100.
 * Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios.
 * Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
 * Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
 * Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
 */

{
  let isANumber = function (input, span) {
    if (input.trim().length == 0) {
      span.innerHTML = " Solo puede contener dígitos.";
      return;
    }

    if (!/\d/.test(input.trim())) {
      span.innerHTML = " Solo puede contener dígitos.";
      return;
    }

    if (parseInt(input.trim()) >= 1 && parseInt(input.trim()) <= 100) {
      return true;
    } else {
      span.innerHTML = " El número debe estar comprendido entre 1 y 100.";
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const high = document.getElementById("high");
    const span = document.getElementById("span");
    const check = document.getElementById("check");
    const reload = document.getElementById("reload");
    const tree = document.getElementById("tree");
    let cont;

    reload.addEventListener("click", function () {
      location.reload();
    });

    check.addEventListener("click", function () {
      let tree = document.createElement("div");
      tree.setAttribute("id", "tree");
      check.insertAdjacentElement("afterend", tree);

      if (isANumber(high.value, span)) {
        cont = parseInt(high.value.trim());
        let trunkSide = parseInt(high.value.trim()) - 1;
        asteriskCont = asterisk = 1; //aumentamos en 2

        while (cont > 0) {
          let sideL = (sideR = cont - 1); //vamos descontando 1

          //Creamos elemento DOM
          let p = document.createElement("p");
          tree.appendChild(p);

          //Imprimime lateral
          while (sideL > 0) {
            p.innerText += "_";
            sideL--;
          }

          //Imprimime asterisco
          while (asteriskCont > 0) {
            p.innerText += "*";
            asteriskCont--;
          }

          //Imprimime lateral
          while (sideR > 0) {
            p.innerText += "_";
            sideR--;
          }

          //Imprime tronco
          if (cont == 1) {
            for (let index = 0; index < 2; index++) {
              //Creamos elemento DOM
              let trunk = document.createElement("p");
              tree.appendChild(trunk);
              let cont1 = 0;
              let cont2 = 0;
              //Imprimime lateral
              while (cont1 < trunkSide) {
                trunk.innerText += "_";
                cont1++;
              }

              trunk.innerText += "#";

              //Imprimime lateral
              while (cont2 < trunkSide) {
                trunk.innerText += "_";
                cont2++;
              }
            }
          }

          asteriskCont = asterisk = asterisk + 2;
          cont--;
        }
      }
    });
  });
}