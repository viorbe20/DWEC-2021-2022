/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: ciclo for
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   // for clásico
   let colores = ['azul', 'rojo', 'verde'];
   
   for (let i = 0; i < colores.length; i++) {
      console.log('for clásico=>' + colores[i]);
   }
   // 'azul'
   // 'rojo'
   //'verde'

   // for of (iterables)
   for (let color of colores) {
   console.log('for of=>' + color);
   }
   // 'azul'
   // 'rojo'
   // 'verde'

   // for in (también objetos)
   for(let color in colores) {
     console.log('for in=>' + colores[color]);
   }
   // 'azul'
   // 'rojo'
   // 'verde'

   // for each
   colores.forEach(color=>console.log('for each=>' + color));
   // 'azul'
   // 'rojo'
   // 'verde'
}