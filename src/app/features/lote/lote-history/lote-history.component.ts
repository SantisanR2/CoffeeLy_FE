import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lote-history',
  templateUrl: './lote-history.component.html',
  styleUrls: ['./lote-history.component.scss']
})
export class LoteHistoryComponent implements OnInit {

  public deleteLogoPath = '../../../../assets/deleteLogo.png';
  public podar = "../../../../assets/podar.png";
  public regar = "../../../../assets/regar.png";
  public fertilizar = "../../../../assets/fertilizar.png";
  public cosecharPath = "../../../../assets/cosechar.png";

  public podas:any;
  public riegos:any;
  public fertilizaciones:any;
  public siembras:any;
  public cosechas:any

  public isCosechado$: boolean;
  public id_lote = localStorage.getItem('lote');
  public fechaSiembra: string;
  public variedad: string;

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.poda();
    this.riego();
    this.fertilizacion();
    this.siembra();
    this.cosecha();
  }

  poda() {
    this.RestService.get('/poda/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.podas = respuesta;
      this.podas.forEach(function recortar(poda: any) {
        poda.fecha = poda.fecha.split('T', 2)[0];
      })
    } )
  }

  riego() {
    this.RestService.get('/riego/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.riegos = respuesta;
      this.riegos.forEach(function recortar(riego: any) {
        riego.fecha = riego.fecha.split('T', 2)[0];
      })
    } )
  }

  fertilizacion() {
    this.RestService.get('/fertilizacion/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.fertilizaciones = respuesta;
      this.fertilizaciones.forEach(function recortar(fertilizacion: any) {
        fertilizacion.fecha = fertilizacion.fecha.split('T', 2)[0];
      })
    } )
  }

  siembra() {
    this.RestService.get('/siembra/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.siembras = respuesta;
      this.siembras.forEach((siembra: any) => {
        siembra.fecha = siembra.fecha.split('T', 2)[0];
        console.log(siembra.fecha);
        this.fechaSiembra = siembra.fecha;
        siembra.semilla = siembra.semilla.split(':', 2)[1];
        this.variedad = siembra.semilla;
      })
    } )
  }

  cosecha() {
    this.RestService.get('/cosecha/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.cosechas = respuesta;
      this.cosechas.forEach(function recortar(cosecha: any) {
        cosecha.fecha = cosecha.fecha.split('T', 2)[0];
      })
    } )
  }

  irPoda() {
    this.router.navigate(['/create/poda']);
  }

  irRiego() {
    this.router.navigate(['/create/riego']);
  }

  irFertilizacion() {
    this.router.navigate(['/create/fertilizacion']);
  }

  irCosecha() {
    this.router.navigate(['/create/cosecha']);
  }

  deletePoda(id: string) {
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
        this.borrar(id, 'poda');
        swalWithBootstrapButtons.fire({
        title: 'Borrado!',
        text: 'La poda ha sido eliminada.',
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
          text: 'La poda está a salvo',
          icon: 'error',
          background: '#282726',
          color: '#C29F42',
        })
      }
    })
  }

  deleteRiego(id: string) {
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
        this.borrar(id, 'riego');
        swalWithBootstrapButtons.fire({
        title: 'Borrado!',
        text: 'El riego ha sido eliminado.',
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
          text: 'El riego está a salvo',
          icon: 'error',
          background: '#282726',
          color: '#C29F42',
        })
      }
    })
  }

  deleteFertilizacion(id: string) {
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
        this.borrar(id, 'fertilizacion');
        swalWithBootstrapButtons.fire({
        title: 'Borrado!',
        text: 'La fertilización ha sido eliminada.',
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
          text: 'La fertilización está a salvo',
          icon: 'error',
          background: '#282726',
          color: '#C29F42',
        })
      }
    })
  }

  borrar(id:string, entity:string) {
    this.RestService.delete('/' + entity + '/delete?id=' + id)
    .subscribe(respuesta => {
    } )
  }

  refresh() {
    window.location.reload();
  }
}
