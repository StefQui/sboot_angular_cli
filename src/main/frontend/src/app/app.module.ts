import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Page1Component} from "./page1/page1.component";
import { Page2Component } from './page2/page2.component';
import {FirstRoutingModule} from "./routing/first-routing.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirstRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
