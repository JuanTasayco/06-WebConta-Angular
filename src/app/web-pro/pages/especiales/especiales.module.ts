import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtsComponent } from './cts/cts.component';
import { GratificacionComponent } from './gratificacion/gratificacion.component';
import { RentaExternaComponent } from './renta-externa/renta-externa.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';



@NgModule({
  declarations: [
    CtsComponent,
    GratificacionComponent,
    RentaExternaComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule
  ]
})
export class EspecialesModule { }
