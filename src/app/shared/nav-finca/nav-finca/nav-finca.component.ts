import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-finca',
  templateUrl: './nav-finca.component.html',
  styleUrls: ['./nav-finca.component.scss']
})
export class NavFincaComponent implements OnInit {

  public logoPath = '/assets/Logo.png';
  public inicioPath = '/inicio/finca';
  public username = '';
  public isAdmin: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") == "2")
    {
      this.isAdmin = true;
    }
    else 
    {
      this.isAdmin = false;
    }
    this.username = localStorage.getItem("username") as string;
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['home']).then(this.refresh);    
  }

  refresh(){
    window.location.reload();
  }

  perfil(){
    this.router.navigate(['login/profile']);
  }

  administrar() {
    this.router.navigate(['administrar/recolectores']);
  }
}
