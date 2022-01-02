import { Component, Input, OnInit } from '@angular/core';
import { ModalEgitimComponent } from '../modal-egitim/modal-egitim.component';

@Component({
  selector: 'app-egitim',
  templateUrl: './egitim.component.html',
  styleUrls: ['./egitim.component.scss']
})
export class EgitimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() parentdata = "";

  //EgitimSatiri:string = "";

  egitimKaydet(data1:string,data2:string,data3:string){
    this.parentdata = data1 + '' + data2 + '' +data3;
  }

}
