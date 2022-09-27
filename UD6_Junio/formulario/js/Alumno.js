/**
 * @author Virginia Ordoño Bernier
 * @date Marzo 2022
 * @summary Reentrega Examen UD4-5-6. Febrero de 2022
 * @description Clase Alumno
 */

class Alumno {
  #nombre;
  #apellido;
  #curso;

  constructor(nombre, apellido, curso) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    //Uso del setter para comprobar el curso con una regex. Mejor ponerlo al principio por si salta, que no asigne los otros estados
    this.#setCurso = curso;
  }

  //Lanza excepción si no se cumple la regex
  set #setCurso(curso) {
    if (!/^(1|2)(asir|daw|dam)$/.test(curso)) {
      throw new Error("El curso es incorrecto.");
    }
    this.#curso = curso;
  }

  //Método mostrar que muestra por consola el estado
  mostrar() {
    console.log(`Alumno:
      Nombre: ${this.#nombre}
      Apellido: ${this.#apellido}
      Curso: ${this.#curso}`);
  }
}