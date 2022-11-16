
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, HostListener, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html'
})
export class ProcesosComponent implements OnInit, AfterViewInit {
  events2: any;
  test: boolean = true;
  pros!: any;
  /*   @ViewChild("process") elementdiv!: ElementRef<HTMLElement>; */


  constructor(private webService: WebProService) { }



  /*   constructor(private changeDetect: ChangeDetectorRef,
      private route: Router) {
         this.view.scrollToPosition([0, window.screen.availHeight]) 
  
    } */

  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    /* 
        this.events2 = ["3.Valores", "4.Cambios", "PROCESOS"]; */
  }


  arrayProcesos: Flujo[] = [
    {
      title: "Acceder a planilla Manual",
      description: "Se accede de manera similar a la planilla Mensual, solo que aquí podremos hacer modificaciones específicas",
      urlImage: "assets/Flujo-principal/Procesos/1.acceder.png"
    },
    {
      title: "Verificar conceptos disponible",
      description: "Si tenemos subsidios, vacaciones, tardanzas etc. ( no aplica para remuneración mensual de trabajador ni horext), estos conceptos apareceran en columnas, también aplica para algunos descuentos. ",
      urlImage: "assets/Flujo-principal/Procesos/2.verificar.png"
    },
    {
      title: "Modificar montos y guardar",
      description: "Una vez encontradas las columnas a modificar, borramos el monto y colocamos el nuestro, procedemos a guardar",
      urlImage: "assets/Flujo-principal/Procesos/3.modificar.png",

    },
    {
      title: "Ingresar a planilla Mensual",
      description: "Salimos y ahora ingresamos a la planilla Mensual de siempre.",
      urlImage: "assets/Flujo-principal/Procesos/4.mensual.png",

    },
    {
      title: "Procesar",
      description: "Procesamos a los trabajadores que modificamos desde la planilla manual, es recomendable procesar individualmente.",
      urlImage: "assets/Flujo-principal/Procesos/5.procesar.png",

    },
    {
      title: "Regresar valor a la normalidad",
      description: "Este paso es opcional, si queremos regresar a su valor original, repetimos el procedimiento de ingresar a planilla Manual pero ahora en el campo a modificar colocamos 0 y guardamos. Posteriormente regresamos a Mensual y volvemos a procesar",
      urlImage: "assets/Flujo-principal/Procesos/6.normal.png",

    }

  ]

}
