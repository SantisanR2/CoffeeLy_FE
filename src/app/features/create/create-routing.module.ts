import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateSiembraComponent } from "./create-siembra/create-siembra.component";
import { CreateFertilizacionComponent } from "./create-fertilizacion/create-fertilizacion.component";
import { CreateRiegoComponent } from "./create-riego/create-riego.component";
import { CreatePodaComponent } from "./create-poda/create-poda.component";
import { CreateCosechaComponent } from "./create-cosecha/create-cosecha.component";
import { CreateDespulpadoComponent } from "./create-despulpado/create-despulpado.component";
import { CreateLavadoComponent } from "./create-lavado/create-lavado.component";
import { CreateFermentacionComponent } from "./create-fermentacion/create-fermentacion.component";
import { CreateSecadoComponent } from "./create-secado/create-secado.component";
import { CreateMoliendaComponent } from "./create-molienda/create-molienda.component";
import { CreateSeleccionComponent } from "./create-seleccion/create-seleccion.component";
import { CreateTostionComponent } from "./create-tostion/create-tostion.component";
import { CreateCatacionComponent } from "./create-catacion/create-catacion.component";

const routes: Routes = [
    {
        path: 'siembra',
        component: CreateSiembraComponent
    },
    {
        path: 'fertilizacion',
        component: CreateFertilizacionComponent
    },
    {
        path: 'riego',
        component: CreateRiegoComponent
    },
    {
        path:'poda',
        component: CreatePodaComponent
    },
    {
        path: 'cosecha',
        component: CreateCosechaComponent
    },
    {
        path: 'despulpado',
        component: CreateDespulpadoComponent,
    },
    {
        path: 'lavado',
        component: CreateLavadoComponent,
    },
    {
        path: 'fermentacion',
        component: CreateFermentacionComponent,
    },
    {
        path: 'secado',
        component:CreateSecadoComponent,
    },
    {
        path:'molienda',
        component: CreateMoliendaComponent,
    },
    {
        path:'seleccion',
        component: CreateSeleccionComponent,
    },
    {
        path:'tostion',
        component: CreateTostionComponent,
    },
    {
        path:'catacion',
        component: CreateCatacionComponent,
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }