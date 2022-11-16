import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcesosComponent } from './procesos/procesos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ValoresComponent } from './valores/valores.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "valores",
                component: ValoresComponent
            },
            {
                path: "procesos",
                component: ProcesosComponent
            },
            {
                path: "reportes",
                component: ReportesComponent
            },

            {
                path: "**",
                redirectTo: ""
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlujoRoutingModule { }