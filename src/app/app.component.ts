import { Component } from '@angular/core';

/**
   Component es un decorador que proviene de @angular/core, 
   sirve para indicar  que esta clase debe ser tratada como 
   un componente de Angular.

   Este decorador requiere como argumento un objeto en donde se especifica
   lo sgte:

   - selector : Nombre que este componente va a tener
   - templateUrl: Template HTML que estara asociado a este componente
   - template: Permite definir un template literal o un string. Por lo
               general se recomienda su uso para pocas lineas de codigo.
   - styleUrls: Hoja de estilos que aplicara "solo" en este componente.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
