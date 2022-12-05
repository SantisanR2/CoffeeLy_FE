import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoteEditComponent } from "./lote-edit/lote-edit.component"; 
import { LoteEmpresaComponent } from "./lote-history/lote-empresa/lote-empresa.component";
import { LoteHistoryComponent } from "./lote-history/lote-history.component"; 

const routes: Routes = [
    {
        path: 'edit',
        component: LoteEditComponent
    },
    {
        path: 'history',
        component: LoteHistoryComponent
    },
    {
        path: 'empresa',
        component: LoteEmpresaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoteRoutingModule { }