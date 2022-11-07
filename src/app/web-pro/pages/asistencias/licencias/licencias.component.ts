import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styles: [
  ]
})
export class LicenciasComponent implements OnInit {


  licencias!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "licencias";
    this.webService.getAll()
      .subscribe(({ asistencias }) => {
        for (let valor of asistencias) {
          if (Object.keys(valor).includes(name)) { this.licencias = valor.licencias! }
        }
      })
  }

}
