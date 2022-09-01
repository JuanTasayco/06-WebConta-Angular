import { NgModule } from '@angular/core';

import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { FaltasComponent } from './faltas/faltas.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { AsistenciasRoutingModule } from './asistencias-routing.module';



@NgModule({
  declarations: [
    VacacionesComponent,
    LicenciasComponent,
    FaltasComponent
  ],
  imports: [
    NgPrimeModule,
    AsistenciasRoutingModule
  ]
})
export class AsistenciasModule { }
