import { Component, Output ,EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  aboutMe:any="";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  kaydetHakkinda(data:any){
    return this.newItemEvent.emit(data);
  }
}
