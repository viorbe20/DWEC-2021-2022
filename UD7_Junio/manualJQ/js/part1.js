$(function () {
  //DEMO 1
  /**
   * 2 inputs a los que se le aplica el mismo evento de una vez.
   * Uso de selector.html: introduce texto
   */
  $(":button").click(function (e) {
    $("#capa").html("Has hecho clic en el botón " + e.target.value);
  });

  //DEMO 2
  /**
   * Un div con dos eventos diferentes: encadenamos.
   * Uso de selector.css: da estilo
   */
  $("#capa2")
    .mouseover(function () {
      $("#mensaje").css("display", "block");
    })
    .mouseout(function () {
      $("#mensaje").css("display", "none");
    });

  //DEMO 3
  /**
   * Enlace que con un evento click te lleva a otra página
   */
  $("#open-link").click(function (e) {
    e.preventDefault();
    location.href = "sample.html";
  });
  $("#back-link").click(function (e) {
    e.preventDefault();
    location.href = "part1.html";
  });

  //DEMO 4
  /**
   * Aplicar estilo con css con addClass("clase css") y removeClass("clase css")
   * El estilo en html prevalece, no poner el estilo ahí en este caso.
   */
  $("#link4")
    .mouseover(function () {
      //$("#capa4").css("background-color", "orange");
      $("#capa4").addClass("addNewColor");
    })
    .mouseout(function () {
      //$("#capa4").css("background-color", "#bdecb6");
      $("#capa4").removeClass("addNewColor");
    });

  //DEMO 5
  /**
   * Aparece un desplegable cuando se hace check.
   * no funciona con att.('checked') usar prop.('checked') i is.(:"checked")
   */
  //Podemos meter el valor en una variable. Usamos $ para saber que es de jQuery
  const $mayoria_edad = $("#mayoria_edad");
  $mayoria_edad.click(function () {
    if ($mayoria_edad.prop("checked")) {
      $("#formulariomayores").css("display", "block");
    } else {
      $("#formulariomayores").css("display", "none");
    }
  });

  //DEMO 6
  /**
   * Aparece un desplegable cuando se hace check.
   * no funciona con att.('checked') usar prop.('checked') o is.(:"checked").
   * Se usa con valores booleanos
   */
  const $capaEfectos = $("#capaefectos");
  $("#ocultar").click(function (e) {
    e.preventDefault();
    $capaEfectos.hide("slow");
  });
  $("#mostrar").click(function (e) {
    e.preventDefault();
    $capaEfectos.show(3000);
  });

  //DEMO 7
  /**
   * Pila de funciones: callbacks. Unos efectos se suceden detrás de otros.
   * Al cargar la página desaparece y tras 1000 milisegundos se vuelve a mostrar con medias establecidas
   * fadeOut(ms, function); fadeIn(ms)
   * css({objeto literal})
   */
  $capa7 = $("#capa7");
  $capa7.fadeOut(1000, function () {
    $capa7.css({ top: 300, left: 200 }).fadeIn(1000);
  });

  //DEMO 8 (pg 18)
  /**
   * load(): cargar contenido de otra página en un div.
   */
  $link8 = $("#link8");
  $link8.click(function (e) {
    e.preventDefault();
    $("#destino").load("demo8.html");
  });
});
