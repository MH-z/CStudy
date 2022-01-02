import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modaldeneyimler',
  templateUrl: './modaldeneyimler.component.html',
  styleUrls: ['./modaldeneyimler.component.scss']
})
export class ModaldeneyimlerComponent implements OnInit {

  constructor() { }

  enterFirma:string ="";
  enterSirket:string ="";
  enterKonum:string="";

  @Output() deneyimEvent = new EventEmitter();

  ngOnInit(): void {
  }

  saveDeneyim(enterFirma:string,enterSirket:string,enterKonum:string){
    let deneyim={title:enterFirma, sirket: enterSirket, konum:enterKonum};
     this.deneyimEvent.emit(deneyim);
  }

}
