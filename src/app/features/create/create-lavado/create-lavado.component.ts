import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-lavado',
  templateUrl: './create-lavado.component.html',
  styleUrls: ['./create-lavado.component.scss']
})
export class CreateLavadoComponent implements OnInit {

  private url_createLavado = '/lavado/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  lavadoForm = this.fb.group({
    fecha1: new FormControl('' ,[Validators.required]),
    fecha2: new FormControl('' ,[Validators.required]),
    mucilago1: new FormControl('' ,[Validators.required]),
    mucilago2: new FormControl('' ,[Validators.required]),
    agua: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearLavado();
    this.router.navigate(['inicio/empresa']);
  }

  crearLavado() {
    this.lavadoForm.get('lote')?.setValue(Number(this.id_lote));
    this.lavadoForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createLavado, this.lavadoForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "lavado";
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
          title: 'Lavado registrado correctamente'
        })
      } )
    } )
  }
}
