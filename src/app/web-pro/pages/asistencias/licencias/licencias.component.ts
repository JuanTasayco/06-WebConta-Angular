import { Component, OnInit } from '@angular/core';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';
import { Info } from 'src/app/web-pro/interfaces/interfaces.component';
import { WebProService } from 'src/app/web-pro/services/web-pro.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styles: [],
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

  eliminarSubsidio: Flujo[] = [
    {
      title: 'Ve a planilla manual',
      description:
        'Si el subsidio fue modificado manualmente (monto) necesitas ir a esta sección, de lo contrario no es necesario, solo ve a valores.',
      urlImage: 'assets/Adicionales/afp/6.irModSub.png',
    },

    {
      title: 'Retira el monto modificado',
      description: 'Retira el monto que modificaste, colocalo en 0 y guarda.',
      urlImage: 'assets/Adicionales/afp/6.modSub.png',
    },

    {
      title: 'Ir al panel de valores',
      description:
        'Si es un subsidio como en este caso es necesario dirigirse al panel de valores.',
      urlImage: 'assets/Adicionales/afp/4.irValores.png',
    },
    {
      title: 'Retira los días subsidiados',
      description:
        'Retira los días que agregaste(coloca 0) para poder darle a entender al sistema que ya no necesita calcular este concepto. Luego guarda',
      urlImage: 'assets/Adicionales/afp/4.1.colocarSubsidio.png',
    },
    {
      title: 'Ir al panel de procesos',
      description:
        'Una vez que agregamos los días, salir del panel y dirigete a otro llamado procesos',
      urlImage: 'assets/Adicionales/afp/2.4.IrProcesos.png',
    },
    {
      title: 'Verificar',
      description:
        'Recuerda que el subsidio ya no debe aparecer, esa parte que está seleccionada de rojo, no debe estar.',
      urlImage: 'assets/Adicionales/afp/4.2.verificar.png',
    },
  ];
  constructor(private webService: WebProService) {}

  ngOnInit(): void {
    const name: string = 'licencias';
    this.webService.getAll().subscribe(({ asistencias }) => {
      for (let valor of asistencias) {
        if (Object.keys(valor).includes(name)) {
          this.licencias = valor.licencias!;
        }
      }
    });
  }
}
