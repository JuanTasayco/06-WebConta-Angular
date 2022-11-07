import { NgModule } from '@angular/core';

import { ValoresComponent } from './valores/valores.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { FlujoRoutingModule } from './flujo-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ValoresComponent,
    ProcesosComponent,
    ReportesComponent
  ],
  imports: [
    NgPrimeModule,
    FlujoRoutingModule,
    ComponentsModule, CommonModule
  ]
})
export class FlujoPrincipalModule { }
