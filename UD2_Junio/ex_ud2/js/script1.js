{
  //Define las funciones porDefecto y muestraResultado

  /**
   * @param {Object} [alumno] - El alumno del que parte la información
   * @returns {Object} alumno
   */
  const porDefecto = function (alumno) {
    //Logical Nullish Assigment Operator
    //Solo asigna si en la izquierda hay nullish
    alumno ??= {}; //nullisn assigment del objeto entero. Si es nullish, se crea. 
    alumno.nombre ??= "Severo",
    alumno.apellido1 ??= "Ochoa",
    alumno.apellido2 ??= "de Albornoz",
    alumno.mujer ??= false,
    alumno.curso ??= "2DAW",
    alumno.ies ??= "Gran Capitán",
    alumno.JS ??= {}; //nullisn assigment del objeto entero. Si es nullish, se crea.
    alumno.JS.opinion ??= "débilmente tipado";
                    
    return alumno;
  };

  //Define las funciones porDefecto y muestraResultado
  /**
   * Si el parámetro es nulllish, carga el objeto por defecto del otro método
   * @param {*} student 
   */
  const muestraResultado = function (student) {

    let alumno = porDefecto(student);

    console.log(`Mi nombre es ${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2}.
    soy ${(alumno.mujer) ? "alumna":"alumno"} de 2DAW del IES Gran Capitán.
    Sobre la profesora de DWEC no opino,
    pero sobre JS, creo que es un lenguaje ${alumno.JS.opinion}`); 
  };

  document.addEventListener("DOMContentLoaded", function () {
    const virginiaOrdoño = {
      nombre: "Virginia",
      apellido1: "Ordoño",
      apellido2: "Bernier",
      mujer: true,
      JS: {
        opinion: "de programación",
      },
    };

    //Invoca a muestraResultado con la variable "nombreApellido1"
    muestraResultado(virginiaOrdoño);

    //Invoca a muestraResultado sin parámetros
    muestraResultado();
  });
}