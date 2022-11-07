import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Flujo } from 'src/app/web-pro/interfaces/flujo.interface';


@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styles: [
  ]
})
export class ValoresComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }
  events2: any;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.events2 = ["1.Fichas", "2.Asistencias", "VALORES"];
  }

  arrayValores: Flujo[] = [
    {
      title: "Tardanzas",
      description: "Se coloca en minutos y se procede a guardar la información",
      urlImage: "assets/Flujo-principal/Valores/2.tardanzas.png"
    },
    {
      title: "Faltas",
      description: "Solo se necesita colocar los días de faltas y reducir los días informativos, no los días de cálculo",
      urlImage: "assets/Flujo-principal/Valores/3.faltas.png"
    },
    {
      title: "Dias informativos",
      description: "No afectan en nada al cálculo, pero es información que se refleja en los reportes, podría pagarle 1 día yponerle 30 aquí tranquilamente. No es necesario procesar.",
      urlImage: "assets/Flujo-principal/Valores/4.diasInformativos.png"
    },
    {
      title: "Horario / Jornada",
      description: "Son datos informativos que se reflejan en la planilla, puede modificarse a gusto, se declaran en horas yminutos. No es necesario procesar.",
      urlImage: "assets/Flujo-principal/Valores/5.horarioTrabajo.png"
    },
    {
      title: "Dias para cálculo",
      description: "Los días indicados aquí reflejan directamente el cálculo para los días pagados del mes, se coloca unnúmero entre 1 y 30 días, no acepta más, tampoco negativos. Es estrictamente necesario procesar para verel cambio en la planilla",
      urlImage: "assets/Flujo-principal/Valores/6.diasCalculo.png"
    },
    {
      title: "Vacaciones",
      description: "Estos días y el campo de 'Días para cálculo' deben sumar 30, si tiene 15 días de vacaciones esnecesario reducir los días de cálculo a 15 días tambíen. Es necesario procesar para ver los cambios.Nota: -Si se llenaron las vacaciones en Asistencias y luego se insertó valores, esto se haráautomáticamente.",
      urlImage: "assets/Flujo-principal/Valores/7.vacaciones.png"
    },
    {
      title: "Licencias",
      description: "Estos días y el campo de 'Dias para cálculo' deben sumar 30, tanto para LCGH y LSGH. Es necesarioprocesar para ver los cambios en la planilla.Nota: -Si se llenaron las vacaciones en Asistencias y luegose insertó valores, esto se haráautomáticamente.",
      urlImage: "assets/Flujo-principal/Valores/8.licencias.png"
    },
    {
      title: "Subsidios",
      description: "Es estrictamente necesario borrar los números de este campo, ya que pondrá los cálculo de la planilla enrojo y pondrá montos del subsidio, cosa que queremos evitar para la planilla mensual. Guardar yprocesar.",
      urlImage: "assets/Flujo-principal/Valores/9.subsidios.png"
    },
  ]


}
