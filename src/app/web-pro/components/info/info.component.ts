import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  titulo: any = "Faltas";


  constructor() { }

  ngOnInit(): void {
  }

}
