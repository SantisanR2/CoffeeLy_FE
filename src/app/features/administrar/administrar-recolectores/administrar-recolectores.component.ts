import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrar-recolectores',
  templateUrl: './administrar-recolectores.component.html',
  styleUrls: ['./administrar-recolectores.component.scss']
})
export class AdministrarRecolectoresComponent implements OnInit {

  public deleteLogoPath = '../../assets/deleteLogo.png';

  public respuesta:any;

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.RestService.get_token('/users/', localStorage.getItem("token_access") as string)
    .subscribe(respuesta => {
      this.respuesta = Object.values(respuesta)[3];
      this.respuesta = this.respuesta.filter((item:any) => item.id != localStorage.getItem("user_id"));
    } )
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
        this.borrar(id);
        swalWithBootstrapButtons.fire({
        title: 'Borrado!',
        text: 'El recolector ha sido eliminado.',
        icon: 'success',
        background: '#282726',
        color: '#C29F42',
      })
        this.refresh();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelado',
          text: 'El recolector está a salvo',
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
    this.RestService.delete('/user/delete?id=' + id)
    .subscribe(respuesta => {
    } )
  }
}
