import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-empresa',
  templateUrl: './nav-empresa.component.html',
  styleUrls: ['./nav-empresa.component.scss']
})
export class NavEmpresaComponent implements OnInit {

  public logoPath = '/assets/Logo.png';
  public inicioPath = '/inicio/empresa';
  public isAdmin: boolean;
  public username = localStorage.getItem("username");

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") == "4")
    {
      this.isAdmin = true;
    }
    else 
    {
      this.isAdmin = false;
    }
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

  administrarFincas() {
    this.router.navigate(['#']);
  }

  administrarMaquinas() {
    this.router.navigate(['administrar/maquinas']);
  }

  administrarOperarios() {
    this.router.navigate(['administrar/operarios']);
  }
}
