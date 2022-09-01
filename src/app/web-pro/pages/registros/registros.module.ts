import { NgModule } from '@angular/core';


import { HorextComponent } from './horext/horext.component';
import { ReporteRentaComponent } from './reporte-renta/reporte-renta.component';
import { AdelantosComponent } from './adelantos/adelantos.component';
import { OtrosIngresosComponent } from './otros-ingresos/otros-ingresos.component';
import { OtrosConceptosComponent } from './otros-conceptos/otros-conceptos.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { RegistrosRoutingModule } from './registros-routing.module';



@NgModule({
  declarations: [
    HorextComponent,
    ReporteRentaComponent,
    AdelantosComponent,
    OtrosIngresosComponent,
    OtrosConceptosComponent
  ],
  imports: [
    NgPrimeModule,
    RegistrosRoutingModule
  ]
})
export class RegistrosModule { }
