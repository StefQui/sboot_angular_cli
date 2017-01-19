import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FirstRoutingModule} from "./first/first-routing.module";
import {Page1Component} from "./page1/page1.component";

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
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
