//DEMO 2 (pg 78)
//Plugin cuentaCaracteres
jQuery.fn.cuentaCaracteres = function() {
  //para cada uno de los elementos del objeto jQuery
  this.each(function(){
      //creo una variable elem con el elemento actual, suponemos un textarea
      elem = $(this);
      //creo un elemento DIV sobre la marcha
      var contador = $('<div>Contador caracteres: ' + elem.attr("value").length + '</div>');
      //inserto el DIV después del elemento textarea
      elem.after(contador);
      //guardo una referencia al elemento DIV en los datos del objeto jQuery
      elem.data("campocontador", contador);
      //creo un evento keyup para este elemento actual
      elem.keyup(function(){
          //creo una variable elem con el elemento actual, suponemos un textarea
          let elem = $(this);
          //recupero el objeto que tiene el elemento DIV contador asociado al textarea
          let campocontador = elem.data("campocontador");
          //modifico el texto del contador, para actualizarlo con el número de caracteres escritos
          campocontador.text('Contador caracteres: ' + elem.attr("value").length);
      });
  });
  //siempre tengo que devolver this
  return this;
};

$(function () {
  //DEMO 1 (pg 77)
  /**
   * plugin 1
   */
  jQuery.fn.parpadea = function () {
    this.each(function () {
      elem = $(this);
      elem.fadeOut(250, function () {
        $(this).fadeIn(250);
      });
    });
    return this;
  };

  //parpadean los elementos de class CSS "parpadear"
  $(".parpadear").parpadea();
  //añado un evento clic para un botón, para que al pulsarlo parpadeen los elementos de clase
  parpadear;
  $("#botonparpadear").click(function () {
    $(".parpadear").parpadea();
  });

  //demo 2
  $("textarea").cuentaCaracteres();
});