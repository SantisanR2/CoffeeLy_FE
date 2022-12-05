import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServicesService } from '../services/login-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public isFinca$ = false;

  registerForm = this.fb.group({
    name: ['', Validators.required],
    correo: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    cedula: ['', Validators.required],
    celular: ['', Validators.required],
    fecha: ['', Validators.required],
    finca: [''],
  });

  constructor(private loginService: LoginServicesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("role") == '2'|| localStorage.getItem("role") == '1') {
      this.isFinca$ = true;
    }
  }

  submit(){
    if(this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value){
      Swal.fire({
        title: 'Las contraseñas no coinciden',
        icon: 'error',
        background: '#282726',
        color: '#C29F42'
      })
      return
    }

    const data : FormData = new FormData();
    data.append("name", this.registerForm.controls['name'].value);
    data.append("password", this.registerForm.controls['password'].value);
    data.append("correo", this.registerForm.controls['correo'].value);
    if(localStorage.getItem("role") == '2') {
      data.append("finca", localStorage.getItem("finca") as string);
    } else if (localStorage.getItem('isCreatingFinca') == 'true') {
      data.append("finca", localStorage.getItem("idFincaCreating") as string);
    }
    data.append("cedula", this.registerForm.controls['cedula'].value);
    data.append("celular", this.registerForm.controls['celular'].value);
    data.append("fecha", this.registerForm.controls['fecha'].value);
    if(localStorage.getItem("role") == '2') {
      data.append("role", "1");
    } else if (localStorage.getItem("role") == '4') {
      data.append("role", "3");
    }
    else if (localStorage.getItem("role") == '4' && localStorage.getItem('isCreatingFinca') == 'true') {
      data.append("role", "2");
    }
    console.log(data.get)
    this.loginService.register(data).subscribe( (data: any) =>  this.completedLogIn(data),
    (error: any) => {                              
      console.error('error caught in component', error)
      Swal.fire({
        title: 'Registro fallido',
        icon: 'error',
        background: '#282726',
        color: '#C29F42'
      });
    })    
  }

  completedLogIn(data: any) {
    Swal.fire({
      title: 'Registro exitoso',
      icon: 'success',
      background: '#282726',
      color: '#C29F42'
    });
    if(localStorage.getItem('role') == '2') {
      this.router.navigate(['inicio/finca']); 
    } else if (localStorage.getItem('role') == '4') {
      this.router.navigate(['inicio/empresa']);
    }
  }

  refresh(){
    window.location.reload();
  }

}
