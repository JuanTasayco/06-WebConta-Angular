import { Component, OnInit } from '@angular/core';
import { Especiales, Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-cts',
  templateUrl: './cts.component.html',
  styles: [
  ]
})
export class CtsComponent implements OnInit {

  cts!: Info;

  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "cts";
    this.webService.getAll()
      .subscribe(({ especiales }) => {
        for (let valor of especiales) {
          if (Object.keys(valor).includes(name)) { this.cts = valor.cts! }
        }
      })
  }

}
