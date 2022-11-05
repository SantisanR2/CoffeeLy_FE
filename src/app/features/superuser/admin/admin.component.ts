import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

}
