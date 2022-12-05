import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import Swal from 'sweetalert2';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-editf',
  templateUrl: './editf.component.html',
  styleUrls: ['./editf.component.scss']
})
export class EditfComponent implements OnInit {

  private url_viewFinca = "/finca/";
  private url_updateFinca = "/finca/update/";
  private id_finca = localStorage.getItem("finca");
  
  fincaForm = this.fb.group({
    nombre: new FormControl('' ,[Validators.required]),
    ubicacion: new FormControl('' ,[Validators.required]),
    altitud: new FormControl('' ,[Validators.required]),
    clima: new FormControl('' ,[Validators.required]),
    inclinacion: new FormControl('' ,[Validators.required]),
    lumenes: new FormControl('' ,[Validators.required]),
    coordenadas: new FormControl('' ,[Validators.required]),
    tierra: new FormControl('' ,[Validators.required]),
    ph: new FormControl('' ,[Validators.required]),
    cultivos: new FormControl('' ,[Validators.required]),
    microorganismos: new FormControl('' ,[Validators.required]),
  });

  constructor(private RestService: RestService, private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }


  submit(){
    this.updateFinca();
    this.router.navigate(['administrar/fincas']);
  }

  updateFinca(){
    this.RestService.get(this.url_viewFinca + this.id_finca)
    .subscribe( (data: any) => {
      console.log(data);
      data.nombre = this.fincaForm.get('nombre')?.value;
      data.ubicacion = this.fincaForm.get('ubicacion')?.value;
      data.altitud = this.fincaForm.get('altitud')?.value;
      data.clima = this.fincaForm.get('clima')?.value;
      data.inclinacion = this.fincaForm.get('inclinacion')?.value;
      data.lumenes = this.fincaForm.get('lumenes')?.value;
      data.coordenadas = this.fincaForm.get('coordenadas')?.value;
      data.tierra = this.fincaForm.get('tierra')?.value;
      data.ph = this.fincaForm.get('ph')?.value;
      data.cultivos = this.fincaForm.get('cultivos')?.value;
      data.microorganismos = this.fincaForm.get('microorganismos')?.value;
      console.log(data);
      this.RestService.post(this.url_updateFinca + this.id_finca, data)
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
          title: 'Finca editada correctamente'
        })
      } )
    } )
  }
  refresh() {
    window.location.reload();
  }

}
