import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {
        label: 'Flujo Principal',
        icon: 'pi pi-sitemap',
        items: [{
          label: 'Valores',
          icon: 'pi pi-pw pi-file',
          routerLink: 'flujo-principal/valores',
          fragment: 'valores'
        },
        {
          label: 'Procesos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'flujo-principal/procesos',
          fragment: 'procesos'
        },
        { separator: true },
        {
          label: 'Reportes',
          icon: 'pi pi-pw pi-file',
          routerLink: 'flujo-principal/reportes',
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
                routerLink: 'mantenimiento-personal/ingresar',
                fragment: 'ingresar-trabajador'
              },
              {
                label: 'Modificar Trabajadores',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'mantenimiento-personal/modificar',
                fragment: 'modificar-trabajador'
              }
            ]
          },

          {
            label: 'Ceses',
            icon: 'pi pi-pw pi-file',
            items: [{
              label: 'Procedimientos',
              icon: 'pi pi-pw pi-file',
              routerLink: 'mantenimiento-personal/ceses',
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
          routerLink: 'registros/reporte-renta',
          fragment: 'reporte-renta'
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
          routerLink: 'registros/otros-ingresos',
          fragment: 'otros-ingresos'

        },

        {
          label: 'Otros conceptos',
          icon: 'pi pi-pw pi-file',
          routerLink: 'registros/otros-conceptos'
          , fragment: 'otros-conceptos'
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
            fragment: 'cts'
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
            routerLink: 'especiales/renta-externa',
            fragment: 'renta-externa'
          }

        ]
      }



    ]
  }
  constructor() { }
}
