import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga/carga.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { CargaRoutingModule } from './carga-archivos-routing.module';



@NgModule({
  declarations: [
    CargaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CargaRoutingModule
  ],
  exports: [
    CargaComponent
  ],
  providers: [
    RestService
  ]
})
export class CargaArchivosModule { }
