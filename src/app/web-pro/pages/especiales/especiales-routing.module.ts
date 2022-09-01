import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CtsComponent } from './cts/cts.component';
import { GratificacionComponent } from './gratificacion/gratificacion.component';
import { RentaExternaComponent } from './renta-externa/renta-externa.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "cts",
                component: CtsComponent
            },
            {
                path: "gratificacion",
                component: GratificacionComponent
            },
            {
                path: "renta-externa",
                component: RentaExternaComponent
            },

            {
                path: "**",
                redirectTo: "cts"
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspecialesRoutingModule { }