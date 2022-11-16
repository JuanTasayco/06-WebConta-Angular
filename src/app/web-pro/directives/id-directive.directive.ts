
import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appIdDirective]'
})
export class IdDirectiveDirective implements OnInit, AfterViewInit, OnDestroy {

  constructor(private el: ElementRef<HTMLElement>, private route: Router) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement.getBoundingClientRect())
    this.el.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }



  ngOnDestroy(): void {

  }

}
