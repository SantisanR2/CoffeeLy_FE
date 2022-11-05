import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavModule } from '../shared/nav/nav.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from '../interceptor/interceptor.interceptor';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavModule,
    FooterModule
  ],
  exports: [PageComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
    }]
})
export class HomeModule { }
