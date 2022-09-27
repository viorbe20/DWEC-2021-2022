/**
 * Spread Syntax
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  //Dos arrays en uno
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekend = ["Saturday", "Sunday"];
  const week = [...days, ...weekend];
  console.log(week); // (7) ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  //Clonar arrays
  const originalArray = ["blue", "red", "orange"];
  const clonedArray = [...originalArray];
  console.log(clonedArray); // (3) ["blue", "red", "orange"]
}
