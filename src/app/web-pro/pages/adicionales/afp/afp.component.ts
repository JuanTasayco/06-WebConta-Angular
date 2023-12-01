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

  conLiquidacion: Flujo[] = [
    {
      title: 'Obten la información a llenar (liquidación)',
      description:
        'Revisa el cuadro de liquidaciones y obten el monto a colocar. Si no te lo indican aquí puedes revisar la hoja subsidio personal que debe ser enviada justo al correo.',
      urlImage: 'assets/Adicionales/afp/2.1.verificar.png',
    },
    {
      title: 'En caso sea liquidación.',
      description: 'Dirigirse a la sección de conceptos variables',
      urlImage: 'assets/Adicionales/afp/2.2.IrLiquidacion.png',
    },
    {
      title: 'Busca el concepto Vacaciones Truncas',
      description: '',
      urlImage: 'assets/Adicionales/afp/2.3.agregarVacaciones.png',
    },
    {
      title: 'Agregar monto Vacaciones Truncas',
      description:
        'Dirigete al trabajador, luego coloca el monto y guarda, presionando ',
      urlImage: 'assets/Adicionales/afp/2.3.agregarMonto.png',
    },
    {
      title: 'Ir al panel de procesos',
      description:
        'Una vez que agregamos el monto, salir del panel y dirigete a otro llamado procesos',
      urlImage: 'assets/Adicionales/afp/2.4.IrProcesos.png',
    },
    {
      title: 'Procesar',
      description:
        'Recuerda solo procesar al trabajador que tuvo la liquidación, en este caso selecciona el check y presiona el botón superior (procesar) ',
      urlImage: 'assets/Adicionales/afp/2.5.procesar.png',
    },
    {
      title: 'Verificar',
      description:
        'Para verificar si se agregó la vacación trunca, verifica presionando el ícono de la persona, luego aparecerá una ventana.',
      urlImage: 'assets/Adicionales/afp/2.6.verificar.png',
    },
  ];

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

  sinSubsidio: Flujo[] = [
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
  ];

  conSubsidio: Flujo[] = [
    {
      title: 'Obten la información a llenar (subsidio)',
      description:
        'Revisa el cuadro de liquidaciones y obten el monto a colocar. Si no te lo indican aquí puedes revisar la hoja subsidio personal que debe ser enviada justo al correo.',
      urlImage: 'assets/Adicionales/afp/2.1.verificar.png',
    },
    {
      title: 'En caso sea subsidio',
      description: 'Dirigirse a al panel de valores.',
      urlImage: 'assets/Adicionales/afp/2.2.IrLiquidacion.png',
    },
    {
      title: 'Elige la celda dependiendo tu subsidio y coloca los días. ',
      description:
        'Depende si el subsidio es por maternidad o enfermedad para saber que celda llenar, recuerda que todo debe sumar 30 días, si tienes 15 días trabajados o vacaciones, por obviedad solo tendrá 15 días disponibles para un subsidio.',
      urlImage: 'assets/Adicionales/afp/2.2.IrLiquidacion.png',
    },

    {
      title: 'Revisa la ficha del trabajador.',
      description:
        'El concepto de subsidio por maternidad tiene que estar agregado en la ficha del trabajador también',
      urlImage: 'assets/Adicionales/afp/2.2.IrLiquidacion.png',
    },
  ];

  eliminarSubsidio: Flujo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
