import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-seleccion',
  templateUrl: './create-seleccion.component.html',
  styleUrls: ['./create-seleccion.component.scss']
})
export class CreateSeleccionComponent implements OnInit {

  private url_createSeleccion = '/seleccion/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  seleccionForm = this.fb.group({
    fecha: new FormControl('' ,[Validators.required]),
    cantidadEntra: new FormControl('' ,[Validators.required]),
    cantidadSale: new FormControl('' ,[Validators.required]),
    defectuoso: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearSeleccion();
    this.router.navigate(['inicio/empresa']);
  }

  crearSeleccion() {
    this.seleccionForm.get('lote')?.setValue(Number(this.id_lote));
    this.seleccionForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createSeleccion, this.seleccionForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "selección";
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
          title: 'Selección registrada correctamente'
        })
      } )
    } )
  }

}
