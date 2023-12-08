import { Component, OnInit } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';

@Component({
  selector: 'app-plame',
  templateUrl: './plame.component.html',
  styles: [],
})
export class PlameComponent implements OnInit {
  events2: any;
  test: boolean = true;
  pros!: any;
  constructor() {}
  plameArray: Flujo[] = [
    {
      title: 'Ir al sección de exportación',
      description: 'Necesitas ir a transferencias y buscar la opción PLAME',
      urlImage: 'assets/Adicionales/afp/impuestos2.png',
    },

    {
      title: 'Elegir los archivos necesarios',
      description:
        'Una vez dentro elegir los archivos número 14,15,18 y 26, cada uno tiene una extensión diferente y son todos los necesarios para realizar correctamente un proceso de PLAME.',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },

    {
      title: 'Exportar a carpeta',
      description:
        'Ahora, cada vez que eliges una opción, además de seleccionar el periodo mensual y el mes correspondiente, dale a generar archivo, luego en la parte superior izquierda selecciona Salvar, esto te permitirá elegir una carpeta donde deseas colocar los archivos generados. ',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },

    {
      title: 'Sigue el proceso que ya conoces en el PLAME',
      description:
        'Restaura el archivo PLAME, luego crea el periodo que trabajarás y levanta los archivos que exportaste hasta que aparezcan los checks.',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },

    {
      title: 'Exportar archivo para comparación con el sistema',
      description:
        'Normalmente me aseguro de tener la AFP tal y como lo solicitaron en el cuadro de liquidaciones, por lo qué solo necesito analizar el archivo número R01 exportado a excel',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },

    {
      title: 'Analizar montos PLAME - Sistema',
      description:
        'Una vez tengas ambos archivos, solo es cuestión de comparar la información, si ves alguna distorsión, exporta ambos excel y compara (lo harás con un BuscarV o como se te haga más fácil)',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },

    {
      title: 'Exportar data PLAME final',
      description:
        'Si todos los montos son correctos, solo exporta la data a la unidad F en la carpeta correspondiente.',
      urlImage: 'assets/Adicionales/afp/impuestos.png',
    },
  ];

  ngOnInit(): void {}
}
