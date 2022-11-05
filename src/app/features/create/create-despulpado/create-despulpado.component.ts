import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-despulpado',
  templateUrl: './create-despulpado.component.html',
  styleUrls: ['./create-despulpado.component.scss']
})
export class CreateDespulpadoComponent implements OnInit {

  private url_createDespulpado = '/despulpado/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  despulpadoForm = this.fb.group({
    fechaInicio: new FormControl('' ,[Validators.required]),
    fechaFinal: new FormControl('' ,[Validators.required]),
    cantidadCafe: new FormControl('' ,[Validators.required]),
    cantidadMucilago: new FormControl('' ,[Validators.required]),
    cantidadAgua: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearDespulpado();
    this.router.navigate(['inicio/empresa']);
  }

  crearDespulpado() {
    this.despulpadoForm.get('lote')?.setValue(Number(this.id_lote));
    this.despulpadoForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createDespulpado, this.despulpadoForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "despulpado";
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
          title: 'Despulpado registrado correctamente'
        })
      } )
    } )
  }

}
