//Invoca la función creaCopia y pásale ambos arrays como argumentos
//La función creaCopia devuelve un nuevo array con los elementos de los dos arrays. 
//Para ello usa los operadores rest y spread
const creaCopia = function (...param) {
    const mixed = [...param[0], ...param[1]];
    //console.log(mixed);
    return mixed;
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const nullishValues = [undefined, null];
    const falsyValues = [0, -0, 0n, "", "", ``, false];
  
    //Recorre el nuevo array e indica el tipo de dato que es cada valor. 
    //Si no es un valor primitivo indícalo con NO ES PRIMITIVO
    for (const item of creaCopia(nullishValues, falsyValues)) {
      if ((typeof item == "object") || (typeof item == "function" )) {
        console.log("No es primitivo");
      } else {
        console.log(`Es ${typeof item}`);
      }
    }
  });
  