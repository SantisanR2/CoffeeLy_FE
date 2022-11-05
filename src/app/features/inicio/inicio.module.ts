import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioFincaComponent } from './inicio-finca/inicio-finca.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { RestService } from './services/rest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { InicioEmpresaComponent } from './inicio-empresa/inicio-empresa.component';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';
import { InterceptorInterceptor } from 'src/app/interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    InicioFincaComponent,
    InicioEmpresaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HttpClientModule, 
    NavFincaModule,
    NavEmpresaModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
    }, RestService]
})
export class InicioModule { }
