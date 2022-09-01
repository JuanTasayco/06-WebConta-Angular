import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './web-pro/pages/pages.component';
import { ValoresComponent } from './web-pro/pages/flujo-principal/valores/valores.component';
import { ProcesosComponent } from './web-pro/pages/flujo-principal/procesos/procesos.component';
import { ReportesComponent } from './web-pro/pages/flujo-principal/reportes/reportes.component';

import { IngresarTrabajadorComponent } from './web-pro/pages/mantenimiento-personal/ingresar-trabajador/ingresar-trabajador.component';
import { ModificarTrabajadorComponent } from './web-pro/pages/mantenimiento-personal/modificar-trabajador/modificar-trabajador.component';
import { CesesProcedimientosComponent } from './web-pro/pages/mantenimiento-personal/ceses-procedimientos/ceses-procedimientos.component';

import { VacacionesComponent } from './web-pro/pages/asistencias/vacaciones/vacaciones.component';
import { LicenciasComponent } from './web-pro/pages/asistencias/licencias/licencias.component';
import { FaltasComponent } from './web-pro/pages/asistencias/faltas/faltas.component';

import { HorextComponent } from './web-pro/pages/registros/horext/horext.component';
import { ReporteRentaComponent } from './web-pro/pages/registros/reporte-renta/reporte-renta.component';
import { AdelantosComponent } from './web-pro/pages/registros/adelantos/adelantos.component';
import { OtrosIngresosComponent } from './web-pro/pages/registros/otros-ingresos/otros-ingresos.component';
import { OtrosConceptosComponent } from './web-pro/pages/registros/otros-conceptos/otros-conceptos.component';


import { CtsComponent } from './web-pro/pages/especiales/cts/cts.component';
import { GratificacionComponent } from './web-pro/pages/especiales/gratificacion/gratificacion.component';
import { RentaExternaComponent } from './web-pro/pages/especiales/renta-externa/renta-externa.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled",
}


const routes: Routes = [

  {
    path: "",
    component: PagesComponent,
    pathMatch: "full"
  },

  {
    path: "principal/valores",
    component: ValoresComponent

  },

  {
    path: "principal/procesos",
    component: ProcesosComponent

  },
  {
    path: "principal/reportes",
    component: ReportesComponent

  },




  {
    path: "mantenimiento/fichas/ingresar",
    component: IngresarTrabajadorComponent

  },

  {
    path: "mantenimiento/fichas/modificar",
    component: ModificarTrabajadorComponent

  },

  {
    path: "mantenimiento/ceses",
    component: CesesProcedimientosComponent

  },




  {
    path: "asistencias/vacaciones",
    component: VacacionesComponent
  },

  {
    path: "asistencias/licencias",
    component: LicenciasComponent
  },

  {
    path: "asistencias/faltas",
    component: FaltasComponent
  },





  {
    path: "registros/horext",
    component: HorextComponent
  },

  {
    path: "registros/reportesRenta",
    component: ReporteRentaComponent
  },

  {
    path: "registros/adelantos",
    component: AdelantosComponent
  },

  {
    path: "registros/otrosIngresos",
    component: OtrosIngresosComponent
  },

  {
    path: "registros/Otrosconceptos",
    component: OtrosConceptosComponent
  },





  {
    path: "especiales/cts",
    component: CtsComponent
  },

  {
    path: "especiales/gratificacion",
    component: GratificacionComponent
  },

  {
    path: "especiales/rentaExterna",
    component: RentaExternaComponent
  },




  {
    path: "**",
    redirectTo: ""

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
