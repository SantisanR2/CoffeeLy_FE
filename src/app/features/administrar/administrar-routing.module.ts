import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministrarMaquinasComponent } from "./administrar-maquinas/administrar-maquinas.component";
import { AdministrarOperariosComponent } from "./administrar-operarios/administrar-operarios.component";
import { AdministrarRecolectoresComponent } from "./administrar-recolectores/administrar-recolectores.component";


const routes: Routes = [
    {
        path: 'recolectores',
        component: AdministrarRecolectoresComponent
    },
    {
        path: 'operarios',
        component: AdministrarOperariosComponent
    },
    {
        path: 'maquinas',
        component: AdministrarMaquinasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrarRoutingModule { }