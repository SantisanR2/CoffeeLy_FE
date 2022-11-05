import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-molienda',
  templateUrl: './create-molienda.component.html',
  styleUrls: ['./create-molienda.component.scss']
})
export class CreateMoliendaComponent implements OnInit {

  private url_createMolienda = '/molienda/';
  private url_viewLote = "/lote/";
  private url_updateLote = "/lote/update/";
  private id_lote = localStorage.getItem("lote");
  
  moliendaForm = this.fb.group({
    fechaInicio: new FormControl('' ,[Validators.required]),
    fechaFinal: new FormControl('' ,[Validators.required]),
    cantidadEntra: new FormControl('' ,[Validators.required]),
    cantidadSale: new FormControl('' ,[Validators.required]),
    maquina: new FormControl('' ,[Validators.required]),
    lote: new FormControl(),
    user: new FormControl(),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    this.crearMolienda();
    this.router.navigate(['inicio/empresa']);
  }

  crearMolienda() {
    this.moliendaForm.get('lote')?.setValue(Number(this.id_lote));
    this.moliendaForm.get('user')?.setValue(Number(localStorage.getItem('user_id')));
    this.RestService.post(this.url_createMolienda, this.moliendaForm.value)
    .subscribe( (data: any) => {
    } )
    this.updateLote();
  }

  updateLote() {
    this.RestService.get(this.url_viewLote + this.id_lote)
    .subscribe( (data: any) => {
      console.log(data);
      data.estado = "molienda";
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
          title: 'Molienda registrada correctamente'
        })
      } )
    } )
  }

}
