import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'todolinkedin';
  hakkinda="";

  deneyim="";

  egitim="";

  onHakkindaUpdate(data:any){
    this.hakkinda=data;
  }

  deneyimEkle(data:any){
    this.deneyim = data;
  }

  egitimEkle(data:any){
    this.egitim = data;
  }
}
