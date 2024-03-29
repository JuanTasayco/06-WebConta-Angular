import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './web-pro/pages/pages.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 60],
};

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
  {
    path: 'asistencias',
    loadChildren: () =>
      import('./web-pro/pages/asistencias/asistencias.module').then(
        (m) => m.AsistenciasModule
      ),
  },
  {
    path: 'especiales',
    loadChildren: () =>
      import('./web-pro/pages/especiales/especiales.module').then(
        (m) => m.EspecialesModule
      ),
  },
  {
    path: 'flujo-principal',
    loadChildren: () =>
      import('./web-pro/pages/flujo-principal/flujo-principal.module').then(
        (m) => m.FlujoPrincipalModule
      ),
  },
  {
    path: 'mantenimiento-personal',
    loadChildren: () =>
      import(
        './web-pro/pages/mantenimiento-personal/mantenimiento-personal.module'
      ).then((m) => m.MantenimientoPersonalModule),
  },
  {
    path: 'registros',
    loadChildren: () =>
      import('./web-pro/pages/registros/registros.module').then(
        (m) => m.RegistrosModule
      ),
  },
  {
    path: 'adicionales',
    loadChildren: () =>
      import('./web-pro/pages/adicionales/adicionales.module').then(
        (m) => m.AdicionalesModule
      ),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
