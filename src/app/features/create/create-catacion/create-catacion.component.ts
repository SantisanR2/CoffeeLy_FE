import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-catacion',
  templateUrl: './create-catacion.component.html',
  styleUrls: ['./create-catacion.component.scss']
})
export class CreateCatacionComponent implements OnInit {

  private url_createCatacion = '/catacion/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  catacionForm = this.fb.group({
    fecha: new FormControl('' ,[Validators.required]),
    tiempo1: new FormControl('' ,[Validators.required]),
    tiempo2: new FormControl('' ,[Validators.required]),
    tiempo3: new FormControl('' ,[Validators.required]),
    puntaje: new FormControl('' ,[Validators.required]),
    curva: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearCatacion();
    this.router.navigate(['inicio/empresa']);
  }

  crearCatacion() {
    this.catacionForm.get('lote')?.setValue(Number(this.id_lote));
    this.catacionForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createCatacion, this.catacionForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "catación";
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
          title: 'Catación registrada correctamente'
        })
      } )
    } )
  }

}
