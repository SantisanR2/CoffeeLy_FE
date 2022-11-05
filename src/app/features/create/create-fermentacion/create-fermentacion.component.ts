import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-fermentacion',
  templateUrl: './create-fermentacion.component.html',
  styleUrls: ['./create-fermentacion.component.scss']
})
export class CreateFermentacionComponent implements OnInit {

  private url_createFermentacion = '/fermentacion/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");


  Tipos: any = ['Anaeróbica','Microorganismos','Maceración carbónica'];


  fermentacionForm = this.fb.group({
    fechaInicio: new FormControl('' ,[Validators.required]),
    fechaFinal: new FormControl('' ,[Validators.required]),
    cantidadEntra: new FormControl('' ,[Validators.required]),
    cantidadSale: new FormControl('' ,[Validators.required]),
    tempAmb: new FormControl('' ,[Validators.required]),
    tempGrano: new FormControl('' ,[Validators.required]),
    brix: new FormControl('' ,[Validators.required]),
    ph: new FormControl('' ,[Validators.required]),
    cantidadAgua: new FormControl('' ,[Validators.required]),
    tipo: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {


  }


  changeTipo(e: any) {
    this.Tipos?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get tipo() {
    return this.fermentacionForm.get('tipo');
  }


  info(){
    Swal.fire({
      html: ' <ul align="left"> <li> Fecha 1: Es la fecha y hora a la que empieza la fermentación. </li><br>' + 
      ' <li>Fecha 2: Es la fecha y hora a la que finaliza la fermentación. </li><br>' +
      ' <li>Mucilago: Es la cantidad de mucílago que entra al proceso, en kilogramos. </li><br>' +
      ' <li>Fermentado: Es la cantidad de fermentado que sale del proceso, en kilogramos. </li><br>' +
      ' <li>Temp. ambiente: Temperatura exterior promedio al momento de fermentar el lote, en °C. </li><br>' +
      ' <li>Temp. grano: Temperatura a la que se espera llegará el bache, medida en °C. </li><br>' +
      ' <li>°Brix: Azúcar disuelto en el fermentado. </li><br>' + 
      ' <li>pH: Indicador de alcalinidad o acidez del fermentado. </li><br>' + 
      ' <li>Agua: Cantidad de agua en la que se fermentó el bache.</li> <br>' + 
      ' <li>Tipo: Tipo de fermentacion empleada </li></ul>',
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
    this.crearFermentacion();
    this.router.navigate(['inicio/empresa']);
  }

  crearFermentacion() {
    this.fermentacionForm.get('lote')?.setValue(Number(this.id_lote));
    this.fermentacionForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createFermentacion, this.fermentacionForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "fermentación";
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
          title: 'Fermentación registrada correctamente'
        })
      } )
    } )
  }

}
