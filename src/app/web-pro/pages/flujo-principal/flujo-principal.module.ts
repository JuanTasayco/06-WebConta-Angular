import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoresComponent } from './valores/valores.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';



@NgModule({
  declarations: [
    ValoresComponent,
    ProcesosComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule
  ]
})
export class FlujoPrincipalModule { }
