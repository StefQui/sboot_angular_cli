import {NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from "../page1/page1.component";
import {Page2Component} from "../page2/page2.component";
import {HomeComponent} from "../home/home.component";
import {AuthorListComponent} from "../author/author-list/author-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'authorList', component: AuthorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: [
  ]
})
export class FirstRoutingModule { }
