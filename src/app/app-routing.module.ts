import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) } , 
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },{ path: 'create', loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule) },{ path: 'edit', loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

