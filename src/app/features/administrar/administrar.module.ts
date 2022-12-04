import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarRecolectoresComponent } from './administrar-recolectores/administrar-recolectores.component';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from 'src/app/interceptor/interceptor.interceptor';
import { RestService } from './services/rest.service';
import { AdministrarRoutingModule } from './administrar-routing.module';
import { AdministrarOperariosComponent } from './administrar-operarios/administrar-operarios.component';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';
import { AdministrarMaquinasComponent } from './administrar-maquinas/administrar-maquinas.component';

@NgModule({
  declarations: [
    AdministrarRecolectoresComponent,
    AdministrarOperariosComponent,
    AdministrarMaquinasComponent
  ],
  imports: [
    CommonModule,
    NavFincaModule,
    NavEmpresaModule,
    HttpClientModule,
    AdministrarRoutingModule
  ],
  exports: [
    AdministrarRecolectoresComponent,
    AdministrarMaquinasComponent,
    AdministrarOperariosComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
    }, RestService]
})
export class AdministrarModule { }
