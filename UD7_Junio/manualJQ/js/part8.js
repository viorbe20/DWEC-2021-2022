$(function () {
  //DEMO 1 (pg 60)
  /**
   * animate()
   */
  $("#animar").click(function (e) {
    e.preventDefault();
    $("h1").animate({
      "border-bottom-width": "20",
      "font-size": "25pt",
    });
  });
  $("#restaurar").click(function (e) {
    e.preventDefault();
    $("h1").css({
      "border-bottom-width": "1",
      "font-size": "15pt",
    });
  });

  //DEMO 2 (pg 97)
  /**
   * fade()
   */
  $("#ocultartoda").click(function (e) {
    $("#milista").fadeOut();
  });
  $("#mostrartoda").click(function (e) {
    $("#milista").fadeIn();
  });
  $("#ocultarmostrar").click(function (e) {
    $("#milista").fadeOut(function () {
      $(this).fadeIn();
    });
  });
  $("#selopacidad").change(function (e) {
    let opacidad_deseada = e.target.options[e.target.selectedIndex].value;
    $("h1").fadeTo(1000, opacidad_deseada);
  });
  $("#pororden").click(function (e) {
    let opacidad_deseada = $("#selopacidad").attr("value");
    $("#e1").fadeTo(500, opacidad_deseada, function () {
      $("#e2").fadeTo(500, opacidad_deseada, function () {
        $("#e3").fadeTo(500, opacidad_deseada);
      });
    });
  });

  //DEMO 3
  /**
   * queue
   */
  function muestraRestantesCola() {
    let numFuncionesEnCola = $("#capaP8D3").queue().length;
    $("#mensajeD3").text(
      "En el momento de hacer el último clic en los botones hay " +
        numFuncionesEnCola +
        " funciones de efectos en cola"
    );
  }

  $("#botonfade").click(function () {
    capa = $("#capaP8D3");
    capa.fadeOut(500);
    capa.fadeIn(500);
    muestraRestantesCola();
  });

  $("#botonslide").click(function () {
    capa = $("#capaP8D3");
    capa.slideUp(500);
    capa.slideDown(500);
    muestraRestantesCola();
  });

  $("#botontamanocolaD3").click(function () {
    muestraRestantesCola();
  });

  //DEMO 4 (pg 110)
  function colaEfectos() {
    capa = $("#capaP8D4");
    capa.slideUp(1000);
    capa.delay(2000);
    capa.slideDown(1000);
    capa.fadeTo(1500, 0.3).delay(3000).fadeTo(500, 1);
    capa.delay(500);
    capa.animate(
      {
        "font-size": "+=0.5em",
      },
      1000,
      colaEfectos
    );
    //alert (capa.queue().length)
  }
  colaEfectos();

  //DEMO 5
  function muestraRestantesCola() {
    let funcionesEnCola = $("#capaP8D5").queue("micola").length;
    let funcionesEnColaPredeterminada = $("#capaP8D5").queue().length;
    //console.log("Cola 'micola':", $("#micapa").queue("micola"));
    let textoMostrar =
      "Hay " + funcionesEnCola + " funciones de efectos en la cola 'micola'";
    textoMostrar +=
      "<br>Hay " +
      funcionesEnColaPredeterminada +
      " funciones de efectos en la cola por defecto";
    $("#mensajeD5").html(textoMostrar);
  }
  function cambiarColores() {
    capa = $("#capaP8D5");
    capa.delay(1000, "micola");
    capa.queue("micola", function (sig) {
      $(this).css({
        "background-color": "#339",
      });
      sig();
    });
    capa.delay(1000, "micola");
    capa.queue("micola", function (sig) {
      $(this).css({
        "background-color": "#933",
      });
      sig();
    });
    capa.delay(1000, "micola");
    capa.queue("micola", function (sig) {
      $(this).css({
        "background-color": "#393",
      });
      cambiarColores();
    });
    capa.dequeue("micola");
  }
  function ocultaMuestra() {
    capa = $("#capaP8D5");
    capa.fadeTo(500, 0.3);
    capa.fadeTo(1200, 1);
    capa.animate(
      {
        left: "350px",
      },
      1200
    );

    capa.animate(
      {
        left: "100px",
      },
      1000,
      ocultaMuestra
    );
  }

  cambiarColores();
  ocultaMuestra();
  $("#botontamanocolaD5").click(function () {
    muestraRestantesCola();
  });
});
