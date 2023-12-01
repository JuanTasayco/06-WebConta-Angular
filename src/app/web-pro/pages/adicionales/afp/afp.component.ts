import { Component, OnInit } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';

@Component({
  selector: 'app-afp',
  templateUrl: './afp.component.html',
  styles: [],
})
export class AfpComponent implements OnInit {
  events2: any;
  test: boolean = true;
  pros!: any;
  arrayProcesos: Flujo[] = [
    {
      title: 'Selecciona el tipo de periodo que deseas',
      description:
        'Lo común es la planilla mensual y los casos especiales son CTS y Grati, los demás no se usan (no seleccionarlos). ',
      urlImage: 'assets/Flujo-principal/Periodos/2.seleccionarPeriodo.png',
    },

    {
      title: 'Crea un nuevo módulo en caso no exista.',
      description:
        'Una vez seleccionado el tipo de periodo ( en este ejemplo fue mensual). Si el mes que necesitas no está creado, puedes hacerlo presionando el botón de la esquina superior izquierda para añadir uno nuevo, luego colocar la información del mes (normalmente solo cambia el nombre y la fecha inicio / fin), después es ideal seguir un correcto mantener uniformidad en como nombras a cada periodo, como está en la imagen por ejemplo.',
      urlImage: 'assets/Flujo-principal/Periodos/4.5.crearPeriodo.png',
    },

    {
      title: 'Seleccionar periodo mensual común',
      description:
        'Esta es la sección que normalmente trabajarás mes a mes, recuerda que esté en 30 ese número al final, selecciona y guarda.',
      urlImage: 'assets/Flujo-principal/Periodos/3.periodoMensual.png',
    },

    {
      title: 'Seleccionar periodo gratificacion',
      description:
        'Aquí en general solo irán 2 módulos, uno perteneciente a la gratificación de Julio y otra a la de diciembre, recuerda colocar el 07 y el 12 en cada módulo respectivo, también el rango de fechas que corresponden.',
      urlImage: 'assets/Flujo-principal/Periodos/4.periodoGrati.png',
    },

    {
      title: 'Seleccionar periodo CTS',
      description:
        'Aquí por lo general irán dos módulos, CTS de Mayo y Noviembre, es importante tomar relevancia a la parte que dice 1S y 2S, esta nomenclatura es obligatoria ya que de lo contrario pueden haber problemas, seguir el ejemplo como está en la imagen.',
      urlImage: 'assets/Flujo-principal/Periodos/5.periodoCTS.png',
    },
    {
      title: 'Guardar cambios y/o seleccion',
      description:
        'Cuando seleccionas y marcas un periodo al que deseas ir, es importante presionar el botón guardardo para realizar un cambio, procura no salir directamente sin hacer esto, ya que no funcionará y te mantendrás en el periodo en el que estabas.',
      urlImage: 'assets/Flujo-principal/Periodos/6.guardar.png',
    },
  ];

  situacionesArray: Flujo[] = [
    {
      title: 'Con liquidaciones y subsidios',
      description:
        'Si el total se ve afectado, es necesario agregar liquidaciones y/o subsidios para lograr llegar a las cantidades que indica el cuadro de liqui.',
      urlImage: 'assets/Adicionales/afp/impuestos2.png',
    },

    {
      title: 'Sin liquidaciones y subsidios',
      description:
        'En este caso basta con sacar los reportes y exportar el archivo afp.',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
