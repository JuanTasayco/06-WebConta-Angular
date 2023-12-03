import { Component, OnInit } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';
import { Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styles: [
  ]
})
export class LicenciasComponent implements OnInit {


  licencias!: Info;
  eliminarLiquidaciones: Flujo[] = [
    {
      title: 'Dirigite a Listado',
      description:
        'Este panel está justo debajo de la opción para agregar ingresos variables(donde ingresaste la liquidación)',
      urlImage: 'assets/Adicionales/afp/3.1.irEliminarLiqui.png',
    },

    {
      title: 'Eliminar la vacacion trunca.',
      description:
        'Busca al trabajador, dale un check y presiona el botón de eliminar, esto le quitará el monto agregado',
      urlImage: 'assets/Adicionales/afp/3.2.eliminarLiqui.png',
    },

    {
      title: 'Dirigete al panel de procesos',
      description: 'Ahora necesitas ir nuevamente a procesos, para procesar.',
      urlImage: 'assets/Adicionales/afp/2.4.IrProcesos.png',
    },

    {
      title: 'Procesa al trabajador.',
      description:
        'Recuerda solo procesar al trabajador que tuvo la liquidación, en este caso selecciona el check y presiona el botón superior (procesar)',
      urlImage: 'assets/Adicionales/afp/2.5.procesar.png',
    },
  ];
  
  eliminarSubsidio: Flujo[] = [];
  constructor(private webService: WebProService) { }

  ngOnInit(): void {
    const name: string = "licencias";
    this.webService.getAll()
      .subscribe(({ asistencias }) => {
        for (let valor of asistencias) {
          if (Object.keys(valor).includes(name)) { this.licencias = valor.licencias! }
        }
      })
  }

}
