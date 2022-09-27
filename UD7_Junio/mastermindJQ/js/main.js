/**
 * Mastermind con jQuery
 * @date Abril 2022
 * @author Virginia Ordoño Bernier
 */

 const mastermind = (function () {
    let generatedCombination = [];
    let checkingBalls = [];
  
    const mostrar = function () {
      console.log(generatedCombination);
      return generatedCombination;
    };
  
    const comprobarCoincidencias = function (colors) {
      //Colores del jugador
      let playerColors = colors;
  
      //Copiamos la combinación generada
      //NO asignar porque te modifica el array original
      //console.log(generatedCombination);
      let clonedColors = generatedCombination.slice();
  
      //Array para incluir las coincidencias
      let coincidences = [];
  
      //Si coincide color y posición colocamos bola negra en la comprobación
      //y dejamos el índice del array copiado vacío
      for (let i = 0; i < 4; i++) {
        if (playerColors[i] === clonedColors[i]) {
          coincidences.push("black");
          clonedColors[i] = "";
          playerColors[i] = "";
        }
      }
  
      //Si coincide color colocamos bola blanca en la comprobación
      //y dejamos el índice del array copiado vacío
      for (let i = 0; i < 4; i++) {
        //Eliminamos posiciones vacías para que no las compare
        let clonedColorsV2 = clonedColors.filter((x) => x != "");
        if (clonedColorsV2.includes(playerColors[i])) {
          let index = clonedColors.indexOf(playerColors[i]);
          clonedColorsV2[index] = "";
          playerColors[i] = "";
          coincidences.push("white");
        }
      }
  
      //Cargamos el arrar de coincidencias en el atributo
      checkingBalls = coincidences.slice(0, 4);
      //console.log(coincidences);
      return coincidences;
    };
  
    //Genera combinación y devuelve array con colores aleatorios
    const createCombination = function () {
      const colorsArray = [
        "black",
        "white",
        "green",
        "red",
        "blue",
        "yellow",
        "brown",
        "orange",
      ];
      const chosenColors = [];
      let cont = 0;
  
      do {
        cont++;
        chosenColors.push(colorsArray[Math.floor(Math.random() * 8)]);
      } while (cont < 4);
  
      return chosenColors;
    };
  
    const init = function () {
      //Cargamos los colores generados en la propiedad
      generatedCombination = createCombination();
      createCombination();
      mostrar();
    };
  
    return {
      init: init,
      mostrar: mostrar,
      comprobarCoincidencias: comprobarCoincidencias,
    };
  })();
  
  document.addEventListener("DOMContentLoaded", mastermind.init);
  