/**
 * @author Virginia Ordoño Bernier
 * @date Marzo 2022
 * @summary Reentrega Examen UD4-5-6. Febrero de 2022
 * @description Formulario del alumno
 */


  //carga del DOM
  document.addEventListener("DOMContentLoaded", function () {
    //let labelsArray = Array.from(document.getElementsByTagName("label"));
    let spansArray = Array.from(document.getElementsByTagName("span"));
    let inputsArray = Array.from(document.getElementsByTagName("input"));
    let resetBtn = document.getElementById("reset");
    let submitBtn = document.getElementById("submit");
    let fillBtn = document.getElementById("fill");
    let nombreInput = document.getElementById('nombreInput');
    let apellidoInput = document.getElementById('apellidoInput');
    let cursoInput = document.getElementById('cursoInput');
    let formu = document.getElementsByTagName('form')[0];

    //Cada input tendrá asociado el evento blur que mostrará el mensaje de error en su correspondiente span
    inputsArray.forEach((e) => {
      e.addEventListener("blur", function () {
        //Validación campo curso
        if (
          e.id == "cursoInput" &&
          e.value.match(/^(1|2)(asir|daw|dam)$/) == null
        ) {
          e.nextElementSibling.innerText =
            "El curso no es correcto. Inténtalo de nuevo";
        }
        //Mensaje span vacío
        if (e.value.trim.length == 0) {
          e.nextElementSibling.innerText = " Este campo no puede estar vacío.";
        }
      });

      //Borra span si hay texto
      e.addEventListener("focus", function () {
        e.nextElementSibling.innerText = "";
      });
    });

    //Botón reset borra spans
    formu.addEventListener("reset", function () {
      spansArray.forEach((e) => {
        e.innerText = "";
      });
    });

    //Botón que rellena con valores válidos
    fillBtn.addEventListener("click", function(){
      nombreInput.value = "Virginia";
      apellidoInput.value = "Ordoño Bernier";
      cursoInput.value = "2daw";  
      //Borra spans en caso que tenga info
      spansArray.forEach((e) => {
        e.innerText = "";
      });
    });

    //Procesa los datos si los spans están vacíos
    formu.addEventListener("submit", function (e) {
      //Para que no recargue la página
      e.preventDefault();
      inputsArray.forEach(e => {
        e.dispatchEvent(new Event('blur'));
        
      });

      //El evento 
      if (spansArray.every((e) => e.innerText === "")) {
        let alumno1 = new Alumno(nombreInput.value, apellidoInput.value, cursoInput.value);
        alumno1.mostrar();
      }
    });
  });