import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SuperuserRoutingModule } from './superuser-routing.module';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule,
    HttpClientModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [RestService]
})
export class SuperuserModule { }
