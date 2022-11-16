import { NgModule } from '@angular/core';

import { ValoresComponent } from './valores/valores.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { FlujoRoutingModule } from './flujo-routing.module';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
  declarations: [
    ValoresComponent,
    ProcesosComponent,
    ReportesComponent

  ],
  imports: [
    NgPrimeModule,
    FlujoRoutingModule,
    CommonModule,
    ComponentsModule

  ]
})
export class FlujoPrincipalModule { }
