import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-egitim',
  templateUrl: './modal-egitim.component.html',
  styleUrls: ['./modal-egitim.component.scss']
})
export class ModalEgitimComponent implements OnInit {

  enterOkulAdi:string ="";
  enterDerece:string ="";
  enterBolum:string ="";
  constructor() { }

  ngOnInit(): void {

  }  

  @Output() EgitimEvent = new EventEmitter<any>();

  egitimKaydet(enterOkulAdi:string,enterDerece:string,enterBolum:string){
    let egitimSatiri = {okul:enterOkulAdi, derece: enterDerece, bolum:enterBolum};
    this.EgitimEvent.emit(egitimSatiri);
  }

}
