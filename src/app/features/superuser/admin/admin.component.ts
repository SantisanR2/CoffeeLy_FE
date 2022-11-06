import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public csv = "../../../../assets/csv.png";
  public sembrar = "../../../../assets/sembrar.png";

  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    
  }

  user() {
    var url_download = "/user/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_usuarios";
      a.click();
      })
  }

  finca() {
    var url_download = "/finca/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_fincas";
      a.click();
      })
  }

  cosecha() {
    var url_download = "/cosecha/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_cosechas";
      a.click();
      })
  }

  despulpado() {
    var url_download = "/despulpado/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_despulpados";
      a.click();
      })
  }

  fermentacion() {
    var url_download = "/fermentacion/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_fermentaciones";
      a.click();
      })
  }

  fertilizacion() {
    var url_download = "/fertilizacion/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_fertilizaciones";
      a.click();
      })
  }

  lavado() {
    var url_download = "/lavado/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_lavados";
      a.click();
      })
  }

  lote() {
    var url_download = "/lote/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_lotes";
      a.click();
      })
  }

  maquina() {
    var url_download = "/maquina/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_maquinas";
      a.click();
      })
  }

  molienda() {
    var url_download = "/molienda/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_trillas";
      a.click();
      })
  }

  poda() {
    var url_download = "/poda/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_podas";
      a.click();
      })
  }

  riego() {
    var url_download = "/riego/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_riegos";
      a.click();
      })
  }

  secado() {
    var url_download = "/secado/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_secados";
      a.click();
      })
  }

  seleccion() {
    var url_download = "/seleccion/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_selecciones";
      a.click();
      })
  }

  siembra() {
    var url_download = "/siembra/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_siembras";
      a.click();
      })
  }

  tostion() {
    var url_download = "/tostion/download";

    this.RestService.get(url_download)
    .subscribe(respuesta => {
      var data:any = respuesta;
      var datos = [data];
      const blob = new Blob(datos, { type: 'text/csv' });
      const url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      var dateDay = new Date();
      a.download = dateDay.getDate().toString() + "-" + (dateDay.getMonth()+1).toString() + "-" + dateDay.getFullYear().toString() + "_tostiones";
      a.click();
      })
  }

}
