import { NgModule } from '@angular/core';

import { ValoresComponent } from './valores/valores.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { FlujoRoutingModule } from './flujo-routing.module';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { PeriodosComponent } from './periodos/periodos.component';
import { SelectColegioComponent } from './select-colegio/select-colegio.component';




@NgModule({
  declarations: [
    ValoresComponent,
    ProcesosComponent,
    ReportesComponent,
    PeriodosComponent,
    SelectColegioComponent

  ],
  imports: [
    NgPrimeModule,
    FlujoRoutingModule,
    CommonModule,
    ComponentsModule

  ]
})
export class FlujoPrincipalModule { }
