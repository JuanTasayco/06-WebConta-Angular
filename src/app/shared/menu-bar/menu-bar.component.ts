import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Flujo Principal',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Seleccionar Colegio',
            icon: 'pi pi-pw pi-file',
            routerLink: 'flujo-principal/inicio',
          },
          {
            label: 'Periodos',
            icon: 'pi pi-pw pi-file',
            routerLink: 'flujo-principal/periodos',
          },
          {
            label: 'Valores',
            icon: 'pi pi-pw pi-file',
            routerLink: 'flujo-principal/valores',
          },
          {
            label: 'Procesos',
            icon: 'pi pi-pw pi-file',
            routerLink: 'flujo-principal/procesos',
          },
          {
            label: 'Reportes',
            icon: 'pi pi-pw pi-file',
            routerLink: 'flujo-principal/reportes',
          },
        ],
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
                fragment: 'ingresar-trabajador',
              },
              {
                label: 'Modificar Trabajadores',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'mantenimiento-personal/modificar',
              },
            ],
          },

          {
            label: 'Ceses',
            icon: 'pi pi-pw pi-file',
            items: [
              {
                label: 'Procedimientos',
                icon: 'pi pi-pw pi-file',
                routerLink: 'mantenimiento-personal/ceses',
              },
            ],
          },
        ],
      },

      {
        label: 'Asistencias',
        icon: 'pi pi-check',
        items: [
          {
            label: 'Vacaciones',
            icon: 'pi pi-pw pi-file',
            routerLink: 'asistencias/vacaciones',
          },
          {
            label: 'Licencias/Subsidios',
            icon: 'pi pi-pw pi-file',
            routerLink: 'asistencias/licencias',
          },

          {
            label: 'Faltas',
            icon: 'pi pi-pw pi-file',
            routerLink: 'asistencias/faltas',
          },
          {
            label: 'Tardanzas',
            icon: 'pi pi-pw pi-file',
            routerLink: 'asistencias/tardanzas',
          },
        ],
      },

      {
        label: 'Registros',
        icon: 'pi pi-server',
        items: [
          {
            label: 'Horas Extras',
            icon: 'pi pi-pw pi-file',
            routerLink: 'registros/horext',
          },
          {
            label: 'Reporte Renta',
            icon: 'pi pi-pw pi-file',
            routerLink: 'registros/reporte-renta',
          },

          {
            label: 'Adelantos',
            icon: 'pi pi-pw pi-file',
            routerLink: 'registros/adelantos',
          },
          {
            label: 'Otros ingresos',
            icon: 'pi pi-pw pi-file',
            routerLink: 'registros/otros-ingresos',
          },

          {
            label: 'Otros conceptos',
            icon: 'pi pi-pw pi-file',
            routerLink: 'registros/otros-conceptos',
          },
        ],
      },

      {
        label: 'Especiales',
        icon: 'pi pi-star',
        items: [
          {
            label: 'CTS',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/cts',
          },
          {
            label: 'Gratificación',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/gratificacion',
          },
          {
            label: 'Renta externa',
            icon: 'pi pi-pw pi-file',
            routerLink: 'especiales/renta-externa',
          },
        ],
      },
      {
        label: 'Adicionales',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'AFP',
            icon: 'pi pi-pw pi-file',
            routerLink: 'adicionales/afp',
          },
          {
            label: 'Plame',
            icon: 'pi pi-pw pi-file',
            routerLink: 'adicionales/plame',
          },
        ],
      },
    ];
  }
}
