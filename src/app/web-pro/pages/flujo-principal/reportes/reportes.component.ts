import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: [
  ]
})
export class ReportesComponent implements OnInit {

  constructor() { }
  events2: any;
  ngOnInit(): void {
    this.events2 = ["3.Valores","6.Procesos", "REPORTES"];
  }

}
