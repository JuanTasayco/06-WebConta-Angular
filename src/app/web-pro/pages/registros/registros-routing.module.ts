import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdelantosComponent } from './adelantos/adelantos.component';
import { HorextComponent } from './horext/horext.component';
import { OtrosConceptosComponent } from './otros-conceptos/otros-conceptos.component';
import { OtrosIngresosComponent } from './otros-ingresos/otros-ingresos.component';
import { ReporteRentaComponent } from './reporte-renta/reporte-renta.component';

const routes: Routes = [

    {
        path: "",
        children: [
            {
                path: "adelantos",
                component: AdelantosComponent
            },
            {
                path: "horext",
                component: HorextComponent
            },

            {
                path: "otros-conceptos",
                component: OtrosConceptosComponent
            },
            {
                path: "otros-ingresos",
                component: OtrosIngresosComponent
            },
            {
                path: "reporte-renta",
                component: ReporteRentaComponent
            },
            {
                path: "**",
                redirectTo: "adelantos"
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrosRoutingModule { }
