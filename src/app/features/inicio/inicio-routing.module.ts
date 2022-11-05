import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioFincaComponent } from "./inicio-finca/inicio-finca.component";
import { InicioEmpresaComponent } from "./inicio-empresa/inicio-empresa.component";

const routes: Routes = [
    {
        path: 'finca',
        component: InicioFincaComponent
    },
    {
        path: 'empresa',
        component: InicioEmpresaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InicioRoutingModule { }