import { Component, OnInit } from '@angular/core';
import { FooterAdmin } from 'src/app/models/admin/footer-admin';
import { HttpRequestInterceptor } from 'src/app/services/interceptor.module';
import { Subscription } from 'rxjs';
import { FooterService } from 'src/app/services/admin/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private subscriptions: Array<Subscription> = [];
  footers: FooterAdmin[];

  constructor(private service: FooterService) { }

   ngOnInit(): void {
    const newSubs = this.service.getFooters().subscribe(
      next => this.footers = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteFooter(id:number){
    
      const newSubs = this.service.deleteFooter(id).subscribe(
        () => this.footers = this.footers.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
