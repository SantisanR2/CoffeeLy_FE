import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteHistoryComponent } from './lote-history/lote-history.component';
import { RestService } from './services/rest.service';
import { LoteRoutingModule } from './lote-routing.module';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoteEmpresaComponent } from './lote-history/lote-empresa/lote-empresa.component';
import { NavEmpresaComponent } from 'src/app/shared/nav-empresa/nav-empresa/nav-empresa.component';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';



@NgModule({
  declarations: [
    LoteEditComponent,
    LoteHistoryComponent,
    LoteEmpresaComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule,
    NavFincaModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavEmpresaModule,
  ],
  exports: [
    LoteEditComponent,
    LoteHistoryComponent
  ],
  providers: [RestService]
})
export class LoteModule { }
