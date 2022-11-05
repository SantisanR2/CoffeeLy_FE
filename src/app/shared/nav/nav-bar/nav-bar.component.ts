import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public logoPath = "/assets/Logo.png";
  public isLogged$: boolean;
  public username = ""

  constructor(private storageService: StorageService, private router: Router) {
    this.isLogged$ = (localStorage.getItem("isAuth") === "true");
    this.username = localStorage.getItem("username") as string;
  }

  ngOnInit(): void {
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['home']).then(this.refresh);    
  }

  refresh(){
    window.location.reload();
  }

  inicio() {
    if(localStorage.getItem("isAuth")) {
      if(localStorage.getItem("role") == "2" || "1") {
        this.router.navigate(['inicio/finca']);
      }
      else {
        this.router.navigate(['inicio/empresa']);
      }
    }
  }

  perfil() {
    this.router.navigate(['login/profile']);
  }

  login() {
    this.router.navigate(['login/login']);
  }
}
