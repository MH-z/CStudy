import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-egitim',
  templateUrl: './modal-egitim.component.html',
  styleUrls: ['./modal-egitim.component.scss']
})
export class ModalEgitimComponent implements OnInit {

  enteroname:string ="";
  enterdname:string ="";
  enterbname:string ="";
  constructor() { }

  ngOnInit(): void {

  }  

  @Output() EgitimEvent = new EventEmitter<string>();

  egitimKaydet(enteroname:string,enterdname:string,enterbname:string){
    this.EgitimEvent.emit();
  }

}
