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
    {
      title: 'Ir a reportes',
      description:
        'Para verificar el estado actual de la afp incluyendo lo agregado, vamos a verificar el reporte',
      urlImage: 'assets/Adicionales/afp/4.3.irReportes.png',
    },
    {
      title: 'Seleccionar Reporte AFP',
      description:
        'Seleccionamos el reporte 004:Planilla Pago AFP, verificar que estés en el mes correcto y aceptar. En el pequeño panel que sale: Seleccionar: RESUMEN AFP. ',
      urlImage: 'assets/Adicionales/afp/4.4.seleccionar.png',
    },
    {
      title: 'Verificar data',
      description:
        'Una vez seleccionado Resumen AFP, verificamos si nuestro resumen cuadra con el cuadro de liquidaciones.',
      urlImage: 'assets/Adicionales/afp/4.5.verificarAfp.png',
    },
    {
      title: 'Ir a Transferencias AFP',
      description:
        'Si todo cuadra, necesitamos ir a transferencias para exportar el archivo AFP necesario. ',
      urlImage: 'assets/Adicionales/afp/5.irExportar.png',
    },
    {
      title: 'Exportar archivo AFP',
      description:
        'Seleccionar el tipo de planilla, el periodo(mes) y seleccionar Generar Archivo, luego presiona guardar para seleccionar la ruta donde se almacenará.',
      urlImage: 'assets/Adicionales/afp/5.exportar.png',
    },
    {
      title: 'Verifica si existen jubilados',
      description:
        'Si el colegio tiene un jubilado, el archivo de exportación siempre tendrá un espacio en blanco, si existen 2, habrás dos espacios y así sucesivamente. ',
      urlImage: 'assets/Adicionales/afp/5.jubilados.png',
    },
    {
      title: 'Copia al jubilado basandote en el mes anterior',
      description:
        'Como todos los meses, el jubilado es agregado manualmente, por lo que, para agregar al jubilado del mes actual,basta con ir a un mes anterior ( carpeta afpnet) copiar al jubilado y agregarlo a tu archivo actual. Si es un jubilado nuevo, necesitarás crear la estructura basandote en otros trabajadores más arriba en el archivo.',
      urlImage: 'assets/Adicionales/afp/5.jubilados2.png',
    },
  ];

  sinSubsidio: Flujo[] = [
    {
      title: 'Ir a reportes',
      description:
        'Para verificar el estado actual de la afp incluyendo lo agregado, vamos a verificar el reporte',
      urlImage: 'assets/Adicionales/afp/4.3.irReportes.png',
    },
    {
      title: 'Seleccionar Reporte AFP',
      description:
        'Seleccionamos el reporte 004:Planilla Pago AFP, verificar que estés en el mes correcto y aceptar. En el pequeño panel que sale: Seleccionar: RESUMEN AFP. ',
      urlImage: 'assets/Adicionales/afp/4.4.seleccionar.png',
    },
    {
      title: 'Verificar data',
      description:
        'Una vez seleccionado Resumen AFP, verificamos si nuestro resumen cuadra con el cuadro de liquidaciones.',
      urlImage: 'assets/Adicionales/afp/4.5.verificarAfp.png',
    },
    {
      title: 'Ir a Transferencias AFP',
      description:
        'Si todo cuadra, necesitamos ir a transferencias para exportar el archivo AFP necesario. ',
      urlImage: 'assets/Adicionales/afp/5.irExportar.png',
    },
    {
      title: 'Exportar archivo AFP',
      description:
        'Seleccionar el tipo de planilla, el periodo(mes) y seleccionar Generar Archivo, luego presiona guardar para seleccionar la ruta donde se almacenará.',
      urlImage: 'assets/Adicionales/afp/5.exportar.png',
    },
    {
      title: 'Verifica si existen jubilados',
      description:
        'Si el colegio tiene un jubilado, el archivo de exportación siempre tendrá un espacio en blanco, si existen 2, habrás dos espacios y así sucesivamente. ',
      urlImage: 'assets/Adicionales/afp/5.jubilados.png',
    },
    {
      title: 'Copia al jubilado basandote en el mes anterior',
      description:
        'Como todos los meses, el jubilado es agregado manualmente, por lo que, para agregar al jubilado del mes actual,basta con ir a un mes anterior ( carpeta afpnet) copiar al jubilado y agregarlo a tu archivo actual. Si es un jubilado nuevo, necesitarás crear la estructura basandote en otros trabajadores más arriba en el archivo.',
      urlImage: 'assets/Adicionales/afp/5.jubilados2.png',
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
      title: 'Revisa la ficha del trabajador',
      description:
        'Ve al panel ficha de trabajadores y elige al trabajador dando doble click',
      urlImage: 'assets/Adicionales/afp/4.0.IrFicha.png',
    },
    {
      title: 'Verifica el concepto subsidio',
      description:
        'En la barra de opciones de ficha, elige conceptos, luego elige agregar, selecciona el subsidio con un click, y procede a guardar. Nota: Si el subsidio que quieres ya aparece, no es necesario agregar nada. ',
      urlImage: 'assets/Adicionales/afp/4.0.agregarConcepto.png',
    },
    {
      title: 'Ir al panel de valores',
      description:
        'Si es un subsidio como en este caso es necesario dirigirse al panel de valores.',
      urlImage: 'assets/Adicionales/afp/4.irValores.png',
    },

    {
      title: 'Elige la celda dependiendo el tipo de subsidio.',
      description:
        'Existen dos casillas, por enfermedad y maternidad, coloca los días en base al tipo de subsidio indicado,recuerda que todo debe sumar 30 días, si tienes 15 días trabajados o vacaciones, por obviedad solo tendrá 15 días disponibles para un subsidio. ',
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
        'Para verificar si se agregó el subsidio, verifica presionando el ícono de la persona, luego aparecerá una ventana.',
      urlImage: 'assets/Adicionales/afp/4.2.verificar.png',
    },
    {
      title: 'Ir a reportes',
      description:
        'Para verificar el estado actual de la afp incluyendo lo agregado, vamos a verificar el reporte',
      urlImage: 'assets/Adicionales/afp/4.3.irReportes.png',
    },
    {
      title: 'Seleccionar Reporte AFP',
      description:
        'Seleccionamos el reporte 004:Planilla Pago AFP, verificar que estés en el mes correcto y aceptar. En el pequeño panel que sale: Seleccionar: RESUMEN AFP. ',
      urlImage: 'assets/Adicionales/afp/4.4.seleccionar.png',
    },
    {
      title: 'Verificar data',
      description:
        'Una vez seleccionado Resumen AFP, verificamos si nuestro resumen cuadra con el cuadro de liquidaciones.',
      urlImage: 'assets/Adicionales/afp/4.5.verificarAfp.png',
    },
    {
      title: 'Ir a Transferencias AFP',
      description:
        'Si todo cuadra, necesitamos ir a transferencias para exportar el archivo AFP necesario. ',
      urlImage: 'assets/Adicionales/afp/5.irExportar.png',
    },
    {
      title: 'Exportar archivo AFP',
      description:
        'Seleccionar el tipo de planilla, el periodo(mes) y seleccionar Generar Archivo, luego presiona guardar para seleccionar la ruta donde se almacenará.',
      urlImage: 'assets/Adicionales/afp/5.exportar.png',
    },
    {
      title: 'Verifica si existen jubilados',
      description:
        'Si el colegio tiene un jubilado, el archivo de exportación siempre tendrá un espacio en blanco, si existen 2, habrás dos espacios y así sucesivamente. ',
      urlImage: 'assets/Adicionales/afp/5.jubilados.png',
    },
    {
      title: 'Copia al jubilado basandote en el mes anterior',
      description:
        'Como todos los meses, el jubilado es agregado manualmente, por lo que, para agregar al jubilado del mes actual,basta con ir a un mes anterior ( carpeta afpnet) copiar al jubilado y agregarlo a tu archivo actual. Si es un jubilado nuevo, necesitarás crear la estructura basandote en otros trabajadores más arriba en el archivo.',
      urlImage: 'assets/Adicionales/afp/5.jubilados2.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
