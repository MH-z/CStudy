import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-ilgialani',
  templateUrl: './modal-ilgialani.component.html',
  styleUrls: ['./modal-ilgialani.component.scss']
})
export class ModalIlgialaniComponent implements OnInit {

  constructor() { }

  

  @Output() ialani = new EventEmitter<any>();

  ngOnInit(): void {
  }

}
