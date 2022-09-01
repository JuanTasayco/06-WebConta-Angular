import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { SharedModule } from './shared/shared.module';
import { WebProModule } from './web-pro/web-pro.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    WebProModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
