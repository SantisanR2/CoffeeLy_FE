import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { NavModule } from 'src/app/shared/nav/nav.module';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginServicesService } from './services/login-services.service';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NavModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavEmpresaModule,
    NavFincaModule,
    FooterModule
  ],
  providers: [LoginServicesService]
})
export class LoginModule { }
