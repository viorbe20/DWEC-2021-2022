$(function () {
  //DEMO 1 (pg 26)
  /**
   * 2 inputs a los que se le aplica el mismo evento de una vez.
   * $ = jQuery
   */
  //const elem1 = $("#elem1");
  $("#elem1").css("background-color", "#ff9999");
  //let divs = $("div");
  $("div").css("font-size", "18pt");

  //DEMO 2 (pg 27)
  /**
   * Enviar un string con un html.
   * Uso de appendTo()
   */
  let nuevosElementos = $(
    "<div>Esto es un &lt;div&gt; colocado a continuación de la &lt;ul&gt; </b>.<h1>Esto es un h1</h1></div>"
  );
  nuevosElementos.appendTo("#ulDemo2");
  // Igual: ("#ulDemo2").append(nuevosElementos);???

  //DEMO3 (pg 28)
  /**
   * Función JQ pasando otra función
   * Uso de objeto literal
   */
  $("b").css({
    "background-color": "#ff8833",
    "color": "#fff"
  });

  //DEMO 4 (pg 29)
  /**
   * Uso de each()
   * Pintamos pares de un color e impares de otros
   */
  $(".demo4").each(function (i) {
    if (i % 2 == 0) {
      $(this).css("background-color", "yellow");
    } else {
      $(this).css("background-color", "violet");
    }
  });

  //DEMO 5 (pg 31)
  /**
   * Damos color a cada div en función del color escrito
   * Excepciones:
   * => Si el texto del DIV es "white", entonces no queremos hacer nada con ese elemento.
   * => Si el texto del DIV es "nada", entonces detendremos el bucle y dejaremos de colorear los siguientes elementos.
   */
  $(".demo5").each(function (i) {
    const $elemento = $(this);
    if ($elemento.html() == "white") return true;
    if ($elemento.html() == "nada") return false;
    $elemento.css("color", $elemento.html());
  });

  //DEMO 6 (pg 32)
  /**
   * Método size(). para obtener el número de elementos seleccionados
   */
  let d6 = $(".demo6");
  let demo6Div = $("#demo6Div");
  $("#demo6Btn").click(function () {
    demo6Div.html("Hay " + d6.length).css("color", "purple");
  });

  //DEMO 7 (pg 32)
  /**
     * Método length(). obtener el número de elementos de la página
        que hemos seleccionado.
     */

  let elem = $(".mitexto");

  $("#demo7Btn").click(function () {
    $("#demo7Div")
      .html("Hay " + elem.length + " párrafos.")
      .css("color", "purple");
  });

  //DEMO 8 (pg 33)
  /**
   * data(). Este método del objeto jQuery sirve tanto para guardar un dato
   * en un elemento como para consultarlo. Según el número
   * de parámetros que reciba, realiza una u otra acción.
   */

  $("#demo8Btn").click(function () {
    $("#demo8Div").data("midato", "mivalor");
    alert($("#demo8Div").data("midato"));
  });

  //DEMO 9 (pg 34)
  /**
   * removeData(). Este método sirve para eliminar un dato de un elemento y su funcionamiento es tan simple como enviar por parámetro
   * el dato que se quiere eliminar del elemento.
   */
  $("#guardar").click(function (evento) {
    const valor = document.formul.valor.value;
    $("#division").data("midato", valor);
    $("#division").html(
      'He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' +
        valor +
        '"'
    );
  });

  $("#leer").click(function (evento) {
    valor = $("#division").data("midato");
    $("#division").html(
      'En este elemento (id="division") leo un dato llamado "midato" con el valor "' +
        valor +
        '"'
    );
  });

  $("#eliminar").click(function (evento) {
    $("#division").removeData("midato");
    $("#division").html(
      'Acabo de eliminar del elemento (id="division") el dato llamado "midato"'
    );
  });

  //DEMO 10 (pg 37)
  /**
   * removeData()
   */
  $("a").click(function (e) {
    e.preventDefault();
    let valorAlmacenado = $(this).data("midato");
    $("#mensaje").html(
      "En el enlace <b>" +
        $(this).attr("id") +
        "</b> tiene el dato 'midato' como " +
        valorAlmacenado
    );
  });

  $("#guardar").click(function (e) {
    $("a").data("midato", "mivalor");
    $("#mensaje").html(
      'He guardado en todos los enlaces un dato llamado "midato" con el valor "mivalor"'
    );
  });

  $("#guardarenlace1").click(function (e) {
    $("#enlace1").data("midato", "otro valor");
    $("#mensaje").html(
      'He guardado en el enlace1 un dato llamado "midato" con el valor "otro valor"'
    );
  });

  //DEMO 11
  $("a.enlacealmacenar").click(function (evento) {
    evento.preventDefault();
    let valorAlmacenado = $(this).data("midato");
    let mensaje =
      "En el enlace <b>" +
      $(this).attr("id") +
      "</b> tiene el dato 'midato' como " +
      valorAlmacenado;
    let valorAlmacenado2 = $(this).data("miobjeto");
    mensaje +=
      "<br>Además, he leído un dato llamado 'miobjeto' con valor " +
      valorAlmacenado2;

    $("#mensaje").html(mensaje);
  });

  $("#guardar").click(function (evento) {
    console.log("si");
    evento.preventDefault();
    $("a").data("midato", "mivalor");
    $("#mensaje").html(
      'He guardado en todos los enlaces un dato llamado "midato" con el valor "mivalor"'
    );
  });

  $("#guardarenlace1").click(function (evento) {
    evento.preventDefault();
    $("#enlace1").data("midato", "otro valor");
    $("#mensaje").html(
      'He guardado en el enlace1 un dato llamado "midato" con el valor "otro valor"'
    );
  });

  $("#guardarobjeto").click(function (evento) {
    evento.preventDefault();
    $("a").data("miobjeto", $("#capapruebas"));
    $("#mensaje").html(
      'He guardado todos los enlaces un dato llamado "miobjeto" con el valor un objeto que es el objeto jquery de seleccionar la capa con id "capapruebas"'
    );
  });

  $("#operarobjetoenlace1").click(function (evento) {
    evento.preventDefault();
    $("#enlace1")
      .data("miobjeto")
      .html(
        "cambio el html del objeto que hay en el dato 'miobjeto' del 'enlace1'"
      );
  });

  $("#operarobjetoenlace2").click(function (evento) {
    evento.preventDefault();
    $("#mensaje").html(
      "Este es el HTML que hay en el objeto asociado a enlace2 en el dato 'miobjeto':<br>" +
        $("#enlace2").data("miobjeto").html()
    );
  });
});
