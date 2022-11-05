import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-poda',
  templateUrl: './create-poda.component.html',
  styleUrls: ['./create-poda.component.scss']
})
export class CreatePodaComponent implements OnInit {

  private url_createPoda = '/poda/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  podaForm = this.fb.group({
    fecha: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearPoda();
    this.router.navigate(['inicio/finca']);
  }

  crearPoda() {
    this.podaForm.get('lote')?.setValue(Number(this.id_lote));
    this.podaForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createPoda, this.podaForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "poda";
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
          title: 'Poda registrada correctamente'
        })
      } )
    } )
  }
}
