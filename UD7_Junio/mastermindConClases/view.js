/**
 * Tarea 6.1 Mastermind: objeto con closure y entorno Gráfico
 * @date February 2022
 * @author Virginia Ordoño Bernier
 */

{
  /**
   * Compara dos arrays.
   * @param {*} a
   * @param {*} b
   * @returns true or false
   */
  const arrayEquals = function (a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

  /**
   * Permite seleccionar un color
   * @param {*} colorsArray
   */
  const choseColor = function (colorsArray) {
    colorsArray.forEach((color) => {
      color.addEventListener("click", function () {
        //Cargamos con los nuevos valores
        let playerColorsArray = getPlayerPalette();
        //Pinta los círculos con el color seleccionado
        for (let i = 0; i < playerColorsArray.length; i++) {
          if (
            playerColorsArray[i].style.backgroundColor ==
            "rgba(128, 128, 128, 0.624)"
          ) {
            playerColorsArray[i].style.backgroundColor =
              this.style.backgroundColor;
            //Añadimos propiedad para indicar que tiene color
            playerColorsArray[i].setAttribute("data-state", "full");
            return;
          }
        }
      });
    });
  };

  /**
   * Evento click de la paleta horizontal. Elimina el color seleccionado
   */
  const deleteColor = function () {
    //Cargamos con los nuevos valores
    let playerColorsArray = getPlayerPalette();
    playerColorsArray.forEach((circle) => {
      circle.addEventListener("click", circlesFunction);
    });
  };

  /**
   * Evento click de la paleta horizontal. Elimina el color seleccionado
   * @param {*} playerColorsArray
   */
  const deleteColorsEvents = function (playerColorsArray) {
    playerColorsArray.forEach((circle) => {
      circle.removeEventListener("click", circlesFunction);
    });
  };

  /**
   * Evento click de la paleta horizontal. Elimina el color seleccionado
   */
  let circlesFunction = function (e) {
    if (e.target.style.backgroundColor != "rgba(128, 128, 128, 0.624)") {
      //Añadimos propiedad para indicar que tiene no color
      e.target.setAttribute("data-state", "empty");
      e.target.style.backgroundColor = "rgba(128, 128, 128, 0.624)";
    }
  };

  /**
   * Obtiene los colores seleccionados por el jugador
   * @param {*} playerColorsArray
   * @returns array con el nombre de los colores
   */
  let getPlayerColors = function (playerColorsArray) {
    let selectedColors = [];
    playerColorsArray.forEach((color) => {
      selectedColors.push(color.style.backgroundColor);
    });

    return selectedColors;
  };

  /**
   * Muestra por pantalla las bolas negras y blancas
   * @param {*} solutionBalls
   * @param {*} solutionBallsArray
   */
  let showSolutionBalls = function (solutionBalls, solutionBallsArray) {
    for (let i = 0; i < solutionBalls.length; i++) {
      solutionBallsArray[i].style.backgroundColor = solutionBalls[i];
    }
  };

  /**
   * Devuelve el número de bolas con color
   * @param {*} colorsArray
   * @returns número de círculos coloreados
   */
  const getColorsNumber = function (colorsArray) {
    let colorsNumber = 0;

    colorsArray.forEach((e) => {
      if (e.dataset.state != "full") {
        return;
      }
      colorsNumber++;
    });

    console.log(colorsNumber);

    return colorsNumber;
  };

  /**
   * Obtiene el div de los colores seleccionados
   * @returns array con el contenido del div
   */
  const getPlayerPalette = function () {
    let betColors = document.getElementsByClassName("currentBetColor");
    let playerColorsArray = Array.from(betColors);
    return playerColorsArray;
  };

  const cloneColorDiv = function(originalNode, refNode, oldClassName, newClassName){  
    let clonedNode = originalNode.cloneNode(true);
    clonedNode.setAttribute("class", newClassName);
    refNode.insertBefore(clonedNode, originalNode);
    originalNode.setAttribute("class", oldClassName);         
  }

  document.addEventListener("DOMContentLoaded", function () {
    let colors = document.getElementsByClassName("colors");
    let colorsArray = Array.from(colors);
    let checkButton = document.getElementById("btn");
    let attemptsDiv = document.getElementById("attempts");
    let attemptsNumber = 1;
    attemptsDiv.textContent = `Intento ${attemptsNumber}`;

    choseColor(colorsArray);

    deleteColor();

    checkButton.addEventListener("click", function () {
      let total;
      //Si no están los 4 colores no sigue
      total = getColorsNumber(getPlayerPalette());
      console.log(total);
      if (total != 4) return;

      //Si llega hasta aquí se han seleccionado 4 colores
      //Comprobamos y mostramos coincidencias
      let solutionBalls = document.getElementsByClassName("currentBalls");
      let solutionBallsArray = Array.from(solutionBalls);

      //Comprobamos y mostramos coincidencias
      let resultBalls = [];
      resultBalls = mastermind.comprobarCoincidencias(
        getPlayerColors(getPlayerPalette())
      );
      showSolutionBalls(resultBalls, solutionBallsArray);

      //Eliminamos evento de la fila de colores actual
      deleteColorsEvents(getPlayerPalette());

      //Si acierta los colores, ya no carga la nueva paleta de colores
      if (arrayEquals(resultBalls, ["black", "black", "black", "black"]))
        return;

      //Si llega aquí es porque no se han acertado los colores
      //Clona y agrega nueva barra vacía de colores
      let originalNode = document.getElementById("bets");
      let betColors = document.getElementsByClassName("currentBetColor");
      let refNode = document.getElementById("container1");
      let newClassName = "currentBets";
      let oldClassName = "oldBets";
      cloneColorDiv(originalNode, refNode, oldClassName, newClassName);


      //Cambia div principal y cada uno de los círculos      
      let betColorsArray = Array.from(betColors);
      for (let i = 4; i < 8; i++) {
        betColorsArray[i].className = "oldBetColor";
      }

      //Establecemos el color inicial en la fila clonada
      for (let i = 0; i < 4; i++) {
        betColorsArray[i].style.backgroundColor = "rgba(128, 128, 128, 0.623)";
        betColorsArray[i].setAttribute("data-state", "empty");
      }

      //Clona y agrega nueva barra de bolas negras y blancas
      let originalNode2 = document.getElementById("solution");
      let balls = document.getElementsByClassName("currentBalls");
      let refNode2 = document.getElementById("container2");
      let newClassName2 = "currentSolution";
      let oldClassName2 = "oldSolution";
      cloneColorDiv(originalNode2, refNode2, oldClassName2, newClassName2);

      //Cambia div principal y cada uno de los círculos      
      let ballsArray = Array.from(balls);
      for (let i = 4; i < 8; i++) {
        ballsArray[i].className = "oldBalls";
      }

      //Establecemos el color inicial en la fila clonada
      for (let i = 0; i < 4; i++) {
        ballsArray[i].style.backgroundColor = "rgba(128, 128, 128, 0.623)";
      }

      attemptsNumber++;
      attemptsDiv.textContent = `Intento ${attemptsNumber}`;
      //Volvemos a llamar al método para que cargue los nuevos valores
      deleteColor();
    });
  });
}
