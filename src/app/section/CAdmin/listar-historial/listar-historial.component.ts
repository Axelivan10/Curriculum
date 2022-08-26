import { Component, OnInit } from '@angular/core';
import { HistorialAdmin } from 'src/app/models/admin/historial-admin';
import { HttpRequestInterceptor } from 'src/app/services/interceptor.module';
import { Subscription } from 'rxjs';
import { HistorialService } from 'src/app/services/admin/historial.service';
@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.css']
})
export class ListarHistorialComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];
  historiales: HistorialAdmin[];

  constructor(private service: HistorialService) { }

   ngOnInit(): void {
    const newSubs = this.service.getHistoriales().subscribe(
      next => this.historiales = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteHistorial(id:number){
    
      const newSubs = this.service.deleteHistorial(id).subscribe(
        () => this.historiales = this.historiales.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }
}
