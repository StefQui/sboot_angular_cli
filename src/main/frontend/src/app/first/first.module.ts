import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
