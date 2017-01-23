import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Page1Component} from "./page1/page1.component";
import { Page2Component } from './page2/page2.component';
import {FirstRoutingModule} from "./routing/first-routing.module";
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ng2-bootstrap';
import {NgRestService} from "./rest/ng-rest";
import { AuthorFormComponent } from './author/author-form/author-form.component';
import {LodashModule} from "ng2-lodash/ng2-lodash";
import {ToasterModule} from "angular2-toaster";
import { AuthorListComponent } from './author/author-list/author-list.component';
import { ConfirmDialogComponent } from './util/confirm-dialog/confirm-dialog.component';
import {ModalModule} from "ng2-bootstrap/modal";
import { AuthorFormDialogComponent } from './author/author-form-dialog/author-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    AuthorFormComponent,
    AuthorListComponent,
    ConfirmDialogComponent,
    AuthorFormDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirstRoutingModule,
    AlertModule.forRoot(),
    ToasterModule,
    ModalModule.forRoot(),
    LodashModule
  ],
  providers: [NgRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
