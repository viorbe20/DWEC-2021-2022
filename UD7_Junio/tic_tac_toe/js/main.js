/**
 * Tic Tac Toe
 * @date Abril 2022
 * @author Virginia Ordoño Bernier
 */

$(function () {
  let index = 0;
  const board = [Array("", "", ""), Array("", "", ""), Array("", "", "")];

  /**
   * Devuelve la figura que corresponde según el turno
   */
  getFigure = function () {
    index = 1 - index;
    const figures = ["O", "X"];
    return figures[index];
  };

  /**
   * Comprueba el 3 en raya
   */
  getWinner = function (combination) {
    let winner;
    let result = false;
    if (combination.filter((figure) => figure == "O").length == 3) {
      winner = "O";
      finishGame(winner);
      let result = true;
    } else if (combination.filter((figure) => figure == "X").length == 3) {
      winner = "X";
      finishGame(winner);
      let result = true;
    }
  };

  /**
   * Si hay ganador, cambia el estilo y deshabilita casillas
   */
  finishGame = function (winner) {
    $("#result").css("visibility", "visible");
    $("#winner").html("Ganador: " + winner);
    $("#container").each(function (index) {
      $(this).off("click");
    });
  };

  //Recorre casillas y permite colocar figuras
  $("#container").each(function (index) {
    $(this).click(function (e) {
      //Si está vacío permite colocar figura
      if (e.target.dataset.figure == "empty") {
        e.target.innerText = getFigure();
        e.target.dataset.figure = e.target.innerText;
        //Indica turno de jugador en pantalla
        $("#shift").html("Turno de " + (e.target.innerText == "X" ? "O" : "X"));

        //Metemos la combinación en la array
        board[e.target.id.slice(3, 4)][e.target.id.slice(4, 5)] =
          e.target.innerText;

        //Comprueba aciertos de todas las combinaciones posibles
        //Horizontal
        getWinner(board[0]);
        getWinner(board[1]);
        getWinner(board[2]);

        //Vertical
        let arrayV1 = Array.from(
          board[0][0].concat(board[1][0]).concat(board[2][0])
        );
        getWinner(arrayV1);
        let arrayV2 = Array.from(
          board[0][1].concat(board[1][1]).concat(board[2][1])
        );
        getWinner(arrayV2);
        let arrayV3 = Array.from(
          board[0][2].concat(board[1][2]).concat(board[2][2])
        );
        getWinner(arrayV3);

        //Diagonales
        let arrayD1 = Array.from(
          board[0][0].concat(board[1][1]).concat(board[2][2])
        );
        getWinner(arrayD1);
        let arrayD2 = Array.from(
          board[2][0].concat(board[1][1]).concat(board[0][2])
        );
        getWinner(arrayD2);
      } else {
        //Da estilo a la figura
        $("#" + e.target.id).animate({ fontSize: "60px" });
        $("#" + e.target.id).animate({ fontSize: "120px" });
      }

      //Si están todas llenas y no hay ganador, muestra mensaje de empate
      let fullBoxes = 0;
      $(".box").each(function (index, e) {
        if ($(this).attr("data-figure") != "empty") {
          fullBoxes++;
          console.log(fullBoxes);
        }

        if (fullBoxes == 9) {
          $("#result").css("visibility", "visible");
          $("#winner").html("Empate");
          $("#container").each(function (index) {
            $(this).off("click");
          });
        }
      });
    });
  });

  //Botón reiniciar. Un evento, dos selectores
  $(document).ready(function () {
    $("#restart, #restartBtn").click(function () {
      location.reload();
    });
  });
});