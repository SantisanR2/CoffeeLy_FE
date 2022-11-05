import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-siembra',
  templateUrl: './create-siembra.component.html',
  styleUrls: ['./create-siembra.component.scss']
})
export class CreateSiembraComponent implements OnInit {

  private finca_id: any;
  private lote_id: any;

  private url_createLote = "/lote/";
  private url_createSiembra = "/siembra/";

  private lote: Object;

  // Definir variedades tratadas en Cumbres Sacras
  Semillas: any = ['Típica', 'Borbón', 'Maragogipe', 'Tabi', 'Caturra', 'Colombia', 'Castillo'];

  siembraForm = this.fb.group({
    fecha: new FormControl('' ,[Validators.required]),
    distancia: new FormControl('' ,[Validators.required]),
    semilla: new FormControl('' ,[Validators.required]),
    profundidad: new FormControl('' ,[Validators.required]),
    inclinacion: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });

  constructor(private RestService: RestService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.finca_id = localStorage.getItem("finca");
    this.lote = {
      "cantidad": 0,
      "finca": Number(this.finca_id)
    };
  }

  submit() {
    this.createLote();
    this.router.navigate(['inicio/finca']);
  }

  changeSemilla(e: any) {
    this.semilla?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get semilla() {
    return this.siembraForm.get('semilla');
  }

  createLote() {
    this.RestService.post(this.url_createLote, this.lote)
    .subscribe( (data: any) => {
      this.lote_id = data.id;
      this.siembraForm.get('lote')?.setValue(Number(data.id));
      this.siembraForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
      localStorage.setItem('lote', this.lote_id);
      this.createSiembra(Number(data.id));
    } )
  }

  createSiembra(num: any) {
    this.siembraForm.get('lote')?.setValue(num);
    console.log(this.siembraForm.value)
    this.RestService.post(this.url_createSiembra, this.siembraForm.value)
    .subscribe( (data: any) => {
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
        title: 'Lote creado correctamente'
      })
    } )
  }
}