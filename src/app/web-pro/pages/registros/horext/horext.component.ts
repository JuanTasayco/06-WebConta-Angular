import { Component, OnInit } from '@angular/core';
import { Info, Registro } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-horext',
  templateUrl: './horext.component.html',
  styles: [
  ]
})
export class HorextComponent implements OnInit {


  horasExtras!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "horasExtras";
    this.webService.getAll()
      .subscribe(({ registros }) => {
        for (let valor of registros) {
          if (Object.keys(valor).includes(name)) { this.horasExtras = valor.horasExtras! }
        }

      })
  }



}
