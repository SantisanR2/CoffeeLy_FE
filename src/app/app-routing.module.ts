
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  { path: 'inicio', loadChildren: () => import('./features/inicio/inicio.module').then(m => m.InicioModule), canActivate: [GuardGuard]},
  { path: 'create', loadChildren: () => import('./features/create/create.module').then(m => m.CreateModule), canActivate: [GuardGuard]},
  { path: 'lote', loadChildren: () => import('./features/lote/lote.module').then(m => m.LoteModule), canActivate: [GuardGuard]},
  { path: 'administrar', loadChildren: () => import('./features/administrar/administrar.module').then(m => m.AdministrarModule), canActivate: [GuardGuard]},
  { path: 'superuser', loadChildren: () => import('./features/superuser/superuser.module').then(m => m.SuperuserModule), canActivate: [GuardGuard]},
  { path: 'carga', loadChildren: () => import('./features/carga-archivos/carga-archivos.module').then(m => m.CargaArchivosModule), canActivate: [GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
