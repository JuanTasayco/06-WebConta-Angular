import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorextComponent } from './horext/horext.component';
import { ReporteRentaComponent } from './reporte-renta/reporte-renta.component';
import { AdelantosComponent } from './adelantos/adelantos.component';
import { OtrosIngresosComponent } from './otros-ingresos/otros-ingresos.component';
import { OtrosConceptosComponent } from './otros-conceptos/otros-conceptos.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';



@NgModule({
  declarations: [
    HorextComponent,
    ReporteRentaComponent,
    AdelantosComponent,
    OtrosIngresosComponent,
    OtrosConceptosComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule
  ]
})
export class RegistrosModule { }
