import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { RouterModule } from '@angular/router';
import { IdDirectiveDirective } from '../directives/id-directive.directive';



@NgModule({
  declarations: [
    InfoComponent,
    IdDirectiveDirective
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    RouterModule
  ],
  exports: [
    InfoComponent,
    IdDirectiveDirective
  ]
})
export class ComponentsModule { }
