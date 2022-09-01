import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesesProcedimientosComponent } from './ceses-procedimientos/ceses-procedimientos.component';
import { IngresarTrabajadorComponent } from './ingresar-trabajador/ingresar-trabajador.component';
import { ModificarTrabajadorComponent } from './modificar-trabajador/modificar-trabajador.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "ingresar",
                component: IngresarTrabajadorComponent
            },
            {
                path: "ceses",
                component: CesesProcedimientosComponent
            },

            {
                path: "modificar",
                component: ModificarTrabajadorComponent
            },
            {
                path: "**",
                redirectTo: "ingresar"
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MantenimientoRoutingModule { }