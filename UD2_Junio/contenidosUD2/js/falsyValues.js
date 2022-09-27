/**
 * 8. Falsy values
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  // Los valores falsy son aquellos con valor false en un contexto booleano.
  //Valores falsy: undefined, null, NAN, 0, -0, 0n, "", '', ``, false.
  //Para comprobar si un valor es falsy usamos método isFalsy(valor).

  //Valores falsy
  let ceroValue = 0;
  let negativeCero = -0;
  let ceroBigInt = 0n;
  let quotationMarks = "";
  let singleQuotationMarks = "";
  let backTicks = ``;
  let falseValue = false;

  //Valores truthy
  let nullValue = null;
  let undefinedValue = undefined;
  let nanValue = NaN;
  let infValue = Infinity;

  //Función que indica si un valor es false o true
  let isFalsy = (value) => {
    if (value == false) {
      console.log("Es falsy");
    } else {
      console.log("No es falsy");
    }
  };

  //Recorremos los valores falsy
  let falsyValues = [
    ceroValue,
    negativeCero,
    ceroBigInt,
    quotationMarks,
    singleQuotationMarks,
    backTicks,
    falseValue,
  ];

  for (e of falsyValues) {
    isFalsy(e); //OUTPUT: 7 Es falsy
  }
}
