/**
 * @file Tarea 3.2. Listado String y RegExp
 * En JavaScript implementa estas funciones. 
 * Utiliza el mismo formulario para E/S de los textos. 
 * Cada caja de texto con una función distinta la salida debe ir en un elemento adyacente. 
 * Cuida la accesibilidad/usabilidad.
 * @author Virginia Ordoño Bernier
 */

{

   /**
    * Capitaliza la primera letra de cada palabra
    * @param {string} param 
    * @returns {string}
    */
    function capitaliseFirstLetter(param) {
       //^ => asserts position at start of a line
       //\w => matches any word character (equivalent to [a-zA-Z0-9_])
       //| => es un or
      //\s => matches any whitespace character (equivalent to [\r\n\t\f\v ])
      //anterior (/^\w|\s\w/g)

      return param.replace(/\b\w/g, function (letter) {
         return letter.toUpperCase();
     })
   }

   /**
    * Convierte mayúsculas en minúsculas y viceversa
    * @param {string} param 
    * @returns {string}
    */
    function reverseAllLetters(param) {
      let result = "";
      for (let i = 0; i <= param.length; i++) {
       
        let element = param.charAt(i);
         //Hace la conversión y lo mete en una variable.
        element.match(/[A-ZÁ-ÚÜ]/g) ? result = result.concat(element.toLowerCase()) :result = result.concat(element.toUpperCase()) ;
      
      }
      return result;
      }

   /**
    * Convierte todo a camelcase
    * @param {string} param 
    * @returns {string}
    */
   function convertToCamelCase(param) {
      //Convertimos todas las letras en minúsculas
      let lowLetters = param.toLowerCase();
      //Convertimos todas las primeras letras en mayúsculas
      let upperFirstLetters =  lowLetters.replace(/^\w|\s\w/g, function (letter) {
         return letter.toUpperCase();
      })
      //Quitamos espacios en blanco
      let noSpaces = upperFirstLetters.replace(/ /g, "");
      //Convertimos la primera letra en minúscula
      let finalText =  noSpaces.replace(/^\w|\s\w/g, function (letter) {
         return letter.toLowerCase();
      })
   
      return finalText;
   }

   /**
    * Elimina el camelcase
    * @param {string} param 
    * @returns {string}
    */
      function deleteCamelCase(param) {
         let result = "";

         for (let i = 0; i <= param.length; i++) {
          
           let element = param.charAt(i);
            //1. Recorre el string y si encuentra alguna mayúscula le añade un espacio delante
            //2. Pasa el resultado a minúscula
           element.match(/[A-ZÁ-ÚÜ]/g) ?  result = result.concat(element.padStart(2, " ")).toLowerCase() : result = result.concat(element).toLowerCase();
         
         }
        
         return result;
      }

   /**
    * Comprueba si una cadena empieza con la que otra termina
    * @param {string} param1 
    * @param {string} param2 
    * @returns {string}
    */
       function endsWith(param1, param2) {
         let result = "";

      //A través del índice, obtenemos el rango de la última palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let lastWordIndex = param1.lastIndexOf(" ");
      let lastWord = param1.slice(lastWordIndex).trim().toLowerCase(); 

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let firstWordIndex = param2.indexOf(" ");
      let firstWord = param2.slice(0, firstWordIndex).trim().toLowerCase();
      console.log(firstWord);

      //Comparamos. Si da 0 son iguales, si no no.
      if (lastWord.localeCompare(firstWord) == 0) {
        result = "Es la misma palabra";
      } else {
        result = "No es la misma palabra";
      }

     return result;
      }

   /**
    * Comprueba si una cadena empieza con la que otra termina
    * @param {string} param1 
    * @param {string} param2 
    * @returns {string}
    */
    function startsWith(param1, param2) {
      let result = "";

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let firstWordIndex = param1.indexOf(" ");
      let firstWord1 = param1.slice(0, firstWordIndex).trim().toLowerCase(); 
      console.log(firstWord1);

      //A través del índice, obtenemos el rango de la primera palabra
      //Quitamos espacios en los lados y pasamos a minúscula para que no dé error en caso de mayúsculas
      let secondWordIndex = param2.indexOf(" ");
      let firstWord2 = param2.slice(0, secondWordIndex).trim().toLowerCase();
      console.log(firstWord2);

      //Comparamos. Si da 0 son iguaes, si no no.
      if (firstWord1.localeCompare(firstWord2) == 0) {
        result = "Es la misma palabra.";
      } else {
        result = "No es la misma palabra.";
      }

     return result;
   }

   /**
    * Valida dni
    * @param {string} param 
    * @returns {string}
    */
   function dniValidation(param){
      let result='';

      if (/^\d{8}[a-zA-Z]$/.test(param)) {
      //Separamos números y letra
      let letterDNI = param.substring(8, 9).toUpperCase();
      let numbersDNI = parseInt(param.substring(0, 8));
      
      //calculamos la letra correspondiente al número
      let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      let correctLetter = letters[numbersDNI % 23];
      
      //Hacemos las comprobaciones correspondientes
      if(letterDNI == correctLetter){
        result = 'DNI correcto.';
      } else {
        result = "La letra no es correcta.";
      
      }
      } else {
        result = "El formato del DNI no es correcto."
      }
     return result;            
   }

/**
 * Valida matrícula
 * @param {string} param 
 * @returns {string}
 */
    function licensePlateValidation(param){
      let result='';
      //4 dígitos, guión o espacio o nada, 3 no caracteres quitando vocales y ñ y q y _
      if (/\d{4}(-||\s)([^\WaeiouAEIOUáéíóúüqQñÑ_]){3}/.test(param)) {
        result = "La matrícula es correcta.";
      } else {
        result = "El formato de la matrícula no es correcto."
      }
     return result;          
   }

/**
 * Valida código postal
 * @param {string} param 
 * @returns {string}
 */
   function postalCodeValidation(param){
     let result='';
     //?: => No capturamos dos grupos: dos dígitos primero 0-4 y segundo 0-9 o 5 y 0-9
     //luego 3 dígitos de 0 a 9
     //3 dígitos entre 1 y 9
     ///^(?:[0-4][0-9]|5[0-2])[0-9]{3}$/ anterior
     if (/\b(50|51|52|[1-4][0-9]|0[1-9])(\d\d[1-9]|\d[1-9]\d|[1-9])/gi.test(param)) {
       result = "El código postal es correcto.";
     } else {
       result = "El formato del código postal no es correcto."
     }
    return result;          
   }

   /**
 * Valida dirección mac
 * @param {string} param 
 * @returns {string}
 */
    function macValidation(param){
      let result='';
      //seis grupos de dos dígitos hexadecimales, separados por guiones o dos puntos
      if (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(param)) {
        result = "La dirección MAC es correcta.";
      } else {
        result = "El formato de la dirección MAC no es correcto."
      }
     return result;          
   }

      /**
 * Valida dirección ip
 * @param {string} param 
 * @returns {string}
 */
       function ipValidation(param){
         let result='';
         // conjunto de cuatro números, por ejemplo, 192.158.1.38. Cada número del conjunto puede variar de 0 a 255. 
         //antiguo /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
         /^\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b$/g;
         if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(param)) {
           result = "La dirección IP es correcta.";
         } else {
           result = "El formato de la dirección IP no es correcto."
         }
        return result;          
      }

   document.addEventListener('DOMContentLoaded', function(){
      let capitalise = document.getElementById("capitalise");
      let reverse = document.getElementById("reverse");
      let camelCase = document.getElementById("camelCase");
      let noCamelCase = document.getElementById("noCamelCase");
      let endsWith1 = document.getElementById("endsWith1");
      let endsWith2 = document.getElementById("endsWith2");
      let startsWith1 = document.getElementById("startsWith1");
      let startsWith2 = document.getElementById("startsWith2");
      let dni = document.getElementById('dni');
      let licensePlate = document.getElementById("licensePlate");
      let postalCode = document.getElementById("postalCode");
      let mac = document.getElementById("mac");
      let ip = document.getElementById("ip");

      //Capitaliza primera letra
      capitalise.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultCapitalise").innerText = capitaliseFirstLetter(capitalise.value);
         });

      //Capitaliza primera letra
      reverse.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultReverse").innerText = reverseAllLetters(reverse.value);
         });

      //Convertir a camelCase
      camelCase.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultCamelCase").innerText = convertToCamelCase(camelCase.value);
         }); 
         
      //Elimina el camelCase
      noCamelCase.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultNoCamelCase").innerText = deleteCamelCase(noCamelCase.value);
         }); 
         
      //Comprueba si una cadena empieza con la que otra termina
      endsWith2.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultEndsWith").innerText = endsWith(endsWith1.value, endsWith2.value);
         });

      //Comprueba si una cadena empieza con la que otra empieza
      startsWith2.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultStartsWith").innerText = startsWith(startsWith1.value, startsWith2.value);
         });
      
      //Comprueba si un dni es correcto
      dni.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultDni").innerText = dniValidation(dni.value);
         });
      
      //Comprueba si una matrícula es correcta
      licensePlate.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultLicensePlate").innerText = licensePlateValidation(licensePlate.value);
         });

      //Comprueba si un código postal es correcto
      postalCode.addEventListener("blur", function(){
        //Mostramos resultado          
        document.getElementById("resultPostalCode").innerText = postalCodeValidation(postalCode.value);
        });

      //Comprueba si una dirección mac es correcta
      mac.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultMac").innerText = macValidation(mac.value);
         });

       //Comprueba si una dirección mac es correcta
       ip.addEventListener("blur", function(){
         //Mostramos resultado          
         document.getElementById("resultIp").innerText = ipValidation(ip.value);
         });

   });
}