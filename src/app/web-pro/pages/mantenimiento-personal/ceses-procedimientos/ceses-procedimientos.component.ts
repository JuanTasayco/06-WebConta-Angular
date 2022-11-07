import { Component, OnInit } from '@angular/core';
import { Info, MantenimientoPersonal } from 'src/app/web-pro/interfaces/interfaces.component';

import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-ceses-procedimientos',
  templateUrl: './ceses-procedimientos.component.html',
  styles: [
  ]
})
export class CesesProcedimientosComponent implements OnInit {

  ceses!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "ceses";
    this.webService.getAll()
      .subscribe(({ mantenimientoPersonal }) => {
        for (let valor of mantenimientoPersonal) {
          if (Object.keys(valor).includes(name)) { this.ceses = valor.ceses! }
        }
      })
  }

}
