import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styles: [
  ]
})
export class ValoresComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
