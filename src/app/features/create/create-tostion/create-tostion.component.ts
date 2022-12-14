import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';
import { Maquina } from 'src/app/entities/maquina';

@Component({
  selector: 'app-create-tostion',
  templateUrl: './create-tostion.component.html',
  styleUrls: ['./create-tostion.component.scss']
})
export class CreateTostionComponent implements OnInit {

  private url_createTostion = '/tostion/';
  private url_maquinas = '/maquina/All';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");

  file: File | any = null;

  public lista:Maquina[]|any=[]; 

  tostionForm = this.fb.group({
    fecha: new FormControl('' ,[Validators.required]),
    cantidadEntra: new FormControl('' ,[Validators.required]),
    cantidadSale: new FormControl('' ,[Validators.required]),
    tempInicio: new FormControl('' ,[Validators.required]),
    tiempo1: new FormControl('' ,[Validators.required]),
    temp1: new FormControl('' ,[Validators.required]),
    tiempo2: new FormControl('' ,[Validators.required]),
    temp2: new FormControl('' ,[Validators.required]),
    tiempoPromedio: new FormControl('' ,[Validators.required]),
    tempPromedio: new FormControl('' ,[Validators.required]),
    aromas: new FormControl('' ,[Validators.required]),
    agtron: new FormControl('' ,[Validators.required]),
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

  info(){
    Swal.fire({
      html: ' <ul align="left"> <li> <b> Fecha </b>: Es la fecha y hora a la que empieza la tostión. </li><br>' + 
      ' <li>Entrada: Es la cantidad de masa que entra al proceso, en kg. </li><br>' +
      ' <li>Salida: Es la cantidad de masa que sale del proceso, en kg. </li><br>' + 
      ' <li>Temp. Ingreso: Temperatura del grano antes de entrar al tostado, se reporta en °C. </li><br>' +
      ' <li>Tiempo 1: Tiempo del primer crack, reportado en minutos. </li><br>' +
      ' <li>Temp. 1: Temperatura del primer crack, en °C. </li><br>' +
      ' <li>Tiempo 2: Tiempo del segundo crack, reportado en minutos. </li><br>' +
      ' <li>Temp. 2: Temperatura del segundo crack, en °C. </li><br>' +
      ' <li>Tiempo prom.: Tiempo promedio por bache, reportado en minutos. </li><br>' +
      ' <li>Temp prom.: Temperatura promedio por bache. </li><br>' +
      ' <li># batches: Número de baches usados. </li><br>' +
      ' <li>Agtron: Medida de la SCA para el tueste del grano, entre 25-45 Oscuro. </li><br>' +
      ' <li>Aromas: Selección de aromas de la SCA, separados por comas. </li> <br>' ,
      background:'#282726',
      color: '#C29F42',
      showConfirmButton: true,
      heightAuto: true,
      width: 'auto',
      imageUrl:'../../../../assets/info.png',
      imageHeight: '100px',
      scrollbarPadding:false,
  })
  }

  submit() {
    this.crearTostion();
    this.router.navigate(['inicio/empresa']);
  }

  crearTostion() {
    this.tostionForm.get('lote')?.setValue(Number(this.id_lote));
    this.tostionForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    console.log(this.tostionForm.value);
    this.RestService.post(this.url_createTostion, this.tostionForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  onChange(event:any) {
    this.file = event.target.files[0];
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "Tostado";
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
          title: 'Tostión registrada correctamente'
        })
      } )
    } )
  }
}
