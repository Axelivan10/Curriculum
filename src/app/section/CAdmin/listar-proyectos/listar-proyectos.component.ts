import { Component, OnInit } from '@angular/core';
import { ProyectosAdmin } from 'src/app/models/admin/proyectos-admin';
import { HttpRequestInterceptor } from 'src/app/services/interceptor.module';
import { Subscription } from 'rxjs';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';



@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})
export class ListarProyectosComponent implements OnInit {

 
  private subscriptions: Array<Subscription> = [];
  proyectos: ProyectosAdmin[];

  constructor(private service: ProyectosService) { }

   ngOnInit(): void {
    const newSubs = this.service.getProyectos().subscribe(
      next => this.proyectos = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteProyecto(id:number){
    
      const newSubs = this.service.deleteProyecto(id).subscribe(
        () => this.proyectos = this.proyectos.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }
}
