import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styles: [
  ]
})
export class VacacionesComponent implements OnInit {
  vacaciones!: Info;
  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "vacaciones";
    this.webService.getAll()
      .subscribe(({ asistencias }) => {
        for (let valor of asistencias) {
          if (Object.keys(valor).includes(name)) { this.vacaciones = valor.vacaciones! }
        }
      })
  }

}
