import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

/** 
 * Los modulos estan compuestos por las sgte piezas:
 * 
    * declarations : dicen que cosas contiene este modulo , por ej los componentes, pipes.
    * exports: dice que cosas quiero que sean visibles afuera de este modulo. Que cosas
    *          quiero hacer publicas o visibles fuera de este modulo.
    * imports:  Aqui adentro van declarados los modulos a utilizar.
 * 
 * 
 * CommonModule : Este modulo ofrece las directivas como el *ngIf y el *ngFor.
 *                Entonces si vamos a utilizar estas directivas debemos importar este
 *                modulo.
*/
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule {}