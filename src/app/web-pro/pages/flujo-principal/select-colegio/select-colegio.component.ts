import { Component, OnInit } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';

@Component({
  selector: 'app-select-colegio',
  templateUrl: './select-colegio.component.html',
  styleUrls: [],
})
export class SelectColegioComponent implements OnInit {
  events2: any;
  test: boolean = true;
  pros!: any;
  constructor() {}

  ngOnInit(): void {}

  arrayProcesos: Flujo[] = [
    {
      title: 'Asignar Empresa',
      description:
        'Aquí puedes seleccionar el colegio u organización que necesites, basta con dar un click y todo estará listo.',
      urlImage: 'assets/Flujo-principal/Empresa/1.asignar.png',
    },
    {
      title: 'Verificar conceptos disponible',
      description:
        'Si tenemos subsidios, vacaciones, tardanzas etc. ( no aplica para remuneración mensual de trabajador ni horext), estos conceptos apareceran en columnas, también aplica para algunos descuentos. ',
      urlImage: 'assets/Flujo-principal/Empresa/2.seleccionar.png',
    },
    {
      title: 'Verificar si el colegio se seleccionó',
      description:
        'En la cabecera de la planilla podemos observar la organización y el mes en el que nos encontramos.',
      urlImage: 'assets/Flujo-principal/Empresa/3.verificar.png',
    },
  ];
}
