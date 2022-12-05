import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';
import { Maquina } from 'src/app/entities/maquina';

@Component({
  selector: 'app-create-lavado',
  templateUrl: './create-lavado.component.html',
  styleUrls: ['./create-lavado.component.scss']
})
export class CreateLavadoComponent implements OnInit {

  private url_createLavado = '/lavado/';
  private url_maquinas = '/maquina/All';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");

  public lista:Maquina[]|any=[];
  
  lavadoForm = this.fb.group({
    fechaInicio: new FormControl('' ,[Validators.required]),
    fechaFinal: new FormControl('' ,[Validators.required]),
    cantidadEntra: new FormControl('' ,[Validators.required]),
    cantidadSale: new FormControl('' ,[Validators.required]),
    cantidadAgua: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.RestService.get(this.url_maquinas)
    .subscribe(lista => {
      this.lista = lista;
    } )
  }
  
  submit() {
    this.crearLavado();
    this.router.navigate(['inicio/empresa']);
  }

  crearLavado() {
    this.lavadoForm.get('lote')?.setValue(Number(this.id_lote));
    this.lavadoForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    console.log(this.lavadoForm.value);
    this.RestService.post(this.url_createLavado, this.lavadoForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "Lavado";
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
