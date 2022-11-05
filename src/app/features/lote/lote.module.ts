import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteHistoryComponent } from './lote-history/lote-history.component';
import { RestService } from './services/rest.service';
import { LoteRoutingModule } from './lote-routing.module';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoteEditComponent,
    LoteHistoryComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule,
    NavFincaModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoteEditComponent,
    LoteHistoryComponent
  ],
  providers: [RestService]
})
export class LoteModule { }
