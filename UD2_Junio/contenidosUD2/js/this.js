/**
 * 3. This
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //En el método de un objeto, this hace referencia al objeto mismo.
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    },
  };

  console.log(person.fullName()); //Result John Doe

  //Si aparece solo, this hace referencia referencia al objeto global Window.
  let x = this;

  console.log(x); //Result Window
}
