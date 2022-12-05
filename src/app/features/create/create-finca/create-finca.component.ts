import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-finca',
  templateUrl: './create-finca.component.html',
  styleUrls: ['./create-finca.component.scss']
})
export class CreateFincaComponent implements OnInit {

  private url_createFinca = '/finca/';
  private id_finca = 0;
  
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

  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  submit(){
    this.crearFinca();
    localStorage.setItem('isCreatingFinca', true.toString())
    this.router.navigate(['/login/register']);
  }

  crearFinca(){
    this.RestService.post(this.url_createFinca, this.fincaForm.value)
    .subscribe( (data: any) => {
        console.log(data);
        this.id_finca = data;
        console.log(this.id_finca);
        localStorage.setItem('idFincaCreating',data.toString());
    } )
  }

  refresh() {
    window.location.reload();
  }

}
