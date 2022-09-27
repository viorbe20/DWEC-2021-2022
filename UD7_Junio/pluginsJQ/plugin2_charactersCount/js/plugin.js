jQuery.fn.charactersCount = function () {
  this.each(function () {
    elem = $(this);

    //Inserta div con cont
    let cont = $(
      "<div>Caracteres: " + ($.trim(elem.val())).length + "</div>"
    );
    elem.after(cont);
    //Guarda una referencia al DIV en los datos del objeto jQuery
    elem.data("data-cont", cont);

    //Actualiza cont cuando se levanta la tecla
    elem.keyup(function () {
      let elem = $(this);
      let campocont = elem.data("data-cont");
      campocont.text("Caracteres: " + ($.trim(elem.val())).length);
    });
  });
  return this;
};