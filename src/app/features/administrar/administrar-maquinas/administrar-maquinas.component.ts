import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrar-maquinas',
  templateUrl: './administrar-maquinas.component.html',
  styleUrls: ['./administrar-maquinas.component.scss']
})
export class AdministrarMaquinasComponent implements OnInit {
  public deleteLogoPath = '../../assets/deleteLogo.png';
  public respuesta:any;
  public maquina:any;

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.RestService.get_token('/maquina/All', localStorage.getItem("token_access") as string)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(respuesta);
      this.maquina = this.cargarMaquinas('/maquina/All');
    } )
  }

  cargarMaquinas(ruta:string)
  {
    this.RestService.get(ruta)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
    } )
  }

  nuevo(){
    this.router.navigate(['create/maquina']).then(this.refresh); 
  }

  edit(id:string)
  {
    this.storageService.setStorageItem({key: "maquina", value: id, storageArea: "localStorage" });
    this.router.navigate(['create/maquina/edit']).then(this.refresh);  
  }

  delete(id:string)
  { 
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: "No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
      background: '#282726',
      color: '#C29F42',
    }).then((result) => {
        if (result.isConfirmed) {
          this.borrar(id),
          swalWithBootstrapButtons.fire({
          title: 'En proceso...',
          text: 'La máquina está siendo eliminada',
          confirmButtonText: 'Aceptar',
          background: '#282726',
          color: '#C29F42',
        }).then((result) => {
            if(result.isConfirmed){
              Swal.fire({
                title:'Proceso exitoso',
                text:'La máquina ha sido eliminada!',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                background: '#282726',
                color: '#C29F42',
              })
            this.refresh()  
          }
        })
        }
        else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'La máquina está a salvo',
            icon: 'error',
            background: '#282726',
            color: '#C29F42',
          })
        }
    })
  }

  refresh() {
    window.location.reload();
  }

  borrar(id:string) {
    this.RestService.delete('/maquina/delete?id= ' + id)
    .subscribe(respuesta => {
    } )
  }
}