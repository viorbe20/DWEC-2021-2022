/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/02
 * @description Te ha llegado una carta con todos los regalos que debes preparar.
 * El tema es que es una cadena de texto y es muy difícil de leer.
 * ¡Menos mal que han puesto cada regalo separado por espacio!
 *  (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta).
 * Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation,
 * que significa que está tachado y no se tiene que contar.
 * Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
 */

{
  let listGifts = function (letter) {
    const a_gifts = [];
    let gift = "";

    //Recorremos cadena
    cont = 0;
    while (cont < letter.length) {
      //Metemos cada regalo en una variable
      if (
        letter.charAt(cont).match(/[a-zA-Zá-úÁ-Úü]/) ||
        letter.charAt(cont) == "_"
      ) {
        gift += letter.charAt(cont);
      } else {
        //Agregamos los regalos a un array
        a_gifts.push(gift);
        gift = "";
      }

      //Agregamos el último regalo
      if (cont == letter.length - 1) {
        a_gifts.push(gift);
      }
      cont++;
    }

    //Buscamos los regalos que comienzan por _ y los eliminamos
    for (let index in a_gifts) {
      if (a_gifts[index].startsWith("_")) {
        a_gifts.splice(index, 1);
      }
    }

    //Contamos cantidad de cada uno de los regalos
    const result = {};
    a_gifts.forEach((e) => (result[e] = result[e] + 1 || 1));
    return result;
  };

  document.addEventListener("DOMContentLoaded", function () {
    const carta = "bici coche balón _playstation bici coche peluche";
    console.log(listGifts(carta));
  });
}
