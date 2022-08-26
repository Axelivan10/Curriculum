import { Component, OnInit } from '@angular/core';
import { ContactoAdmin } from 'src/app/models/admin/contacto-admin';
import { HttpRequestInterceptor } from 'src/app/services/interceptor.module';
import { Subscription } from 'rxjs';
import { ContactoService } from 'src/app/services/admin/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];
  contactos: ContactoAdmin[];

  constructor(private service: ContactoService) { }

   ngOnInit(): void {
    const newSubs = this.service.getContactos().subscribe(
      next => this.contactos = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteContacto(id:number){
    
      const newSubs = this.service.deleteContacto(id).subscribe(
        () => this.contactos = this.contactos.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
