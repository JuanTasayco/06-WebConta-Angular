import { Component, OnInit } from '@angular/core';
import { Info, Registro } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-otros-conceptos',
  templateUrl: './otros-conceptos.component.html',
  styles: [
  ]
})
export class OtrosConceptosComponent implements OnInit {

  otrosConceptos!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "otrosConceptos";
    this.webService.getAll()
      .subscribe(({ registros }) => {
        for (let valor of registros) {
          if (Object.keys(valor).includes(name)) { this.otrosConceptos = valor.otrosConceptos! }
        }

      })
  }


}
