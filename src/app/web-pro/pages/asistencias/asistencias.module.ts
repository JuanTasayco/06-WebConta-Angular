import { NgModule } from '@angular/core';

import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { FaltasComponent } from './faltas/faltas.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { TardanzasComponent } from './tardanzas/tardanzas.component';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    VacacionesComponent,
    LicenciasComponent,
    FaltasComponent,
    TardanzasComponent
  ],
  imports: [
    AsistenciasRoutingModule,
    ComponentsModule,
    CommonModule
    
  ]
})
export class AsistenciasModule { }
