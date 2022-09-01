import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { FaltasComponent } from './faltas/faltas.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';



@NgModule({
  declarations: [
    VacacionesComponent,
    LicenciasComponent,
    FaltasComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule
  ]
})
export class AsistenciasModule { }
