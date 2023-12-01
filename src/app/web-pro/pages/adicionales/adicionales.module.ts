import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionalesRoutingModule } from './adicionales-routing.module';
import { AfpComponent } from './afp/afp.component';
import { PlameComponent } from './plame/plame.component';
import { ComponentsModule } from '../../components/components.module';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';

@NgModule({
  declarations: [AfpComponent, PlameComponent],
  imports: [CommonModule, AdicionalesRoutingModule, ComponentsModule,NgPrimeModule],
})
export class AdicionalesModule {}
