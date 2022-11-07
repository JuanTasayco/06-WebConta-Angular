import { Component, OnInit } from '@angular/core';
import { Especiales, Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-gratificacion',
  templateUrl: './gratificacion.component.html',
  styles: [
  ]
})
export class GratificacionComponent implements OnInit {

  gratificacion!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "gratificacion";
    this.webService.getAll()
      .subscribe(({ especiales }) => {
        for (let valor of especiales) {
          if (Object.keys(valor).includes(name)) { this.gratificacion = valor.gratificacion! }
        }
      })
  }
}
