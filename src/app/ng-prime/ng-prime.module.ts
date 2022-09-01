import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';

import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TimelineModule,
    CardModule, 
    ButtonModule,
    ImageModule,
    DividerModule,
    FieldsetModule,
    ScrollPanelModule

    
  ],
  exports:[
    MenubarModule,
    BrowserAnimationsModule,
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
