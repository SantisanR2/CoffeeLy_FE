import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-create-maquina',
  templateUrl: './create-maquina.component.html',
  styleUrls: ['./create-maquina.component.scss']
})

export class CreateMaquinaComponent implements OnInit {

  private url_createMaquina = '/maquina/';
  
  maquinaForm = this.fb.group({
    marca: new FormControl('' ,[Validators.required]),
    modelo: new FormControl('' ,[Validators.required]),
  });

  constructor(private RestService: RestService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  submit(){
    this.crearMaquina();
    this.router.navigate(['/administrar/maquinas']);
  }

  crearMaquina(){
    this.RestService.post(this.url_createMaquina, this.maquinaForm.value)
    .subscribe( (data: any) => {
    } )
  }
}
