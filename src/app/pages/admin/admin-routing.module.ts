import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { HeaderHComponent } from '../../section/CAdmin/header-h/header-h.component';
import { ListarHeaderComponent } from '../../section/CAdmin/listar-header/listar-h.component';

import { HabilidadesHComponent } from '../../section/CAdmin/habilidades-h/habilidades-h.component';
import { ListarHabilidadesComponent } from '../../section/CAdmin/listar-habilidades/listar-habilidades.component';

import { HistorialHComponent } from '../../section/CAdmin/historial-h/historial-h.component';
import { ListarHistorialComponent } from '../../section/CAdmin/listar-historial/listar-historial.component';

import { ProyectosHComponent } from 'src/app/section/CAdmin/proyectos-h/proyectos-h.component';
import { ListarProyectosComponent } from 'src/app/section/CAdmin/listar-proyectos/listar-proyectos.component';

import { ContactoHComponent } from 'src/app/section/CAdmin/contacto-h/contacto-h.component';
import { ListarContactoComponent } from 'src/app/section/CAdmin/listar-contacto/crear-h.component';

import { FooterHComponent } from 'src/app/section/CAdmin/footer-h/footer-h.component';
import { ListarFooterComponent } from 'src/app/section/CAdmin/listar-footer/listar-footer.component';


const routes: Routes = [{ path: '', component: AdminComponent }, 

{ path: 'inicio/:id', component: HeaderHComponent }, { path: 'iniciolista', component: ListarHeaderComponent },
{ path: 'habilidades/:id', component: HabilidadesHComponent },{ path: 'habilidadeslista', component: ListarHabilidadesComponent },
{ path: 'historial/:id', component: HistorialHComponent },{ path: 'historiallista', component: ListarHistorialComponent },
{ path: 'proyectos/:id', component: ProyectosHComponent },{ path: 'proyectoslista', component: ListarProyectosComponent },
{ path: 'contacto/:id', component: ContactoHComponent },{ path: 'contactolista', component: ListarContactoComponent },
{ path: 'footer/:id', component: FooterHComponent },{ path: 'footerlista', component: ListarFooterComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
