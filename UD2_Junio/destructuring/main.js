/**
* @author Virginia Ordoño Bernier
* @date 2022
* @source https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/#:~:text=Destructuring%20Assignment%20is%20a%20JavaScript,objects%20and%20assigning%20to%20variables.
* Técnica que permite desempaquetar los valores de un array (o las propiedades de un objeto)
* en una variable.
*/

{
  //Ejemplo 1
  //Extracción de valores de un array de manera tradicional
  let names = ["alpha", "beta", "gamma", "delta"];
    
  let firstName = names[0];
  let secondName = names[1];
    
  console.log(firstName);//"alpha"
  console.log(secondName);//"beta"
  
  //Con destructuring V1
  let x, y;
  [x, y] = [10, 20];
  console.log(x); // 10
  console.log(y); // 20
  
  //Con destructuring V2
  [x, y, ...restof] = [10, 20, 30, 40, 50];
  console.log(x); // 10
  console.log(y); // 20
  console.log(restof); // [30, 40, 50]
  
  //Ejemplo 2: destructuring on Objects V1
  let name, lastname;
  ({name, lastname} = { name: "Ana", lastname: 'Pérez' });
  console.log(name); // Ana
  console.log(lastname); // Pérez
  
  //destructuring on Objects V2
  let name2, lastname2;
  ({name2, lastname2, ...restof} = { name2: "Ana", lastname2: 'Pérez', age:34, student:'true' });
  console.log(name2); // Ana
  console.log(lastname2); // Pérez
  console.log(restof); // {age: 34, student: 'true'}
  
  }