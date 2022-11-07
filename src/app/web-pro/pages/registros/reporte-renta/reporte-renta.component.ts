import { Component, OnInit } from '@angular/core';
import { Info, Registro } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-reporte-renta',
  templateUrl: './reporte-renta.component.html',
  styles: [
  ]
})
export class ReporteRentaComponent implements OnInit {

  reporteRenta!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "reporteRenta";
    this.webService.getAll()
      .subscribe(({ registros }) => {
        for (let valor of registros) {
          if (Object.keys(valor).includes(name)) { this.reporteRenta = valor.reporteRenta! }
        }

      })
  }


}
