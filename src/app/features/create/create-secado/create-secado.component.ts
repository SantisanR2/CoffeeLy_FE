import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-secado',
  templateUrl: './create-secado.component.html',
  styleUrls: ['./create-secado.component.scss']
})
export class CreateSecadoComponent implements OnInit {

  private url_createSecado = '/secado/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  secadoForm = this.fb.group({
    fechaInicio: new FormControl('' ,[Validators.required]),
    fechaFinal: new FormControl('' ,[Validators.required]),
    tempAmb: new FormControl('' ,[Validators.required]),
    tempGrano: new FormControl('' ,[Validators.required]),
    humedad: new FormControl('' ,[Validators.required]),
    densidad: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearSecado();
    this.router.navigate(['inicio/empresa']);
  }

  crearSecado() {
    this.secadoForm.get('lote')?.setValue(Number(this.id_lote));
    this.secadoForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createSecado, this.secadoForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "secado";
      this.RestService.post(this.url_updateLote + this.id_lote, data)
      .subscribe( (resp: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          background: '#282726',
          color: '#C29F42',
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Secado registrado correctamente'
        })
      } )
    } )
  }

}
