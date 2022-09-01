import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styles: [
  ]
})
export class SlideBarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Flujo Principal',
        icon: 'pi pi-sitemap',
        items: [{
          label: 'Valores',
          icon: 'pi pi-pw pi-file',
          routerLink: 'principal/valores',
          fragment: 'valores'
        },
        {
          label: 'Procesos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'principal/procesos',
          fragment: 'procesos'
        },
        { separator: true },
        {
          label: 'Reportes',
          icon: 'pi pi-pw pi-file',
          routerLink: 'principal/reportes',
          fragment: 'reportes'

        }
        ]
      },

      {
        label: 'Mantenimiento personal',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Fichas',
            icon: 'pi pi-pw pi-file',
            items: [
              {
                label: 'Ingresar trabajadores',
                icon: 'pi pi-sort-amount-up-alt',
                routerLink: 'mantenimiento/fichas/ingresar',
                fragment: 'fichas-ingreso'
              },
              {
                label: 'Modificar Trabajadores',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'mantenimiento/fichas/modificar',
                fragment: 'fichas-modificar'
              }
            ]
          },

          {
            label: 'Ceses',
            icon: 'pi pi-pw pi-file',
            items: [{
              label: 'Procedimientos',
              icon: 'pi pi-pw pi-file',
              routerLink: 'mantenimiento/ceses',
              fragment: 'ceses'

            }

            ]


          }

        ]
      },

      {
        label: 'Asistencias',
        icon: 'pi pi-check',
        items: [{
          label: 'Vacaciones',
          icon: 'pi pi-pw pi-file',
          routerLink: 'asistencias/vacaciones',
          fragment: 'vacaciones'

        },
        {
          label: 'Licencias',
          icon: 'pi pi-pw pi-file',
          routerLink: 'asistencias/licencias',
          fragment: 'licencias'
        },

        {
          label: 'Faltas',
          icon: 'pi pi-pw pi-file',
          routerLink: 'asistencias/faltas',
          fragment: 'faltas'
        }
        ]



      },

      {
        label: 'Registros',
        icon: 'pi pi-server',
        items: [{
          label: 'Horas Extras',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/horext'
          , fragment: 'horext'

        },
        {
          label: 'Reporte Renta',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/reportesRenta',
          fragment: 'reportesRenta'
        },

        {
          label: 'Adelantos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/adelantos'
          , fragment: 'adelantos'
        },
        {
          label: 'Otros ingresos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/otrosIngresos',
          fragment: 'otrosIngresos'

        },

        {
          label: 'Otros conceptos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/Otrosconceptos'
          , fragment: 'otrosConceptos'
        },
        ]

      },

      {
        label: 'Especiales',
        icon: 'pi pi-check',
        items: [
          {
            label: 'CTS',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/cts',
          },
          {
            label: 'Gratificación',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/gratificacion'
            , fragment: 'gratificacion'
          },
          {
            label: 'Renta externa',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/rentaExterna',
            fragment: 'rentaExterna'
          }

        ]
      }



    ]

  }
  constructor() { }
}
