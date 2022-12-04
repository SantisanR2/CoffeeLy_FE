import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import { LoginServicesService } from '../services/login-services.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  correo = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  loginForm = this.fb.group({
    correo: this.correo,
    password: this.password
  });

  constructor(private loginService: LoginServicesService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    
  }

  submit(){
    this.loginService.login(this.loginForm.value).subscribe( (data: any) =>  this.completedLogIn(data),
    (error: any) => {                              
      console.error('error caught in component', error)
      Swal.fire({
        title: 'Autenticación fallida',
        icon: 'error',
        background: '#282726',
        color: '#C29F42'
      })
    })    
    console.log(this.loginForm.value)
  }

  completedLogIn(data: any) {
    console.log(data)
    this.storageService.setStorageItem({key: "isAuth", value: "true", storageArea: "localStorage" });
    this.storageService.setStorageItem({key: "username", value: data.name, storageArea: "localStorage" });
    this.storageService.setStorageItem({key: "token_access", value: data.access, storageArea: "localStorage" });
    this.storageService.setStorageItem({key: "token_refresh", value: data.refresh, storageArea: "localStorage" });
    this.storageService.setStorageItem({key: "user_id", value: data.id, storageArea: "localStorage" });
    this.storageService.setStorageItem({key: "role", value: data.role, storageArea: "localStorage" }); 

    if(data.is_superuser) 
    {
      this.router.navigate(['/superuser/admin']);
    }
    else if(data.role == 1 || data.role == 2)
    {
      this.storageService.setStorageItem({key: "finca", value: data.finca, storageArea: "localStorage" });
      this.router.navigate(['/inicio/finca']).then(this.refresh); 
    }
    else if (data.role == 3 || data.role == 4)
    {
      this.router.navigate(['/inicio/empresa']).then(this.refresh); 
    }
  }

  refresh(){
    window.location.reload();
  }

}
