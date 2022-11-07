import { Component, OnInit } from '@angular/core';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';
import { Especiales, Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tardanzas',
  templateUrl: './tardanzas.component.html',
  styleUrls: []
})
export class TardanzasComponent implements OnInit {

  tardanzas!: Info;


  ngOnInit(): void {
    const name: string = "tardanzas";
    this.webService.getAll()
      .subscribe(({ asistencias }) => {
        for (let valor of asistencias) {
          if (Object.keys(valor).includes(name)) { this.tardanzas = valor.tardanzas! }
        }
      })
  }


  constructor(private webService: WebProService) { }



}
