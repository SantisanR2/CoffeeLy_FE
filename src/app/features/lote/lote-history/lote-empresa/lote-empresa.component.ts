import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { StorageService } from 'src/app/core/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lote-empresa',
  templateUrl: './lote-empresa.component.html',
  styleUrls: ['./lote-empresa.component.scss']
})
export class LoteEmpresaComponent implements OnInit {
  public deleteLogoPath = '../../../../assets/deleteLogo.png';
  public cosecharPath = "../../../../assets/cosechar.png";

  public podas:any;
  public riegos:any;
  public fertilizaciones:any;
  public siembras:any;
  public cosechas:any;
  public despulpados:any;
  public lavados:any;
  public fermentaciones:any;
  public secados:any;
  public moliendas:any;
  public selecciones:any;
  public tostiones:any;
  public cataciones:any;

  public isCosechado$: boolean;
  public id_lote = localStorage.getItem('lote');
  public fechaSiembra: string;
  public variedad: string;
  public fechaCosecha: string;
  public cosechado: string;

  constructor(private RestService:RestService,  private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.poda();
    this.riego();
    this.fertilizacion();
    this.siembra();
    this.cosecha();
    this.despulpado();
    this.lavado();
    this.fermentacion();
    this.secado();
    this.molienda();
    this.seleccion();

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
      this.cosechas.forEach((cosecha: any) => {
        cosecha.fecha = cosecha.fecha.split('T', 2)[0];
        this.fechaCosecha = cosecha.fecha;
        this.cosechado = cosecha.cantidad;
      })
    } )
  }


  despulpado() {
    this.RestService.get('/despulpado/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.despulpados = respuesta;
      this.despulpados.forEach(function recortar(despulpado: any) {
        despulpado.fechaInicio = despulpado.fechaInicio.split('T', 2)[0];
        despulpado.fechaFinal = despulpado.fechaFinal.split('T', 2)[0];
      })
    } )
  }

  lavado() {
    this.RestService.get('/lavado/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.lavados = respuesta;
      this.lavados.forEach(function recortar(lavado: any) {
        lavado.fechaInicio = lavado.fechaInicio.split('T', 2)[0];
        lavado.fechaFinal = lavado.fechaFinal.split('T', 2)[0];
        lavado.cantidadAgua = lavado.cantidadAgua;
      })
    } )
  }

  fermentacion() {
    this.RestService.get('/fermentacion/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.fermentaciones = respuesta;
      this.fermentaciones.forEach(function recortar(fermentacion: any) {
        fermentacion.fechaInicio = fermentacion.fechaInicio.split('T', 2)[0];
        fermentacion.fechaFinal = fermentacion.fechaFinal.split('T', 2)[0];
      })
    } )
  }

  secado() {
    this.RestService.get('/secado/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.secados = respuesta;
      this.secados.forEach(function recortar(secado: any) {
        secado.fechaInicio = secado.fechaInicio.split('T', 2)[0];
        secado.fechaFinal = secado.fechaFinal.split('T', 2)[0];
      })
    } )
  }

  molienda() {
    this.RestService.get('/molienda/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.moliendas = respuesta;
      this.moliendas.forEach(function recortar(molienda: any) {
        molienda.fechaInicio = molienda.fechaInicio.split('T', 2)[0];
        molienda.fechaFinal = molienda.fechaFinal.split('T', 2)[0];
      })
    } )
  }

  seleccion() {
    this.RestService.get('/seleccion/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.selecciones = respuesta;
      this.selecciones.forEach(function recortar(seleccion: any) {
        seleccion.fecha= seleccion.fecha.split('T', 2)[0];
      })
    } )
  }

  tostion() {
    this.RestService.get('/tostion/All?id=' + this.id_lote)
    .subscribe(respuesta => {
      this.tostiones = respuesta;
      this.tostiones.forEach(function recortar(tostion: any) {
        tostion.fecha= tostion.fecha.split('T', 2)[0];
      })
    } )
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
