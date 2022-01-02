import { Component,Output,EventEmitter, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-hakkinda',
  templateUrl: './hakkinda.component.html',
  styleUrls: ['./hakkinda.component.scss']
})
export class HakkindaComponent implements OnInit {
  
  @Input() hakkinda:string="";
  constructor() { }

  ngOnInit(): void {
  }

  aboutLabel:string ="";

  onModelSave(event:any){
    return this.aboutLabel = event;
  }

}
