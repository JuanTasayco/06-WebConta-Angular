import { Component, OnInit } from '@angular/core';
import { Info, Registro } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-adelantos',
  templateUrl: './adelantos.component.html',
  styles: [
  ]
})
export class AdelantosComponent implements OnInit {

  adelantos!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "adelantos";
    this.webService.getAll()
      .subscribe(({ registros }) => {
        for (let valor of registros) {
          if (Object.keys(valor).includes(name)) { this.adelantos = valor.adelantos! }
        }

      })
  }



}
