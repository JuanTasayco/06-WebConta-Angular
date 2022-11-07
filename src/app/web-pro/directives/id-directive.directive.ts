import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy, UrlSegment } from '@angular/router';

@Directive({
  selector: '[appIdDirective]'
})
export class IdDirectiveDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef<HTMLElement>) { }
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.el.nativeElement.scrollIntoView({
      behavior: 'auto',
      block: "start"
    });
  }


}
