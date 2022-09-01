import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { InterfacesComponent } from './interfaces/interfaces.component';

import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { WebProService } from './services/web-pro.service';
import { AsistenciasModule } from './pages/asistencias/asistencias.module';
import { EspecialesModule } from './pages/especiales/especiales.module';
import { FlujoPrincipalModule } from './pages/flujo-principal/flujo-principal.module';
import { MantenimientoPersonalModule } from './pages/mantenimiento-personal/mantenimiento-personal.module';
import { RegistrosModule } from './pages/registros/registros.module';




@NgModule({
  declarations: [
    PagesComponent,
    ComponentsComponent,
    InterfacesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    AsistenciasModule,
    EspecialesModule,
    FlujoPrincipalModule,
    MantenimientoPersonalModule,
    RegistrosModule
  ],

  providers: [
    WebProService
  ]
})
export class WebProModule { }
