import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import Swal from 'sweetalert2';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private url_viewMaquina = "/maquina/";
  private url_updateMaquina = "/maquina/update/";
  private id_maquina = localStorage.getItem("maquina");
  
  maquinaForm = this.fb.group({
    marca: new FormControl('' ,[Validators.required]),
    modelo: new FormControl('' ,[Validators.required]),
  });


  constructor(private RestService: RestService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.updateMaquina();
    this.router.navigate(['administrar/maquinas']);
  }

  updateMaquina() {
    this.RestService.get(this.url_viewMaquina + this.id_maquina)
    .subscribe( (data: any) => {
      console.log(data);
      data.marca = this.maquinaForm.get('marca')?.value;
      data.modelo = this.maquinaForm.get('modelo')?.value;
      this.RestService.post(this.url_updateMaquina + this.id_maquina, data)
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
          title: 'Máquina editada correctamente'
        })
      } )
    } )
  }

}
