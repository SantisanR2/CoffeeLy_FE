import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SuperuserRoutingModule } from './superuser-routing.module';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule,
    HttpClientModule,
    NavEmpresaModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [RestService]
})
export class SuperuserModule { }
