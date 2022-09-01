import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaltasComponent } from './faltas/faltas.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "faltas",
                component: FaltasComponent
            },
            {
                path: "licencias",
                component: LicenciasComponent
            },
            {
                path: "vacaciones",
                component: VacacionesComponent
            },
            {
                path: "**",
                redirectTo : "faltas"
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AsistenciasRoutingModule { }