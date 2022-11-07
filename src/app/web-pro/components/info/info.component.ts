
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, timeout } from 'rxjs';
import { Info } from '../../interfaces/interfaces.component';
import { WebProService } from '../../services/web-pro.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit, AfterViewInit {

  @Input() informacion!: Info;
  @ViewChild("container", { static: false }) container!: ElementRef;





  constructor(private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {

    /*    console.log(this.container) */
  }
  ngOnInit(): void {
    this.changeDetector.detectChanges();
  }


}
