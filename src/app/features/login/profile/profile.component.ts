import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../services/login-services.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public isFinca$:boolean = false;

  public user:any;
  public url_img = '';
  public rol:string;

  constructor(private RestService:LoginServicesService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.RestService.get_token('/user/' + localStorage.getItem("user_id") as string, localStorage.getItem("token_access") as string).toPromise()
    .then(resp => {this.user = resp});
    if(localStorage.getItem("role") == '1') {
      this.url_img = '../../assets/recolector 2.png';
      this.rol = 'Recolector';
    } else if(localStorage.getItem("role") == '2') {
      this.url_img = '../../assets/administrador finca 2.png';
      this.rol = 'Dueño de la finca';
    } else if(localStorage.getItem("role") == '3') {
      this.url_img = '../../assets/operario maquinas 2.png';
      this.rol = 'Operario';
    } else if(localStorage.getItem("role") == '4') {
      this.url_img = '../../assets/administrador maquinas 2.png';
      this.rol = 'Administrador de la empresa';
    }
    if (localStorage.getItem("role") == '1' || localStorage.getItem("role") == '2') {
      this.isFinca$ = true;
    }
  }
}
