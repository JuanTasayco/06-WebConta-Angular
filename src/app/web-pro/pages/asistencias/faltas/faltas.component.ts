import { Component, OnInit } from '@angular/core';
import { Asistencia, Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styles: [
  ]
})
export class FaltasComponent implements OnInit {

  faltas!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "faltas";
    this.webService.getAll()
      .subscribe(({ asistencias }) => {
        for (let valor of asistencias) {
          if (Object.keys(valor).includes(name)) { this.faltas = valor.faltas! }
        }
      })

  }

}
