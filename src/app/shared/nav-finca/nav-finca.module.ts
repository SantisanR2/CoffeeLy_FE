import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavFincaComponent } from './nav-finca/nav-finca.component';



@NgModule({
  declarations: [
    NavFincaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavFincaComponent
  ]
})
export class NavFincaModule { }
