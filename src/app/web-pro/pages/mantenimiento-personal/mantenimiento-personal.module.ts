import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarTrabajadorComponent } from './ingresar-trabajador/ingresar-trabajador.component';
import { ModificarTrabajadorComponent } from './modificar-trabajador/modificar-trabajador.component';
import { CesesProcedimientosComponent } from './ceses-procedimientos/ceses-procedimientos.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';



@NgModule({
  declarations: [
    IngresarTrabajadorComponent,
    ModificarTrabajadorComponent,
    CesesProcedimientosComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoPersonalModule { }
