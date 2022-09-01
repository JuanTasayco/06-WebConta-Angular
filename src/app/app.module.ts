import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './web-pro/pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
