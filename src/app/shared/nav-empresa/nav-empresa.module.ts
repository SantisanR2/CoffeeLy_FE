import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavEmpresaComponent } from './nav-empresa/nav-empresa.component';



@NgModule({
  declarations: [
    NavEmpresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavEmpresaComponent
  ]
})
export class NavEmpresaModule { }
