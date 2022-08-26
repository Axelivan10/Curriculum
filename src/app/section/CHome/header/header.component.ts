import { Component, OnInit } from '@angular/core';
import { InicioAdmin } from 'src/app/models/admin/inicio-admin';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/services/admin/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];
  headers: InicioAdmin[];

  constructor(private service: HeaderService) { }

   ngOnInit(): void {
    const newSubs = this.service.getHeaders().subscribe(
      next => this.headers = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteHeader(id:number){
    
      const newSubs = this.service.deleteHeader(id).subscribe(
        () => this.headers = this.headers.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }
  




  toHeader(){
    document.getElementById("header")?.scrollIntoView({behavior:"smooth"});
  }

  toHabilidades(){
    document.getElementById("habilidades")?.scrollIntoView({behavior:"smooth"});
  }

  toHistorial(){
    document.getElementById("historial")?.scrollIntoView({behavior:"smooth"});
  }

  toProyectos(){
    document.getElementById("proyectos")?.scrollIntoView({behavior:"smooth"});
  }

  toContacto(){
    document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});
  }
  
}
