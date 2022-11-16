
import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Info } from '../../interfaces/interfaces.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit, AfterViewInit {

  @Input() informacion!: Info;
  @ViewChild("container") container!: ElementRef;


  constructor() {
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }


}
