import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-finca',
  templateUrl: './inicio-finca.component.html',
  styleUrls: ['./inicio-finca.component.scss']
})
export class InicioFincaComponent implements OnInit {
  
  public respuesta:any;

  public user:any;

  private id_lote = localStorage.getItem("lote");
  private url_deleteLote = '/lote/delete?id=';

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    const vistaLotes = '/lote/All?id=';
    this.RestService.get_token('/user/'+localStorage.getItem("user_id") as string, localStorage.getItem("token_access") as string)
    .subscribe(respuesta => {
      this.user = respuesta;
      this.cargarlotes(vistaLotes+this.user.finca);
    } )
  }

  cargarlotes(ruta:string)
  {
    this.RestService.get(ruta)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
    } )
  }

  detail(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    this.router.navigate(['lote/history']).then(this.refresh);  
  }

  edit(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    this.router.navigate(['lote/edit']).then(this.refresh);  
  }

  delete(id:string)
  {
    this.storageService.setStorageItem({key: "lote", value: id, storageArea: "localStorage" });
    
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
        this.borrar();
        swalWithBootstrapButtons.fire({
        title: 'Borrado!',
        text: 'El lote ha sido eliminado.',
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
          text: 'El lote está a salvo',
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

  borrar() {
    this.RestService.delete(this.url_deleteLote + this.id_lote)
    .subscribe(respuesta => {
    } )
  }

  nuevo() {
    this.router.navigate(['create/siembra']).then(this.refresh);
  }
}
