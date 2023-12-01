import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

@Directive({
  selector: '[appIdDirective]',
})
export class IdDirectiveDirective implements OnInit, AfterViewInit, OnDestroy {
  constructor(private el: ElementRef<HTMLElement>, private route: Router) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }

  ngAfterViewInit(): void {
    gsap.to(window, {
      scrollTo: {
        y: this.el.nativeElement,
      },
      duration: 0.5,
    });

    /*     this.el.nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        }); */
  }

  ngOnDestroy(): void {}
}
