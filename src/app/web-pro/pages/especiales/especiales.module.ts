import { NgModule } from '@angular/core';
import { CtsComponent } from './cts/cts.component';
import { GratificacionComponent } from './gratificacion/gratificacion.component';
import { RentaExternaComponent } from './renta-externa/renta-externa.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { EspecialesRoutingModule } from './especiales-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    CtsComponent,
    GratificacionComponent,
    RentaExternaComponent
  ],
  imports: [
    EspecialesRoutingModule,
    ComponentsModule
  ]
})
export class EspecialesModule { }
