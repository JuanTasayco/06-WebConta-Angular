import { Component, OnInit } from '@angular/core';
import { Especiales, Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-renta-externa',
  templateUrl: './renta-externa.component.html',
  styles: [
  ]
})
export class RentaExternaComponent implements OnInit {

  rentaExterna!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "rentaExterna";
    this.webService.getAll()
      .subscribe(({ especiales }) => {
        for (let valor of especiales) {
          if (Object.keys(valor).includes(name)) { this.rentaExterna = valor.rentaExterna! }
        }
      })
  }
}
