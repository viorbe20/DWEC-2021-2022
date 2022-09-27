$(function () {
  //DEMO 1 (pg 49)
  /**
   * Lectura del atributo.
   * Recorrido con each para recuperar todos los valores de los atributos title de los enlaces que haya en la página.
   */
  $("#btnDemo1").click(function (e) {
    $("a").each(function (i) {
      let titulo = $(this).attr("title");
      alert("Atributo title del enlace " + i + ": " + titulo);
    });
  });

  //DEMO 2 (pg 50)
  /**
   * Asignar un valor de atributo procesado por una función
   * mirar attr -value
   */
  $("input.fecha").val(function (indiceArray) {
    //indiceArray tiene el índice de este elemento en el objeto jQuery
    let f = new Date();
    return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
  });

  //DEMO 3 ()
  $("#boton").click(function (i) {
    $("td").removeProp("hola");
    //$("td").removeAttr("hola");
  });
});
