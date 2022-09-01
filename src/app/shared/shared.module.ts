import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { SlideBarComponent } from './slide-bar/slide-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuBarComponent,
    SlideBarComponent
  ],
  imports: [
    NgPrimeModule
  ],
  exports:[
    MenuBarComponent,
    SlideBarComponent
  ]
})
export class SharedModule { }
