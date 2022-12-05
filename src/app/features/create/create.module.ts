import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavFincaModule } from 'src/app/shared/nav-finca/nav-finca.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSiembraComponent } from './create-siembra/create-siembra.component';
import { RestService } from './services/rest.service';
import { CreateFertilizacionComponent } from './create-fertilizacion/create-fertilizacion.component';
import { CreateRiegoComponent } from './create-riego/create-riego.component';
import { CreatePodaComponent } from './create-poda/create-poda.component';
import { CreateCosechaComponent } from './create-cosecha/create-cosecha.component';
import { CreateDespulpadoComponent } from './create-despulpado/create-despulpado.component';
import { CreateLavadoComponent } from './create-lavado/create-lavado.component';
import { CreateFermentacionComponent } from './create-fermentacion/create-fermentacion.component';
import { CreateSecadoComponent } from './create-secado/create-secado.component';
import { CreateMoliendaComponent } from './create-molienda/create-molienda.component';
import { CreateSeleccionComponent } from './create-seleccion/create-seleccion.component';
import { CreateTostionComponent } from './create-tostion/create-tostion.component';
import { CreateCatacionComponent } from './create-catacion/create-catacion.component';
import { CreateMaquinaComponent } from './create-maquina/create-maquina.component';
import { NavEmpresaComponent } from 'src/app/shared/nav-empresa/nav-empresa/nav-empresa.component';
import { NavEmpresaModule } from 'src/app/shared/nav-empresa/nav-empresa.module';
import { EditComponent } from './create-maquina/edit/edit.component';
import { CreateFincaComponent } from './create-finca/create-finca.component';
import { EditfComponent } from './create-finca/editf/editf.component';

@NgModule({
  declarations: [
    CreateSiembraComponent,
    CreateFertilizacionComponent,
    CreateRiegoComponent,
    CreatePodaComponent,
    CreateCosechaComponent,
    CreateDespulpadoComponent,
    CreateLavadoComponent,
    CreateFermentacionComponent,
    CreateSecadoComponent,
    CreateMoliendaComponent,
    CreateSeleccionComponent,
    CreateTostionComponent,
    CreateCatacionComponent,
    CreateMaquinaComponent,
    EditComponent,
    CreateFincaComponent,
    EditfComponent,
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    NavFincaModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavEmpresaModule,
  ],
  exports: [
    CreateSiembraComponent,
    CreateFertilizacionComponent
  ],
  providers: [RestService]
})
export class CreateModule { }