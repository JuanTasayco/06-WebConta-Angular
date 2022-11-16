
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from "gsap"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("banner") banner!: ElementRef;
  @ViewChildren("funcional,diseño") sections!: QueryList<ElementRef>;


  constructor(private render: Renderer2) { }
  ngAfterViewInit(): void {

    const time = gsap.timeline({ repeat: 0, yoyo: false })

    gsap.from(this.banner.nativeElement, { opacity: 0, duration: 2 })

    this.sections.forEach((element) => {
      gsap.from(element.nativeElement, {
        opacity: 0,
        ease: "none"
      })
    })
  }
  title = 'PageWebPro';
}
