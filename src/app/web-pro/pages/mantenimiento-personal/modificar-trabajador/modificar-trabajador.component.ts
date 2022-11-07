import { Component, OnInit } from '@angular/core';
import { Info, MantenimientoPersonal } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-modificar-trabajador',
  templateUrl: './modificar-trabajador.component.html',
  styles: [
  ]
})
export class ModificarTrabajadorComponent {

  modificar!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "modificar";
    this.webService.getAll()
      .subscribe(({ mantenimientoPersonal }) => {
        for (let valor of mantenimientoPersonal) {
          if (Object.keys(valor).includes(name)) { this.modificar = valor.modificar! }
        }
      })
  }



}
