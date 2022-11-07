import { Component, OnInit } from '@angular/core';
import { Info, Registro } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-otros-ingresos',
  templateUrl: './otros-ingresos.component.html',
  styles: [
  ]
})
export class OtrosIngresosComponent implements OnInit {

  otrosIngresos!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "otrosIngresos";
    this.webService.getAll()
      .subscribe(({ registros }) => {
        for (let valor of registros) {
          if (Object.keys(valor).includes(name)) { this.otrosIngresos = valor.otrosIngresos! }
        }

      })
  }

}
