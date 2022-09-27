$(function () {
  //DEMO 1 (pg 60)
  /**
   * El evento doble-clic se produce cuando se realizan dos clic seguidos sobre un mismo elemento.
   */
  let numClics = 0;
  let numDobleClics = 0;
  $("#micapa").dblclick(function (e) {
    numDobleClics++;
    $("#mensaje").html("Doble Clic " + numDobleClics);
  });

  $("#micapa").click(function (e) {
    numClics++;
    $("#mensaje").html("Clic " + numClics);
  });

  //DEMO 2 (pg 65)
  /**
   * mouseenter() mouseleave()
   * Mejor un objeto literal para no hacer 3 encadenamientos de css()
   */
  // $("#elemento1").mouseenter(function (e) {
  //   $("#tip1").css("left", e.pageX + 5);
  //   $("#tip1").css("top", e.pageY + 5);
  //   $("#tip1").css("display", "block");
  // });
  $("#elemento1").mouseenter(function (e) {
    $("#tip1").css({
      left: e.pageX + 5,
      top: e.pageY + 5,
      display: block,
    });
  });

  $("#elemento1").mouseleave(function (e) {
    $("#tip1").css("display", "none");
  });

  // $("#elemento2").mouseenter(function (e) {
  //   $("#tip2").css("left", e.pageX + 5);
  //   $("#tip2").css("top", e.pageY + 5);
  //   $("#tip2").css("display", "block");
  // });

  $("#elemento2").mouseenter(function (e) {
    $("#tip2").css({
      left: e.pageX + 5,
      top: e.pageY + 5,
      display: block,
    });
  });

  $("#elemento2").mouseleave(function (e) {
    $("#tip2").css("display", "none");
  });

  //DEMO 3 (pg 67)
  /**
   *
   * Secuencia de eventos de teclado
   */
  function operaEvento(evento) {
    $("#loescrito").html(
      $("#loescrito").html() + evento.type + ": " + evento.which + ", "
    );
  }

  $(document).keypress(operaEvento);
  $(document).keydown(operaEvento);
  $(document).keyup(operaEvento);

  //DEMO 4 (pg 68)
  /**
   * keypress()
   */
  $("#mitexto").keypress(function (e) {
    e.preventDefault();
    $("#demo4").html(e.which + ": " + String.fromCharCode(e.which));
  });

  //DEMO 5 (pg 70)
  /**
   * bind(): deprecated, usa on()
   * unbind(): deprecated, usa off()
   */
  $("p").on("click mouseenter mouseleave", function (e) {
    if ($(this).css("color") != "rgb(250, 100, 0)")
      $(this).css("color", "rgb(250, 100, 0)");
    else $(this).css("color", "rgb(150, 0, 255)");
  });

  function clicAlerta() {
    alert("Has hecho clic");
  }
  $(".miclase").on("click", clicAlerta);

  $("#quitarevento").on("click", function () {
    $(".miclase").off("click", clicAlerta);
  });

  //DEMO 6 (pg 72)
  /**
   * live()
   */
  $(".verde").live("click", function (e) {
    let elem = $(this);
    if (elem.html() != "Hiciste clic!!") {
      elem.html("Hiciste clic!!");
    } else {
      elem.html("Hiciste de nuevo clic!!");
    }
  });

  $("#insertarelem").click(function (e) {
    let nuevoElemento = $(
      '<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>'
    );
    nuevoElemento.appendTo($(document.body));
  });

  $("#ponerclaseverde").click(function (e) {
    $("#noverde").addClass("verde");
  });
});
