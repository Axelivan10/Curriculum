import { Component, OnInit } from '@angular/core';
import { HabilidadesAdmin } from 'src/app/models/admin/habilidades-admin';
import { HttpRequestInterceptor } from 'src/app/services/interceptor.module';
import { Subscription } from 'rxjs';
import { HabilidadesService } from 'src/app/services/admin/habilidades.service';

@Component({
  selector: 'app-listar-habilidades',
  templateUrl: './listar-habilidades.component.html',
  styleUrls: ['./listar-habilidades.component.css']
})
export class ListarHabilidadesComponent implements OnInit {
  private subscriptions: Array<Subscription> = [];
  habilidades: HabilidadesAdmin[];

  constructor(private service: HabilidadesService) { }

   ngOnInit(): void {
    const newSubs = this.service.getHabilidades().subscribe(
      next => this.habilidades = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteHabilidad(id:number){

    
      const newSubs = this.service.deleteHabilidad(id).subscribe(
        () => this.habilidades = this.habilidades.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    

    // if(confirm('Delete this ta cosa?')){
    //   const newSubs = this.service.deleteHabilidad(id).subscribe(
    //     () => this.habilidades = this.habilidades.filter( f => f.id != id)
    //   );
    //   this.subscriptions.push(newSubs);
    // }
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }
}
