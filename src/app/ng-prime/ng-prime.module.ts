import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    PanelMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ImageModule,
    DividerModule,
    FieldsetModule,
    ScrollPanelModule

  ],
  exports: [
    MenubarModule,
    PanelMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ImageModule,
    DividerModule,
    FieldsetModule,
    ScrollPanelModule

  ]
})
export class NgPrimeModule { }
