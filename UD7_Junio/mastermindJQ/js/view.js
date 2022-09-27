/**
 * Mastermind con jQuery
 * @date Abril 2022
 * @author Virginia Ordoño Bernier
 */

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
 * Convierte el código rgb a string
 * @param {*} rgb
 * @returns
 */
const getColorStringFromRgb = function (rgb) {
  let colorName;
  switch (rgb) {
    case "rgb(255, 255, 255)":
      return (colorName = "white");
      break;
    case "rgb(0, 0, 0)":
      return (colorName = "black");
      break;
    case "rgb(165, 42, 42)":
      return (colorName = "brown");
      break;
    case "rgb(255, 0, 0)":
      return (colorName = "red");
      break;
    case "rgb(255, 165, 0)":
      return (colorName = "orange");
      break;
    case "rgb(255, 255, 0)":
      return (colorName = "yellow");
      break;
    case "rgb(0, 0, 255)":
      return (colorName = "blue");
      break;
    case "rgb(0, 128, 0)":
      return (colorName = "green");
      break;
  }

  return colorName;
};

/**
 * Clona el div de colores y cambia los atributos correspondientes
 * @param {*} $originalNode
 * @param {*} newId
 * @param {*} oldId
 * @param {*} oldBallClass
 */
const cloneNode = function ($originalNode, newId, oldId, oldBallClass) {
  let $clonedNode = $originalNode.clone(true);
  $clonedNode.insertBefore($originalNode);
  $("#" + newId)
    .children("div")
    .css("background-color", "rgba(128, 128, 128, 0.623)")
    .attr("data-color", "empty");

  //Cambios en el div antiguo
  $originalNode.attr("id", oldId);
  $("#" + oldId)
    .children("div")
    .removeClass();
  $("#" + oldId)
    .children("div")
    .addClass(oldBallClass);
  $("." + oldBallClass).off("click");
};

$(function () {
  let $selectedColor;
  let attemptsNumber = 0;

  //Recorre paleta de colores. Al hacer click pinta en el primer círculo que encuentra vacío
  $(".colors").click(function (e) {
    $(this).fadeOut(100).fadeIn(100);
    $selectedColor = $(this).attr("id");
    //console.log($selectedColor);

    //Colorea el primer círculo disponible con el color seleccionado
    $('.currentBetColor[data-color="empty"]')
      .first()
      .css("background-color", $selectedColor)
      .attr("data-color", "full");
  });

  //Quita el color con un click
  $(".currentBetColor").click(function () {
    if ($(this).attr("data-color") == "full") {
      $(this)
        .css("background-color", "rgba(128, 128, 128, 0.623)")
        .attr("data-color", "empty");
    }
  });

  //Comprueba aciertos solo si los 4 círculos están rellenos
  $("#btn").click(function () {
    if ($('.currentBetColor[data-color="full"]').length == 4) {
      const chosenColors = [];
      let correctBalls = [];
      $(".currentBetColor").each(function () {
        //Colores recibidos en rgb lo pasamos a string
        chosenColors.push(
          getColorStringFromRgb($(this).css("background-color"))
        );
      });
      correctBalls = mastermind.comprobarCoincidencias(chosenColors);
      $('.currentBalls[id="ball1"]').css("background-color", correctBalls[0]);
      $('.currentBalls[id="ball2"]').css("background-color", correctBalls[1]);
      $('.currentBalls[id="ball3"]').css("background-color", correctBalls[2]);
      $('.currentBalls[id="ball4"]').css("background-color", correctBalls[3]);

      //Si se aciertan o no
      if (arrayEquals(correctBalls, ["black", "black", "black", "black"])) {
        attemptsNumber++;
        $("label").html(`Intentos: ${attemptsNumber}`);
        $(".currentBetColor").off("click");
        $("#winner").css("visibility", "visible");
        $("#reload").click(function (e) { 
          location.reload();
          
        });
      } else {
        //Cambios en colores de la apuesta
        let $originalNode = $("#currentBets");
        let newId = "currentBets";
        let oldId = "oldBets";
        let oldBallClass = "oldBetColor";
        cloneNode($originalNode, newId, oldId, oldBallClass);

        //Cambios en bolas de comprobación
        let $originalNode2 = $("#currentSolution");
        let newId2 = "currentSolution";
        let oldId2 = "oldSolution";
        let oldBallClass2 = "oldBalls";
        cloneNode($originalNode2, newId2, oldId2, oldBallClass2);
      }
    }
    attemptsNumber++;
    $("label").html(`Intentos: ${attemptsNumber}`);
  });
});