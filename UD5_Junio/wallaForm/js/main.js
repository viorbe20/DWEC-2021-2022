/**
 * @author Virginia Ordoño Bernier
 * @date 2022
 */
{
  /**
   * Vacía span con click en input
   */
  const clearSpan = function () {
    if (this.value.trim() == "") {
      //Mensaje en correspondiente span
      this.parentNode.nextElementSibling.innerText = "";
      this.parentNode.nextElementSibling.classList.remove("error");
      this.parentNode.childNodes[1].className = "regular";
    }
  };

  /**
   * Comprueba si es texto
   */
  const isAChar = function () {
    if (!/^[a-zA-Zá-úÁ-ÚüÜñÑ\s]+$/.test(this.value.trim())) {
      this.parentNode.nextElementSibling.innerText = "Solo permite caracteres";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    } else {
      this.parentNode.childNodes[1].className = "right";
      this.parentNode.nextElementSibling.innerText = "";
      this.parentNode.nextElementSibling.className = "";
    }
  };

  const dniValidation = function () {
    let number, dniLetter, letter;
    let dniRegex = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = this.value.trim().toUpperCase();

    if (dniRegex.test(dni) === true) {
      number = dni.substr(0, dni.length - 1);
      number = number.replace("X", 0);
      number = number.replace("Y", 1);
      number = number.replace("Z", 2);
      dniLetter = dni.substr(dni.length - 1, 1);
      number = number % 23;
      letter = "TRWAGMYFPDXBNJZSQVHLCKET";
      letter = letter.substring(number, number + 1);
      if (letter != dniLetter) {
        this.parentNode.nextElementSibling.innerText =
          "La letra no se corresponde";
        this.parentNode.nextElementSibling.className = "error";
        this.parentNode.childNodes[1].className = "wrong";
      } else {
        this.parentNode.childNodes[1].className = "right";
      }
    } else {
      this.parentNode.nextElementSibling.innerText = "Formato no válido";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    }
  };

  //this.className = "wrong"; Cambia el color de la función
  const isEmpty = function () {
    if (this.value.trim() == "") {
      //Mensaje en correspondiente span
      this.parentNode.nextElementSibling.innerText =
        "Este campo no puede estar vacío";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    }
  };

  const phoneValidation = function () {
    if (
      !/^[\(]?[\+]?(\d{2,4})?[\)]?[.\s]?(\d{3})+[.\s]?(\d{3})+[.\s]?(\d{3})+$/.test(
        this.value.trim()
      )
    ) {
      //Mensaje en correspondiente span
      this.parentNode.nextElementSibling.innerText =
        "Este campo no puede estar vacío";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    } else {
      this.parentNode.nextElementSibling.innerText = "Formato no válido";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    }
  };

  const emailValidation = function () {
    if (
      !/^([a-z]+[.]?)*([a-z]+)@([a-z]+[.]?)*([a-z]+)$/.test(this.value.trim())
    ) {
      //Mensaje en correspondiente span
      this.parentNode.nextElementSibling.innerText =
        "Este campo no puede estar vacío";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    }
  };

  /**
   * Comprueba si es un dígito
   */
  const isADigit = function () {
    if (!/^-*[0-9]{1,}$/.test(this.value.trim())) {
      this.parentNode.nextElementSibling.innerText = "Solo permite dígitos";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    } else {
      this.parentNode.childNodes[1].className = "right";
      this.parentNode.nextElementSibling.innerText = "";
      this.parentNode.nextElementSibling.className = "";
    }
  };

  const isADecimal = function () {
    if (!/^[0-9]+([.][0-9]+)?$/.test(this.value.trim())) {
      this.parentNode.nextElementSibling.innerText = "Solo permite dígitos";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    } else {
      this.parentNode.childNodes[1].className = "right";
      this.parentNode.nextElementSibling.innerText = "";
      this.parentNode.nextElementSibling.className = "";
    }
  };

  const isADate = function () {
    if (!/\d{1,2}[-/]\d{1,2}[-/]\d{2,4}/.test(this.value.trim())) {
      this.parentNode.nextElementSibling.innerText = "Fecha incorrecta";
      this.parentNode.nextElementSibling.className = "error";
      this.parentNode.childNodes[1].className = "wrong";
    } else {
      this.parentNode.childNodes[1].className = "right";
      this.parentNode.nextElementSibling.innerText = "";
      this.parentNode.nextElementSibling.className = "";
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("myForm");
    const btn_fill = document.getElementById("fill");
    const btn_reset = document.getElementById("reset");
    const btn_submit = document.getElementById("submit");
    const inputs = document.querySelectorAll("input");
    const name = document.getElementById("input-name");
    const lastname = document.getElementById("input-lastname");
    const date = document.getElementById("input-date");
    const password = document.getElementById("input-password");
    const repeat = document.getElementById("input-repeat");
    const email = document.getElementById("input-email");
    const phone = document.getElementById("input-phone");
    const dni = document.getElementById("input-dni");
    const price = document.getElementById("input-price");
    const category = document.getElementById("select");
    const condition = document.getElementsByName("condition"); //rb
    const purchase = document.getElementsByClassName("purchase"); //checkbox
    const alert = document.getElementById("alert");

    inputs.forEach((e) => {
      if (e.type != "radio" || e.type != "checkbox") {
        e.addEventListener("blur", isEmpty);
        e.addEventListener("focus", clearSpan);
      }

      e.addEventListener("focus", function () {
        alert.innerText = " ";
      });

      name.addEventListener("keyup", isAChar);
      lastname.addEventListener("keyup", isAChar);
      lastname.addEventListener("keyup", isAChar);
      date.addEventListener("blur", isADate);
      dni.addEventListener("blur", dniValidation);
      email.addEventListener("blur", emailValidation);
      phone.addEventListener("keyup", isADigit);
      phone.addEventListener("blur", phoneValidation);
      price.addEventListener("blur", isADecimal);
      
      //Validation password
      repeat.addEventListener("blur", function () {
        if (password.value.trim() != "") {
          if (password.value == repeat.value) {
            this.parentNode.childNodes[1].className = "right";
            password.parentNode.childNodes[1].className = "right";
            this.parentNode.nextElementSibling.innerText = "";
            password.parentNode.nextElementSibling.innerText = "";
          } else {
            this.parentNode.childNodes[1].className = "wrong";
            password.parentNode.childNodes[1].className = "wrong";
            this.parentNode.nextElementSibling.innerText =
              "Las contraseñas no coinciden";
          }
        } else {
          this.parentNode.nextElementSibling.innerText =
            "Completa la contraseña";
        }
      });
    });

    btn_fill.addEventListener("click", function () {
      name.value = "Virginia";
      lastname.value = "Ordoño";
      password.value = "1234";
      date.value = "31/01/2022";
      password.value = "1234";
      repeat.value = "1234";
      email.value = "a20orbevi@iesgrancapitan.org";
      phone.value = "633456789";
      dni.value = "44765432A";
      price.value = "23.65";
      category.value = "Motor";
      document.getElementById("old").checked = true;
      document.getElementById("takeaway").checked = true;

      //Limpia todo
      inputs.forEach((e) => {
        e.className = "regular";
        e.parentNode.nextElementSibling.className = "regular";
        e.parentNode.nextElementSibling.innerText = "";
      });
    });

    form.addEventListener("reset", function () {
      location.reload();
    });

    form.addEventListener("submit", function () {
      inputs.forEach((e) => {
        //Valida inputs vacíos
        if (e.value == "") {
          alert.innerText = "Todos los campos deben estar rellenos";
          return;
        }
        //Valida spans vacíos
        if (e.parentNode.nextElementSibling.value != undefined) {
          alert.innerText =
            "Todos los campos deben estar debidamente completados";
          return;
        }
        console.log("sale");
      });
    });

  });
}
